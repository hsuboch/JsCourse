const logger = require('./log.util')

const doWait = (action, interval) => {
    return new Promise((resolve, reject) => {
        if(action()){
            setTimeout(()=> resolve(), interval);
        }
        setTimeout(() => reject(), interval);
    })
}
class Wait {
    forTrue(action, maxCount, interval, count = 0) {
        count++;
        logger.info(`[${count}] Wait for true`)
        return doWait(action, interval).then(() => {
            logger.warning('Reached expected condition')
            return true;
        }, () => {
            if (maxCount <= count) {
                logger.warning('Did not get expected result');
                return false;
            } else {
                return this.forTrue(action, maxCount, interval, count)
            }
        })
    }
}
module.exports = Wait;