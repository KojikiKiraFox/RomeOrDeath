/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_heroEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/heroEvent */ \"./src/modules/heroEvent.js\");\n/* harmony import */ var _modules_rome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/rome */ \"./src/modules/rome.js\");\n\r\n\r\n\r\n(0,_modules_heroEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_rome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/modules/heroEvent.js":
/*!**********************************!*\
  !*** ./src/modules/heroEvent.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst hero = () =>{\r\n    const hero = document.getElementById(\"hero\")\r\n    const gameScreen = document.getElementsByClassName(\"game_screen\")\r\n    let xPosition = 0\r\n    let yPosition = 0\r\n\r\n    document.addEventListener('keydown', function(event) {\r\n        if (event.code == 'ArrowUp') {\r\n\r\n            yPosition = +yPosition - 10\r\n            hero.style.top= yPosition+'px'\r\n\r\n        } else if (event.code == 'ArrowRight') {\r\n\r\n            xPosition = +xPosition + 10\r\n            hero.style.left= xPosition+'px'\r\n            hero.style.transform='scale(1,1)'\r\n\r\n        } else if (event.code == 'ArrowDown') {\r\n\r\n            yPosition = +yPosition + 10\r\n            hero.style.top= yPosition+'px'\r\n\r\n        } else if (event.code == 'ArrowLeft') {\r\n\r\n            xPosition = +xPosition - 10\r\n            hero.style.left= xPosition+'px'\r\n            hero.style.transform='scale(-1,1)'\r\n\r\n        } else if (event.code == 'Escape') {\r\n            if (gameScreen == 0) {\r\n                gameScreen.style.display=\"block\" \r\n                gameScreen = 1\r\n            } else {\r\n                gameScreen.style.display=\"none\"\r\n                gameScreen = 0\r\n            }\r\n        }\r\n      });\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);\n\n//# sourceURL=webpack://test/./src/modules/heroEvent.js?");

/***/ }),

/***/ "./src/modules/rome.js":
/*!*****************************!*\
  !*** ./src/modules/rome.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst rome = () =>{\r\n //sadasd\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rome);\n\n//# sourceURL=webpack://test/./src/modules/rome.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;