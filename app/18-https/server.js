const express = require('express');
const serveIndex = require('serve-index');
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('./config-https/out/server.key', 'utf8');
const certificate = fs.readFileSync('./config-https/out/server.crt', 'utf8');

const credentials = { key: privateKey, cert: certificate };
const app = express();

app.use(express.static('../../'));
app.use(serveIndex('../../', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(8000, function () {
	console.log('HTTP server started on port 8000');
});
httpsServer.listen(8443, function () {
	console.log('HTTP server started on port 8443');
});
