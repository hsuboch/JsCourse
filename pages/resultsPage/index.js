const {locators} = require('./constants');
const BasePage = require('../../framework/basePage')

class ResultsPage extends BasePage {
    constructor(browser) {
        super(browser, locators.pageLocator);
    }

    async getCountOfResults() {
        var results = await this.browser.findElement(locators.resultsCount, 'Search input');
        var countOfResults = await results.getText();
        return countOfResults.split(' ').join('').match('\\d+')[0];
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