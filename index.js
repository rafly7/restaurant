// const dotenv = require('dotenv');
// const server = require('./src/server');
// const logEvent = require('./src/events/myEmitter');
// const connection = require('./config/dbConn');
// const loggingListener = require('./src/events/logging.listener');
// dotenv.config({path: `${__dirname}/.env.${process.env.NODE_ENV}`});
// if (process.env.APP_NAME) {
//     loggingListener();
//     connection.authenticate().then(() => {
//         server.listen(process.env.APP_PORT, process.env.HOST_LISTEN, function () {
//             if (server.listening) {
//                 logEvent.emit('APP-INFO', {
//                     logTitle: 'SERVER',
//                     logMessage: `Server is listening on ${process.env.APP_PORT}`
//                 });
//             }
//         });
//     }).catch((err) => {
//         logEvent.emit('APP-ERROR', {
//             logTitle: 'DB-FAILED',
//             logMessage: err
//         });
//     });
// } else {
//     process.exit(1);
// }


const dotenv = require('dotenv');
const server = require('./src/server');
const connection = require('./config/db.connect');
const logEvent = require('./src/events/myEmitter');
const loggingListener = require('./src/events/logging.listener');

dotenv.config()
if (process.env.MY_APP) {
    loggingListener();
    connection.authenticate().then(() => {
        server.listen(process.env.MY_PORT, process.env.HOST_LISTEN, function () {
            if (server.listening) {
                console.log(`Server is listening on port ${process.env.MY_PORT}`)
                logEvent.emit('APP-INFO', {
                    logTitle: 'SERVER',
                    logMessage: `Server is listening on port ${process.env.MY_PORT}`
                })
            }
        })
    }).catch((err) => {
        logEvent.emit('APP-ERROR', {
            logTitle: 'DB-FAILED',
            logMessage: err
        })
    })
} else {
    process.exit(1)
}

