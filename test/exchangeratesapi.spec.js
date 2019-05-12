const {describe, it} = require('mocha');
var api = require('../pages/exchangerate/exchangeratesapi');
const logger = require('../util/log.util');
const dateTimeUtil = require('../util/dateTime.util');

describe('Get latest rates', () => {
    it('should get currency rates for last 10 days', async () => {
        const result = await api.getRates('USD', dateTimeUtil.todayMinusTenDays());
        var parcedString = JSON.parse(result.toString());
        var results = [];
        for (var rate in parcedString.rates) {
            results.push(parcedString.rates[rate].RUB);
        }
        for (var i = results.length - 1; i >= 0; i--) {
            if (results[i - 1] < results[i]) {
                results[i] = `\n+ ${results[i].toString()}`;
            } else if (results[i - 1] > results[i]) {
                results[i] = `\n- ${results[i].toString()}`;
            } else {
                results[i] = `\n${results[i].toString()}`;
            }
        }
        logger.info(results);
    });
});