class BasePage{
    constructor(browser, locator) {
        this.browser = browser;
        this.locator = locator;
    }

    async isOpened(){
        const element = await this.browser.findElement(this.locator, 'page locator');
        return await element.isDisplayed();
    }
}

module.exports = BasePage;