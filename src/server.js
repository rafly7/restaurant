const http = require("http");
const express = require('express');
const logEvent = require('./events/myEmitter');
const appMiddleware = require('./middlewares/app-middlewares');
const appRoutes = require('./routes');


const app = express();
app.use(appMiddleware);
app.use(appRoutes);
const server = http.createServer(app);
server.on('error', function (e) {
    logEvent.emit('APP-ERROR', {
        logTitle: 'APP-FAILED',
        logMessage: e
    });
});
module.exports = server;