const {locators} = require('./constants');
const BasePage = require('../../framework/basePage')

class ResultsPage extends BasePage {
    constructor(browser) {
        super(browser, locators.pageLocator);
    }

    async getCountOfResults() {
        var text = await this.browser.findElement(locators.resultsCount, 'Search input');
        return text.getText().replace(' ', '').search('');
    }

    async getResultsLinks() {
        var results = [];
        var elements = await this.browser.findElements(locators.links, 'Search input');
        elements.forEach(function (element){
            results.push(element.getText());
        });
        return results;
    }
}

module.exports = ResultsPage;