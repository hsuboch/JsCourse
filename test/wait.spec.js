const { describe, it } = require('mocha')
const { assert } = require('chai');
const logger = require('../util/log.util')
const Wait = require('../util/wait.util')

describe('Wait for true Test', () => {
    it('should wait for true', () => {
        const wait = new Wait();
        return wait.forTrue(() => true, 5, 1000).then((result) => assert.isTrue(result));
    })
})

describe('Wait for true Test', () => {
    it('should wait for true (false)', () => {
        const wait = new Wait();
        return wait.forTrue(() => false, 5, 1000).then((result) => assert.isFalse(result));
    })
})

describe('Wait for false Test', () => {
    it('should wait for false', () => {
        const wait = new Wait();
        return wait.forFalse(() => false, 5, 1000).then((result) => assert.isTrue(result));
    })
})

describe('Wait for false Test', () => {
    it('should wait for false (true)', () => {
        const wait = new Wait();
        return wait.forFalse(() => true, 5, 1000).then((result) => assert.isFalse(result));
    })
})