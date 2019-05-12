const {locators} = require('./constants');
const BasePage = require('../../framework/basePage');

class ResultsPage extends BasePage {
    constructor(browser) {
        super(browser, locators.pageLocator);
    }

    async getCountOfResults() {
        const results = await this.browser.findElement(locators.resultsCount, 'Search input');
        const countOfResults = await results.getText();
        return countOfResults.split(' ').join('').match('\\d+')[0];
    }

    async getResultsLinks() {
        let results = [];
        const elements = await this.browser.findElements(locators.links, 'Search input');
        for (let i = 0; i < elements.length; i++) {
            results.push(await elements[i].getText());
        }
        return results;
    }
}

module.exports = ResultsPage;