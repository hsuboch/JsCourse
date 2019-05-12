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
        capabilities.set('chromeOptions', {
            'args': ['--disable-plugins']
        })

        this.driver = await new Builder().forBrowser('chrome').withCapabilities(capabilities).build();
        try {
            await this.driver.get(config.startUrl);
            await this.driver.manage().setTimeouts(config.timeouts)
            logger.info(`Browser is started`)
        } catch (error) {
            logger.error(`Cannot start browser: ${error}`)
        }
    }

    async quit() {
        await this.driver.quit();
    }

    async findElement(by, name) {
        try {
            return this.driver.findElement(by);
        } catch (error) {
            logger.warning(`cannot find element with name ${name}: ${error}`)
        }
    }
    
    async findElements(by, name) {
        try {
            return this.driver.findElements(by);
        } catch (error) {
            logger.warning(`cannot find element with name ${name}: ${error}`)
        }
    }
}

module.exports = Browser;