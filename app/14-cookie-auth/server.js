const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');
const bearerToken = require('express-bearer-token');

const app = express();
app.use(bearerToken());

app.use('/secret.json', (req, res, next) => {
	if (req.token !== 'jlouis-token'){
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



