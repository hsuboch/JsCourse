const {By} = require('selenium-webdriver');

const locators = {
    resultsCount: By.id('resultStats'),
    links: By.xpath('//cite'),
    pageLocator: By.id('resultStats')
};

module.exports = {locators};