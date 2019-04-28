const logger = require('./log.util')

const doWait = (action, interval, expectedValue) => {
    return new Promise((resolve, reject) => {
        var actualValue = action();
        if (actualValue == expectedValue) {
            setTimeout(() => resolve(), interval);
        }
        setTimeout(() => reject(actualValue), interval);
    })
}

const retrier = (action, maxCount, interval, expectedValue, count = 0) => {
    count++;
    logger.info(`[${count}] Wait for ${expectedValue}`);
    return doWait(action, interval, expectedValue).then(() => {
        logger.warning('Reached expected condition');
        return true;
    }, reject => {
        if (maxCount <= count) {
            logger.warning(`Did not get expected result. Actual result is ${reject}`);
            return false;
        } else {
            return retrier(action, maxCount, interval, expectedValue, count);
        }
    })
}

class Wait {
    forTrue(action, maxCount, interval) {
        return retrier(action, maxCount, interval, true);
    }

    forFalse(action, maxCount, interval) {
        return retrier(action, maxCount, interval, false);
    }
}

module.exports = Wait;