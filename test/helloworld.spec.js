const { describe, it } = require('mocha')
const chai = require('chai');
const logger = require('../util/log.util')
const dateTimeUtil = require('../util/dateTime.util')

describe('Hello world test suite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    })
})

describe('Testing method today():Date', () => {
    it('should return correct current date', () => {
        var date = new Date();
        chai.assert.equal(dateTimeUtil.today().getDay, date.getDay, 'current day is correct');
        chai.assert.equal(dateTimeUtil.today().getMonth, date.getMonth, 'current month is correct');
        chai.assert.equal(dateTimeUtil.today().getFullYear, date.getFullYear, 'current year is correct');
    })
})

describe('Testing method setYear(date, year):Date', () => {
    it('should change year correctly', () => {
        var year = 2015;
        chai.assert.equal(dateTimeUtil.setYear(new Date(), year).getFullYear(), year, 'year value is correct');
    })
})

describe('Testing method daysDifference(dateLeft, dateRight)', () => {
    it('should change year correctly', () => {
        chai.assert.equal(dateTimeUtil.daysDifference(new Date(2019, 4, 15), new Date(2019, 4, 20)), 5, 'days difference is correct');
    })
})
