"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/kurs";
exports.ids = ["pages/api/kurs"];
exports.modules = {

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "(api)/./src/pages/api/kurs.js":
/*!*******************************!*\
  !*** ./src/pages/api/kurs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\"); // 1\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        const { amount , from , to  } = req.query;\n        try {\n            // /api/kurs?amount=1&from=usd&to=idr\n            const response = await fetch(`https://www.xe.com/currencyconverter/convert/?Amount=${amount}&From=${from.toUpperCase()}&To=${to.toUpperCase()}`);\n            const htmlString = await response.text();\n            const $ = cheerio.load(htmlString);\n            res.statusCode = 200;\n            return res.json({\n                info: `${amount} ${from.toUpperCase()} to ${to.toUpperCase()}`,\n                kurs1: getKurs($, \"kurs1\"),\n                kurs2: getKurs($, \"kurs2\"),\n                kurs3: getKurs($, \"kurs3\"),\n                kurs4: getKurs($, \"kurs4\"),\n                kurs5: getKurs($, \"kurs5\")\n            });\n        } catch (e) {\n            // 5\n            res.statusCode = 404;\n            return res.json({\n                user: \"Sepertinya ada masalah\"\n            });\n        }\n    }\n}\nconst getKurs = ($, code)=>{\n    // \"13,342.34503403\";\n    // 13342.34503403;\n    // 13342;\n    // (\"13,342.34503403\");\n    // (\"13342.34503403\");\n    // (\"13342\");\n    const kurs = $(\".result__BigRate-sc-1bsijpp-1\").text();\n    switch(code){\n        case \"kurs1\":\n            return kurs.split(\" \")[0];\n        case \"kurs2\":\n            return kurs.split(\" \")[0].replace(\",\", \"\");\n        case \"kurs3\":\n            return kurs.split(\" \")[0].replace(\",\", \"\").split(\".\")[0];\n        case \"kurs4\":\n            return parseFloat(kurs.split(\" \")[0].replace(\",\", \"\"));\n        case \"kurs5\":\n            return parseInt(kurs.split(\" \")[0].replace(\",\", \"\").split(\".\")[0]);\n        default:\n            break;\n    }\n// return parseInt(kurs.split(\" \")[0].replace(\",\", \"\")); // 13342.34503403\n// return kurs.split(\" \")[0].replace(\",\", \"\").split(\".\")[0]; // 13342\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2t1cnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVVDLG1CQUFPQSxDQUFDLHdCQUFTLEdBQUcsSUFBSTtBQUV6QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN6QixNQUFNLEVBQUVDLE9BQU0sRUFBRUMsS0FBSSxFQUFFQyxHQUFFLEVBQUUsR0FBR0wsSUFBSU0sS0FBSztRQUN0QyxJQUFJO1lBQ0gscUNBQXFDO1lBQ3JDLE1BQU1DLFdBQVcsTUFBTUMsTUFDdEIsQ0FBQyxxREFBcUQsRUFBRUwsT0FBTyxNQUFNLEVBQUVDLEtBQUtLLFdBQVcsR0FBRyxJQUFJLEVBQUVKLEdBQUdJLFdBQVcsR0FBRyxDQUFDO1lBRW5ILE1BQU1DLGFBQWEsTUFBTUgsU0FBU0ksSUFBSTtZQUN0QyxNQUFNQyxJQUFJZixRQUFRZ0IsSUFBSSxDQUFDSDtZQUV2QlQsSUFBSWEsVUFBVSxHQUFHO1lBQ2pCLE9BQU9iLElBQUljLElBQUksQ0FBQztnQkFDZkMsTUFBTSxDQUFDLEVBQUViLE9BQU8sQ0FBQyxFQUFFQyxLQUFLSyxXQUFXLEdBQUcsSUFBSSxFQUFFSixHQUFHSSxXQUFXLEdBQUcsQ0FBQztnQkFDOURRLE9BQU9DLFFBQVFOLEdBQUc7Z0JBQ2xCTyxPQUFPRCxRQUFRTixHQUFHO2dCQUNsQlEsT0FBT0YsUUFBUU4sR0FBRztnQkFDbEJTLE9BQU9ILFFBQVFOLEdBQUc7Z0JBQ2xCVSxPQUFPSixRQUFRTixHQUFHO1lBQ25CO1FBQ0QsRUFBRSxPQUFPVyxHQUFHO1lBQ1gsSUFBSTtZQUNKdEIsSUFBSWEsVUFBVSxHQUFHO1lBQ2pCLE9BQU9iLElBQUljLElBQUksQ0FBQztnQkFDZlMsTUFBTTtZQUNQO1FBQ0Q7SUFDRCxDQUFDO0FBQ0YsQ0FBQztBQUVELE1BQU1OLFVBQVUsQ0FBQ04sR0FBR2EsT0FBUztJQUM1QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFFVCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixNQUFNQyxPQUFPZCxFQUFFLGlDQUFpQ0QsSUFBSTtJQUNwRCxPQUFRYztRQUNQLEtBQUs7WUFDSixPQUFPQyxLQUFLQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUIsS0FBSztZQUNKLE9BQU9ELEtBQUtDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUMsS0FBSztRQUN4QyxLQUFLO1lBQ0osT0FBT0YsS0FBS0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxLQUFLLElBQUlELEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN6RCxLQUFLO1lBQ0osT0FBT0UsV0FBV0gsS0FBS0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxLQUFLO1FBQ25ELEtBQUs7WUFDSixPQUFPRSxTQUFTSixLQUFLQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLEtBQUssSUFBSUQsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBRWxFO1lBQ0MsS0FBTTtJQUNSO0FBRUEsMEVBQTBFO0FBQzFFLHFFQUFxRTtBQUN0RSIsInNvdXJjZXMiOlsid2VicGFjazovL2t1cnMtc2NyYXBpbmcvLi9zcmMvcGFnZXMvYXBpL2t1cnMuanM/ZWJhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGVlcmlvID0gcmVxdWlyZShcImNoZWVyaW9cIik7IC8vIDFcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXHRpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuXHRcdGNvbnN0IHsgYW1vdW50LCBmcm9tLCB0byB9ID0gcmVxLnF1ZXJ5O1xuXHRcdHRyeSB7XG5cdFx0XHQvLyAvYXBpL2t1cnM/YW1vdW50PTEmZnJvbT11c2QmdG89aWRyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuXHRcdFx0XHRgaHR0cHM6Ly93d3cueGUuY29tL2N1cnJlbmN5Y29udmVydGVyL2NvbnZlcnQvP0Ftb3VudD0ke2Ftb3VudH0mRnJvbT0ke2Zyb20udG9VcHBlckNhc2UoKX0mVG89JHt0by50b1VwcGVyQ2FzZSgpfWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBodG1sU3RyaW5nID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuXHRcdFx0Y29uc3QgJCA9IGNoZWVyaW8ubG9hZChodG1sU3RyaW5nKTtcblxuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSAyMDA7XG5cdFx0XHRyZXR1cm4gcmVzLmpzb24oe1xuXHRcdFx0XHRpbmZvOiBgJHthbW91bnR9ICR7ZnJvbS50b1VwcGVyQ2FzZSgpfSB0byAke3RvLnRvVXBwZXJDYXNlKCl9YCxcblx0XHRcdFx0a3VyczE6IGdldEt1cnMoJCwgXCJrdXJzMVwiKSxcblx0XHRcdFx0a3VyczI6IGdldEt1cnMoJCwgXCJrdXJzMlwiKSxcblx0XHRcdFx0a3VyczM6IGdldEt1cnMoJCwgXCJrdXJzM1wiKSxcblx0XHRcdFx0a3VyczQ6IGdldEt1cnMoJCwgXCJrdXJzNFwiKSxcblx0XHRcdFx0a3VyczU6IGdldEt1cnMoJCwgXCJrdXJzNVwiKSxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIDVcblx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuXHRcdFx0cmV0dXJuIHJlcy5qc29uKHtcblx0XHRcdFx0dXNlcjogXCJTZXBlcnRpbnlhIGFkYSBtYXNhbGFoXCIsXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgZ2V0S3VycyA9ICgkLCBjb2RlKSA9PiB7XG5cdC8vIFwiMTMsMzQyLjM0NTAzNDAzXCI7XG5cdC8vIDEzMzQyLjM0NTAzNDAzO1xuXHQvLyAxMzM0MjtcblxuXHQvLyAoXCIxMywzNDIuMzQ1MDM0MDNcIik7XG5cdC8vIChcIjEzMzQyLjM0NTAzNDAzXCIpO1xuXHQvLyAoXCIxMzM0MlwiKTtcblx0Y29uc3Qga3VycyA9ICQoXCIucmVzdWx0X19CaWdSYXRlLXNjLTFic2lqcHAtMVwiKS50ZXh0KCk7XG5cdHN3aXRjaCAoY29kZSkge1xuXHRcdGNhc2UgXCJrdXJzMVwiOlxuXHRcdFx0cmV0dXJuIGt1cnMuc3BsaXQoXCIgXCIpWzBdO1xuXHRcdGNhc2UgXCJrdXJzMlwiOlxuXHRcdFx0cmV0dXJuIGt1cnMuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoXCIsXCIsIFwiXCIpO1xuXHRcdGNhc2UgXCJrdXJzM1wiOlxuXHRcdFx0cmV0dXJuIGt1cnMuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoXCIsXCIsIFwiXCIpLnNwbGl0KFwiLlwiKVswXTtcblx0XHRjYXNlIFwia3VyczRcIjpcblx0XHRcdHJldHVybiBwYXJzZUZsb2F0KGt1cnMuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoXCIsXCIsIFwiXCIpKTtcblx0XHRjYXNlIFwia3VyczVcIjpcblx0XHRcdHJldHVybiBwYXJzZUludChrdXJzLnNwbGl0KFwiIFwiKVswXS5yZXBsYWNlKFwiLFwiLCBcIlwiKS5zcGxpdChcIi5cIilbMF0pO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0Ly8gcmV0dXJuIHBhcnNlSW50KGt1cnMuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoXCIsXCIsIFwiXCIpKTsgLy8gMTMzNDIuMzQ1MDM0MDNcblx0Ly8gcmV0dXJuIGt1cnMuc3BsaXQoXCIgXCIpWzBdLnJlcGxhY2UoXCIsXCIsIFwiXCIpLnNwbGl0KFwiLlwiKVswXTsgLy8gMTMzNDJcbn07XG4iXSwibmFtZXMiOlsiY2hlZXJpbyIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYW1vdW50IiwiZnJvbSIsInRvIiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwidG9VcHBlckNhc2UiLCJodG1sU3RyaW5nIiwidGV4dCIsIiQiLCJsb2FkIiwic3RhdHVzQ29kZSIsImpzb24iLCJpbmZvIiwia3VyczEiLCJnZXRLdXJzIiwia3VyczIiLCJrdXJzMyIsImt1cnM0Iiwia3VyczUiLCJlIiwidXNlciIsImNvZGUiLCJrdXJzIiwic3BsaXQiLCJyZXBsYWNlIiwicGFyc2VGbG9hdCIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/kurs.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/kurs.js"));
module.exports = __webpack_exports__;

})();