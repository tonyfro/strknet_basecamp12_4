"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/viem";
exports.ids = ["vendor-chunks/viem"];
exports.modules = {

/***/ "(ssr)/./node_modules/viem/_esm/utils/unit/formatUnits.js":
/*!**********************************************************!*\
  !*** ./node_modules/viem/_esm/utils/unit/formatUnits.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatUnits: () => (/* binding */ formatUnits)\n/* harmony export */ });\n/**\n *  Divides a number by a given exponent of base 10 (10exponent), and formats it into a string representation of the number..\n *\n * - Docs: https://viem.sh/docs/utilities/formatUnits\n *\n * @example\n * import { formatUnits } from 'viem'\n *\n * formatUnits(420000000000n, 9)\n * // '420'\n */\nfunction formatUnits(value, decimals) {\n    let display = value.toString();\n    const negative = display.startsWith('-');\n    if (negative)\n        display = display.slice(1);\n    display = display.padStart(decimals, '0');\n    let [integer, fraction] = [\n        display.slice(0, display.length - decimals),\n        display.slice(display.length - decimals),\n    ];\n    fraction = fraction.replace(/(0+)$/, '');\n    return `${negative ? '-' : ''}${integer || '0'}${fraction ? `.${fraction}` : ''}`;\n}\n//# sourceMappingURL=formatUnits.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdmllbS9fZXNtL3V0aWxzL3VuaXQvZm9ybWF0VW5pdHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxlQUFlLFNBQVMsT0FBTztBQUNwRjtBQUNBIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9oZWxsby14eXovcGFja2FnZXMvbmV4dGpzL25vZGVfbW9kdWxlcy92aWVtL19lc20vdXRpbHMvdW5pdC9mb3JtYXRVbml0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqICBEaXZpZGVzIGEgbnVtYmVyIGJ5IGEgZ2l2ZW4gZXhwb25lbnQgb2YgYmFzZSAxMCAoMTBleHBvbmVudCksIGFuZCBmb3JtYXRzIGl0IGludG8gYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci4uXG4gKlxuICogLSBEb2NzOiBodHRwczovL3ZpZW0uc2gvZG9jcy91dGlsaXRpZXMvZm9ybWF0VW5pdHNcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgZm9ybWF0VW5pdHMgfSBmcm9tICd2aWVtJ1xuICpcbiAqIGZvcm1hdFVuaXRzKDQyMDAwMDAwMDAwMG4sIDkpXG4gKiAvLyAnNDIwJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VW5pdHModmFsdWUsIGRlY2ltYWxzKSB7XG4gICAgbGV0IGRpc3BsYXkgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIGNvbnN0IG5lZ2F0aXZlID0gZGlzcGxheS5zdGFydHNXaXRoKCctJyk7XG4gICAgaWYgKG5lZ2F0aXZlKVxuICAgICAgICBkaXNwbGF5ID0gZGlzcGxheS5zbGljZSgxKTtcbiAgICBkaXNwbGF5ID0gZGlzcGxheS5wYWRTdGFydChkZWNpbWFscywgJzAnKTtcbiAgICBsZXQgW2ludGVnZXIsIGZyYWN0aW9uXSA9IFtcbiAgICAgICAgZGlzcGxheS5zbGljZSgwLCBkaXNwbGF5Lmxlbmd0aCAtIGRlY2ltYWxzKSxcbiAgICAgICAgZGlzcGxheS5zbGljZShkaXNwbGF5Lmxlbmd0aCAtIGRlY2ltYWxzKSxcbiAgICBdO1xuICAgIGZyYWN0aW9uID0gZnJhY3Rpb24ucmVwbGFjZSgvKDArKSQvLCAnJyk7XG4gICAgcmV0dXJuIGAke25lZ2F0aXZlID8gJy0nIDogJyd9JHtpbnRlZ2VyIHx8ICcwJ30ke2ZyYWN0aW9uID8gYC4ke2ZyYWN0aW9ufWAgOiAnJ31gO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0VW5pdHMuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/viem/_esm/utils/unit/formatUnits.js\n");

/***/ })

};
;