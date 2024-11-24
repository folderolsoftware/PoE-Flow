// ==UserScript==
// @name          Path of Exile Better Bulk Filter
// @description   Completely hides unhighlighted items and categories in PoE bulk trade
// @inject-into   content
// @match         https://www.pathofexile.com/trade/*
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 882:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.fX = void 0;
var createStylesheet_1 = __webpack_require__(11);
Object.defineProperty(exports, "fX", ({ enumerable: true, get: function () { return createStylesheet_1.createStylesheet; } }));
var removeNodes_1 = __webpack_require__(141);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return removeNodes_1.removeNodes; } });
var getNextSibling_1 = __webpack_require__(89);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return getNextSibling_1.getNextSibling; } });
var getPreviousSibling_1 = __webpack_require__(457);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return getPreviousSibling_1.getPreviousSibling; } });


/***/ }),

/***/ 11:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStylesheet = createStylesheet;
function createStylesheet(styles) {
    const stylesheet = document.createElement('style');
    stylesheet.innerText = styles;
    document.head.appendChild(stylesheet);
    return stylesheet;
}


/***/ }),

/***/ 141:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeNodes = removeNodes;
/**
 * Removes a collection of HTML elements
 * @param nodes result of calling document.getElement(.*) or document.querySelector(.*) methods
 * @returns success or failure (no nodes to remove)
 */
function removeNodes(nodes) {
    if (!nodes) {
        return false;
    }
    const arr = nodes instanceof Element ? [nodes] : [...nodes];
    if (arr.length > 0) {
        arr.forEach(node => node.remove());
        return true;
    }
    return false;
}


/***/ }),

/***/ 89:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNextSibling = getNextSibling;
// also from gomakethings.com
// modified to accept regex
function getNextSibling(elem, selector) {
    // Get the next sibling element
    var sibling = elem.nextElementSibling;
    // If there's no selector, return the first sibling
    if (!selector)
        return sibling;
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (selector instanceof RegExp && (selector.test(sibling.className) || selector.test(sibling.id))) {
            return sibling;
        }
        if (typeof selector === 'string' && sibling.matches(selector)) {
            return sibling;
        }
        sibling = sibling.nextElementSibling;
    }
}


/***/ }),

/***/ 457:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPreviousSibling = getPreviousSibling;
// stolen from https://gomakethings.com/finding-the-next-and-previous-sibling-elements-that-match-a-selector-with-vanilla-js/
// modified to accept regex
function getPreviousSibling(elem, selector) {
    // Get the next sibling element
    var sibling = elem.previousElementSibling;
    // If there's no selector, return the first sibling
    if (!selector)
        return sibling;
    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (selector instanceof RegExp && (selector.test(sibling.className) || selector.test(sibling.id))) {
            return sibling;
        }
        if (typeof selector === 'string' && sibling.matches(selector)) {
            return sibling;
        }
        sibling = sibling.previousElementSibling;
    }
}


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
var __webpack_exports__ = {};
/* harmony import */ var userscript_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882);

class BetterBulkFilter {
    addStyles() {
        (0,userscript_utils__WEBPACK_IMPORTED_MODULE_0__/* .createStylesheet */ .fX)(`
            .dimmed .exchange-filter-item:not(.highlighted) {
                display: none;
            }

            .dimmed .filter {
                display: none;
            }

            /** Using a :not for this is very slow, this is much faster */
            .dimmed .filter:has(.filter-match-subtext) {
                display: table;
            }

            .dimmed .split {
                display: none;
            }
        `);
    }
    main() {
        this.addStyles();
    }
}
new BetterBulkFilter().main();

/******/ })()
;