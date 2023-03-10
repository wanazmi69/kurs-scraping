const cheerio = require("cheerio"); // 1

export default async function handler(req, res) {
	if (req.method === "GET") {
		const { amount, from, to } = req.query;
		try {
			// /api/kurs?amount=1&from=usd&to=idr
			const response = await fetch(
				`https://www.xe.com/currencyconverter/convert/?Amount=${amount}&From=${from.toUpperCase()}&To=${to.toUpperCase()}`
			);
			const htmlString = await response.text();
			const $ = cheerio.load(htmlString);

			res.statusCode = 200;
			return res.json({
				info: `${amount} ${from.toUpperCase()} to ${to.toUpperCase()}`,
				kurs1: getKurs($, "kurs1"),
				kurs2: getKurs($, "kurs2"),
				kurs3: getKurs($, "kurs3"),
				kurs4: getKurs($, "kurs4"),
				kurs5: getKurs($, "kurs5"),
			});
		} catch (e) {
			// 5
			res.statusCode = 404;
			return res.json({
				user: "Sepertinya ada masalah",
			});
		}
	}
}

const getKurs = ($, code) => {
	// "13,342.34503403";
	// 13342.34503403;
	// 13342;

	// ("13,342.34503403");
	// ("13342.34503403");
	// ("13342");
	const kurs = $(".result__BigRate-sc-1bsijpp-1").text();
	switch (code) {
		case "kurs1":
			return kurs.split(" ")[0];
		case "kurs2":
			return kurs.split(" ")[0].replace(",", "");
		case "kurs3":
			return kurs.split(" ")[0].replace(",", "").split(".")[0];
		case "kurs4":
			return parseFloat(kurs.split(" ")[0].replace(",", ""));
		case "kurs5":
			return parseInt(kurs.split(" ")[0].replace(",", "").split(".")[0]);

		default:
			break;
	}

	// return parseInt(kurs.split(" ")[0].replace(",", "")); // 13342.34503403
	// return kurs.split(" ")[0].replace(",", "").split(".")[0]; // 13342
};
