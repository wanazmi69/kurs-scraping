const cheerio = require("cheerio"); // 1

export default async function handler(req, res) {
	if (req.method === "GET") {
		const { amount, from, to } = req.query;
		try {
			// 4
			// http://localhost:3000/api/kurs?amount=1&from=usd&to=idr
			const response = await fetch(
				`https://www.xe.com/currencyconverter/convert/?Amount=${amount}&From=${from.toUpperCase()}&To=${to.toUpperCase()}`
			);
			const htmlString = await response.text();
			const $ = cheerio.load(htmlString);

			res.statusCode = 200;
			return res.json({
				info: `${amount} ${from.toUpperCase()} to ${to.toUpperCase()}`,
				kurs: getKurs($),
				pesan: "haueeeeeeeeeeeeeeeee",
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

const getKurs = ($) => {
	const kurs = $(".result__BigRate-sc-1bsijpp-1").text();
	// return "Halooooooooooooooooo";
	return kurs.split(" ")[0].replace(",", "").split(".")[0];
	// fdsfsd
};
