import {subDays} from 'date-fns';

class DateTimeUtil {
    today() {
        return new Date();
    }

    setYear(date, year) {
        date.setFullYear(year);
        return date;
    }

    daysDifference(dateLeft, dateRight) {
        return Math.round((dateRight.getTime() - dateLeft.getTime()) / (1000 * 60 * 60 * 24));
    }

    todayMinusTenDays() {
        return subDays(this.today(), 10);
    }
}

module.exports = new DateTimeUtil();