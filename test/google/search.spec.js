const Browser = require('../../framework/browser')
const HomePage = require('../../pages/homePage')
const { describe, it } = require('mocha');
const ResultsPage = require('../../pages/resultsPage');
const {assert} = require('chai');

describe('Google Search', () => {
    let browser;
    let resultsPage;

    before(async () => {
        browser = new Browser();
        await browser.start();
    });

    it('should search for "webdriver"', async () => {
        const homePage = new HomePage(browser);
        await homePage.search('webdriver');
    });

    //  it('should should find more than 10000 results', async () => {
    //      resultsPage = new ResultsPage(browser);
    //      var resultsCount = await resultsPage.getCountOfResults();
    //      assert.isTrue(parseInt(resultsCount, 10) > 10000);
    //  })

    //  it('should show "https://www.seleniumhq.org/projects/webdriver/" link on the first page', async () => {
    //      const resultsLinks = await resultsPage.getResultsLinks();
    //      assert.isTrue(resultsLinks.indexOf('https://www.seleniumhq.org/projects/webdriver/') != -1);
    //  })

    after(async () => {
        await browser.quit();
    });
});
