const { By } = require('selenium-webdriver');

const locators = {
    searchInput: By.name('q'),
    pageLocator: By.id('lga')
}

module.exports = { locators };