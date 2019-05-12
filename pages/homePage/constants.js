const { By } = require('selenium-webdriver');

const locators = {
    searchInput: By.name('q'),
    pageLocator: By.name('btnI')
}

module.exports = { locators };