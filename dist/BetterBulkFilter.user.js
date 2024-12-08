// ==UserScript==
// @name          Path of Exile Better Bulk Filter
// @description   Completely hides unhighlighted items and categories in PoE bulk trade
// @inject-into   content
// @match         https://www.pathofexile.com/trade*
// ==/UserScript==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./node_modules/userscript-utils/dist/src/css/createStylesheet.js
function createStylesheet(styles) {
    const stylesheet = document.createElement('style');
    stylesheet.innerText = styles;
    document.head.appendChild(stylesheet);
    return stylesheet;
}

;// ./src/BetterBulkFilter/BetterBulkFilter.user.ts

class BetterBulkFilter {
    addStyles() {
        createStylesheet(`
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