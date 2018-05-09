const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');

const app = express();

const PORT = 8000;
const HOST = '0.0.0.0';

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(PORT, HOST, () => {
	console.log(`server started on host ${HOST} port ${PORT}`);
});
