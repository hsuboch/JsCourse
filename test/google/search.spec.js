const Browser = require('../../framework/browser');
const HomePage = require('../../pages/homePage');
const {describe, it} = require('mocha');
const ResultsPage = require('../../pages/resultsPage');
const {assert} = require('chai');
//const chaiWebdriver = require('chai-webbdriver');

describe('Google Search', () => {
    let browser;
    let homePage;
    let resultsPage;

    before(async () => {
        browser = new Browser();
        await browser.start();
        homePage = new HomePage(browser);
        resultsPage = new ResultsPage(browser);
        //chai.use(chaiWebdriver(browser.driver));
    });

    it('should search for "webdriver"', async () => {
        await homePage.isOpened().then((result) => assert.isTrue(result));
        //chai.expect('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input').dom.to.contain.value('webdriver');
        await homePage.search('webdriver');
        await resultsPage.isOpened().then((result) => assert.isTrue(result));
    });

    it('should should find more than 10000 results', async () => {
        const resultsCount = await resultsPage.getCountOfResults();
        assert.isTrue(parseInt(resultsCount, 10) > 10000);
    });

    it('should show "https://www.seleniumhq.org/projects/webdriver/" link on the first page', async () => {
        const resultsLinks = await resultsPage.getResultsLinks();
        assert.isTrue(resultsLinks.indexOf('https://www.seleniumhq.org/projects/webdriver/') != -1);
    });

    after(async () => {
        await browser.quit();
    });
});
