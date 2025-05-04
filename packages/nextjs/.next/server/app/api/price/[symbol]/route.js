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
exports.id = "app/api/price/[symbol]/route";
exports.ids = ["app/api/price/[symbol]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/price/[symbol]/route.ts":
/*!*****************************************!*\
  !*** ./app/api/price/[symbol]/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\nasync function GET(_, props) {\n    const params = await props.params;\n    const { symbol } = params;\n    let apiUrl = \"\";\n    if (symbol === \"ETH\") {\n        apiUrl = \"https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd\";\n    } else if (symbol === \"STRK\") {\n        apiUrl = \"https://api.coingecko.com/api/v3/simple/price?ids=starknet&vs_currencies=usd\";\n    } else {\n        return Response.json({\n            ethereum: {\n                usd: 0\n            },\n            starknet: {\n                usd: 0\n            }\n        });\n    }\n    try {\n        const response = await fetch(apiUrl);\n        if (!response.ok) {\n            throw new Error(`coingecko response status: ${response.status}`);\n        }\n        const json = await response.json();\n        return Response.json(json);\n    } catch (e) {\n        return Response.json({\n            ethereum: {\n                usd: 0\n            },\n            starknet: {\n                usd: 0\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByaWNlL1tzeW1ib2xdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxlQUFlQSxJQUNwQkMsQ0FBVSxFQUNWQyxLQUE4QztJQUU5QyxNQUFNQyxTQUFTLE1BQU1ELE1BQU1DLE1BQU07SUFFakMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0Q7SUFFbkIsSUFBSUUsU0FBUztJQUNiLElBQUlELFdBQVcsT0FBTztRQUNwQkMsU0FDRTtJQUNKLE9BQU8sSUFBSUQsV0FBVyxRQUFRO1FBQzVCQyxTQUNFO0lBQ0osT0FBTztRQUNMLE9BQU9DLFNBQVNDLElBQUksQ0FBQztZQUNuQkMsVUFBVTtnQkFBRUMsS0FBSztZQUFFO1lBQ25CQyxVQUFVO2dCQUFFRCxLQUFLO1lBQUU7UUFDckI7SUFDRjtJQUNBLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQU1QO1FBQzdCLElBQUksQ0FBQ00sU0FBU0UsRUFBRSxFQUFFO1lBQ2hCLE1BQU0sSUFBSUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFSCxTQUFTSSxNQUFNLEVBQUU7UUFDakU7UUFDQSxNQUFNUixPQUFPLE1BQU1JLFNBQVNKLElBQUk7UUFDaEMsT0FBT0QsU0FBU0MsSUFBSSxDQUFDQTtJQUN2QixFQUFFLE9BQU9TLEdBQUc7UUFDVixPQUFPVixTQUFTQyxJQUFJLENBQUM7WUFDbkJDLFVBQVU7Z0JBQUVDLEtBQUs7WUFBRTtZQUNuQkMsVUFBVTtnQkFBRUQsS0FBSztZQUFFO1FBQ3JCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvaGVsbG8teHl6L3BhY2thZ2VzL25leHRqcy9hcHAvYXBpL3ByaWNlL1tzeW1ib2xdL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoXHJcbiAgXzogUmVxdWVzdCxcclxuICBwcm9wczogeyBwYXJhbXM6IFByb21pc2U8eyBzeW1ib2w6IHN0cmluZyB9PiB9LFxyXG4pIHtcclxuICBjb25zdCBwYXJhbXMgPSBhd2FpdCBwcm9wcy5wYXJhbXM7XHJcblxyXG4gIGNvbnN0IHsgc3ltYm9sIH0gPSBwYXJhbXM7XHJcblxyXG4gIGxldCBhcGlVcmwgPSBcIlwiO1xyXG4gIGlmIChzeW1ib2wgPT09IFwiRVRIXCIpIHtcclxuICAgIGFwaVVybCA9XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvc2ltcGxlL3ByaWNlP2lkcz1ldGhlcmV1bSZ2c19jdXJyZW5jaWVzPXVzZFwiO1xyXG4gIH0gZWxzZSBpZiAoc3ltYm9sID09PSBcIlNUUktcIikge1xyXG4gICAgYXBpVXJsID1cclxuICAgICAgXCJodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9zaW1wbGUvcHJpY2U/aWRzPXN0YXJrbmV0JnZzX2N1cnJlbmNpZXM9dXNkXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHtcclxuICAgICAgZXRoZXJldW06IHsgdXNkOiAwIH0sXHJcbiAgICAgIHN0YXJrbmV0OiB7IHVzZDogMCB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgY29pbmdlY2tvIHJlc3BvbnNlIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oanNvbik7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBldGhlcmV1bTogeyB1c2Q6IDAgfSxcclxuICAgICAgc3RhcmtuZXQ6IHsgdXNkOiAwIH0sXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkdFVCIsIl8iLCJwcm9wcyIsInBhcmFtcyIsInN5bWJvbCIsImFwaVVybCIsIlJlc3BvbnNlIiwianNvbiIsImV0aGVyZXVtIiwidXNkIiwic3RhcmtuZXQiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1cyIsImUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/price/[symbol]/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_hello_xyz_packages_nextjs_app_api_price_symbol_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/price/[symbol]/route.ts */ \"(rsc)/./app/api/price/[symbol]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/price/[symbol]/route\",\n        pathname: \"/api/price/[symbol]\",\n        filename: \"route\",\n        bundlePath: \"app/api/price/[symbol]/route\"\n    },\n    resolvedPagePath: \"/workspaces/hello-xyz/packages/nextjs/app/api/price/[symbol]/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_hello_xyz_packages_nextjs_app_api_price_symbol_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcmljZSUyRiU1QnN5bWJvbCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJpY2UlMkYlNUJzeW1ib2wlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcmljZSUyRiU1QnN5bWJvbCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGaGVsbG8teHl6JTJGcGFja2FnZXMlMkZuZXh0anMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZXMlMkZoZWxsby14eXolMkZwYWNrYWdlcyUyRm5leHRqcyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi93b3Jrc3BhY2VzL2hlbGxvLXh5ei9wYWNrYWdlcy9uZXh0anMvYXBwL2FwaS9wcmljZS9bc3ltYm9sXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJpY2UvW3N5bWJvbF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcmljZS9bc3ltYm9sXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJpY2UvW3N5bWJvbF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvd29ya3NwYWNlcy9oZWxsby14eXovcGFja2FnZXMvbmV4dGpzL2FwcC9hcGkvcHJpY2UvW3N5bWJvbF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&page=%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprice%2F%5Bsymbol%5D%2Froute.ts&appDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fhello-xyz%2Fpackages%2Fnextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();