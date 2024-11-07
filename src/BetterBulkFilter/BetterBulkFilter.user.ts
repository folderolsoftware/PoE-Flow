import { createStylesheet } from "userscript-utils";

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