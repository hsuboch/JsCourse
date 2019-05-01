const {describe, it} = require('mocha');
var api = require('../pages/exchangerate/exchangeratesapi');
const logger = require('../util/log.util');


describe('Get latest rates', () => {
    it('should get latest currency rates', async () => {
        const result = await api.getRates();
        logger.info(result.toString());
    });
});