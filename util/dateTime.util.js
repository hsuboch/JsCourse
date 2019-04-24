class DateTimeUtil {
    today() {
        return new Date();
    }

    setYear(date, year) {
        return date.setYear(year);
    }


    daysDifference(dateLeft, dateRight){
        return Math.round(dateRight.getDate() - dateLeft.getDate()/(1000*60*60*24));
    }
}

module.exports = new DateTimeUtil();