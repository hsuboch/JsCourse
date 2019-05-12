var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
const dateTimeUtil = require('../../util/dateTime.util');
const logger = require('../../util/log.util');
const server = 'https://api.exchangeratesapi.io';

const get = (server, url) => {
    logger.info(`sending ${url} to ${server}`);
    return new Promise((resolve) => {
        chai.request(server)
            .get(url)
            .set('Content-Type', "application/json")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                resolve(res.text);
            });
    });
};

const gerResponseAwait = async (server, url) => {
    return await get(server, url);
};

class ExchangeRatesApi {
    getRates(currency, date = null) {
        var todayDate = dateTimeUtil.today();
        var todayDateInFormat = `${todayDate.getFullYear()}-${todayDate.getMonth()}-${todayDate.getDate()}`;
        var url = date == null ? `/${todayDateInFormat}?base=${currency}` : `/history?start_at=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&end_at=${todayDateInFormat}&base=${currency}`;
        return gerResponseAwait(server, url);
    }
}

module.exports = new ExchangeRatesApi();
