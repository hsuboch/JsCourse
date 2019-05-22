const { eventFire, setText } = require('./js/sendEvent');
describe('Protractor Demo App', () => {
    const username = element(by.id('login'));
    const password = element(by.id('password'));
    const logIn = element(by.css('.btn-primary'));
    const logOut = element(by.xpath('//*[@id="logout"]//a'));
    const pageHeader = element(by.css('.panel-heading h2'));
    const form = element(by.xpath('//form'));

    beforeEach(() => {
        browser.get('http://reportingportal:8080');
    });

    it('should have title', () => {
        expect(browser.getTitle()).toEqual('Reporting Portal');
    });

    it('Should log in with admin', () => {
        //username.sendKeys('admin');
        //password.sendKeys('123456');
        //logIn.click();
        // browser.executeScript(eventFire, username, 'input');

        browser.executeScript(setText, username, 'input', 'test');
        //browser.executeScript(eventFire, username, 'input');
        browser.executeScript(setText, password, 'input', 'test');
        //browser.executeScript(eventFire, password, 'input');
        //browser.wait(()=>false, 20000);
        browser.executeScript(eventFire, form, 'submit');
        expect(pageHeader.getText()).toEqual('Select Project');
    });

    it('Should log out', () => {
        //logOut.click();
        browser.executeScript(eventFire, logOut, 'click');
        expect(username.isPresent()).toBe(true);
    });
});