const { describe, it } = require('mocha')
const chai = require('chai');
const logger = require('../util/log.util')

describe('Hello world test suite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    })
})