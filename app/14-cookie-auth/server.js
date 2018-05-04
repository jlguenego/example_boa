const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

const PASSWORD = 'suzana';

app.use((req, res, next) => {
	console.log('Cookies: ', req.cookies)
	next();
});

app.use('/connect', (req, res, next) => {
	const value = req.header('X-JLGSecret');
	if (value === PASSWORD) {
		res.status(200).end();
	}
	res.status(401).end();
});

app.use('/secret.json', (req, res, next) => {
	if (req.cookies.jlouis !== PASSWORD) {
		res.status(401).end();
		return;
	}
	next();
});

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function () {
	console.log('server started on port 8000');
});



