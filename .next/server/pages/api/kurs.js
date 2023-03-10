"use strict";
(() => {
var exports = {};
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 48:
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ 462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const cheerio = __webpack_require__(48); // 1
async function handler(req, res) {
    if (req.method === "GET") {
        const { amount , from , to  } = req.query;
        try {
            // /api/konversi?amount=1&from=usd&to=idr
            const response = await fetch(`https://www.xe.com/currencyconverter/convert/?Amount=${amount}&From=${from.toUpperCase()}&To=${to.toUpperCase()}`);
            const htmlString = await response.text();
            const $ = cheerio.load(htmlString);
            res.statusCode = 200;
            return res.json({
                info: `${amount} ${from.toUpperCase()} to ${to.toUpperCase()}`,
                kurs1: getKurs($, "kurs1"),
                kurs2: getKurs($, "kurs2"),
                kurs3: getKurs($, "kurs3"),
                kurs4: getKurs($, "kurs4"),
                kurs5: getKurs($, "kurs5")
            });
        } catch (e) {
            // 5
            res.statusCode = 404;
            return res.json({
                user: "Sepertinya ada masalah"
            });
        }
    }
}
const getKurs = ($, code)=>{
    // "13,342.34503403";
    // 13342.34503403;
    // 13342;
    // ("13,342.34503403");
    // ("13342.34503403");
    // ("13342");
    const kurs = $(".result__BigRate-sc-1bsijpp-1").text();
    switch(code){
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(462));
module.exports = __webpack_exports__;

})();