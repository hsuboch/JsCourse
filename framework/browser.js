require('chromedriver');
const { Builder, Capabilities } = require('selenium-webdriver');
const config = require('../config.json');
const logger = require('../util/log.util');

class Browser {
    constructor() {
        this.driver;
    }

    async start() {
        const capabilities = Capabilities.chrome();
        capabilities.set('chromeoptions', {
            'args': ['--disable-plugins']
        })
        this.driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
        try {
            browser.get(config.startURL);
            logger.info('Browser is started');
        } catch (error) {

        }
    }

    async quit() {
        await this.driver.quit();
    }

    async findeElement(by, name) {
        try {
            return this.driver.findElement(by);
        } catch (error) {
            logger.warning(`cannot find element with name ${name}: ${error}`)
        }
    }
}

module.exports = Browser;