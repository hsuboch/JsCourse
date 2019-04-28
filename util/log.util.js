const LogWithTag = (tag, text) => {
    console.log(`[${tag}] ${text} [${tag}]]`)
}

class Log {

    info(text) {
        LogWithTag('INFO', text)
    }

    warning(text = 'Default warning') {
        LogWithTag('WARNING', text)
    }

    error(text) {
        LogWithTag('ERROR', text)
    }
}

module.exports = new Log();