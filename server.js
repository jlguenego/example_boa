const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');

const soapRouter = require('./app/05-soap/router');

const app = express();

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use('/soap', soapRouter);

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});



app.listen(8000, function () {
	console.log('server started on port 8000');
});
