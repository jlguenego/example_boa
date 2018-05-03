const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');
const auth = require('http-auth');
const path = require('path');

const app = express();

app.use('/secret.html', auth.connect(auth.digest({
	realm: 'mysecretarea',
	file: path.resolve(__dirname, './.users'),
})));

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function () {
	console.log('server started on port 8000');
});



