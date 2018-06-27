const express = require('express');
const serveIndex = require('serve-index');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');

const app = express();

app.use(bearerToken());
app.use(bodyParser.json());

const SECRET = 'this is a server secret';

app.use('/connect', (req, res, next) => {
	const user = req.body;
	console.log('user', user);
	let token = jwt.sign({ user: req.body.user }, SECRET, {
		expiresIn: 60,
		algorithm: 'HS256'
	});
	console.log('token', token);

	res.status(200).json(token);
});

app.use('/secret.json', (req, res, next) => {
	try {
		const token = req.token;
		const decoded = jwt.verify(token, SECRET);
		console.log('decoded', decoded);
		res.status(200).json({content: `this is the ${decoded.user} secret`});
	} catch (e) {
		res.status(401).send('error' + e);
	}
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



