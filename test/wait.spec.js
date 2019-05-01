const { describe, it } = require('mocha');
const { assert } = require('chai');
const Wait = require('../util/wait.util');

describe('Wait for true Test', () => {
    it('should wait for true', async () => {
        const wait = new Wait();
        const result = await wait.forTrue(() => true, 5, 1000);
        return assert.isTrue(result);
    });

    it('should wait for true (false)', async () => {
        const wait = new Wait();
        const result = await wait.forTrue(() => false, 5, 1000);
        return assert.isFalse(result);
    });
});

describe('Wait for false Test', () => {
    it('should wait for false', async () => {
        const wait = new Wait();
        const result = await wait.forFalse(() => false, 5, 1000);
        return assert.isTrue(result);
    });

    it('should wait for false (true)', async () => {
        const wait = new Wait();
        const result = await wait.forFalse(() => true, 5, 1000);
        return assert.isFalse(result);
    });
});

describe('Wait for multiple false Test', () => {
    it('should wait for  multiple false (true)', async () => {
        const wait = new Wait();
        const results = await Promise.all([
            wait.forFalse(() => true, 5, 1000),
            wait.forFalse(() => false, 5, 1000),
        ]);
        assert.isFalse(results[0]);
        assert.isTrue(results[1]);
    });
});