var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

const get = (server, url) => {
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
    getRates(date = null) {
        return gerResponseAwait('https://api.exchangeratesapi.io', date == null ? '/latest' : `/${date}`);
    }
}

module.exports = new ExchangeRatesApi();
