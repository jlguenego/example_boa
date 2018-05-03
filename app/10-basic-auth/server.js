const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');
const basicAuth = require('express-basic-auth')

const app = express();


app.use('/secret.html', basicAuth({
	users: { 'jlouis': 'suzanax' },
	challenge: true,
	realm: 'My secret room',
}));

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function () {
	console.log('server started on port 8000');
});



