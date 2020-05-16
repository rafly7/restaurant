const bunyan = require('bunyan');
const dotenv = require('dotenv');

dotenv.config();

const logConfig = bunyan.createLogger({
    name: process.env.MY_APP,
    level: process.env.LOG_LEVEL,
    streams: [
        {
            stream: process.stdout
        },
        {
            type: 'rotating-file',
            level: process.env.LOG_LEVEL,
            period: '3d',
            count: 3,
            path: process.env.LOG_PATH
        }
    ]
})

const recordLog = (logInfo) => {
    switch (logInfo.logType) {
        case 'FATAL':
            logConfig.fatal(logInfo.logTitle, logInfo.logMessage);
            break;
        case 'ERROR':
            logConfig.error(logInfo.logTitle, logInfo.logMessage);
            break;
        case 'INFO':
            logConfig.info(logInfo.logTitle, logInfo.logMessage);
        default:
            logConfig.debug(logInfo.logTitle, logInfo.logMessage);
    }
}

module.exports = recordLog;