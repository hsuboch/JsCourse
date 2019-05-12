class BasePage{
    constructor(browser, locator) {
        this.browser = browser;
        this.locator = locator;
    }
}

module.exports = BasePage;