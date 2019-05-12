const { Key } = require('selenium-webdriver');
const { locators} = require('./constants');
const BasePage = require('../../framework/basePage')

class HomePage extends BasePage{

    constructor(browser) {
        super(browser, locators.pageLocator);
    }

    async search(text) {
        const input = await this.browser.findElement(locators.searchInput, 'search' );
        await input.sendKeys(text, Key.RETURN);
    }
}

module.exports = HomePage;