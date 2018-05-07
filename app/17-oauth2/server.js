const express = require('express');
const serveIndex = require('serve-index');
const rp = require('request-promise');

const app = express();
app.set('view engine', 'ejs');
app.set('views', '.');

app.use((req, res, next) => {
	console.log('req.url', req.url);
	next();
});

app.use('/oauth/user-authorization-callback', async (req, res, next) => {
	try {
		const code = req.query.code;
		const state = req.query.state;
		console.log('code', code);
		console.log('state', state);
		// POST 
		const options = {
			method: 'POST',
			uri: 'https://github.com/login/oauth/access_token',
			qs: {
				client_id: 'Iv1.05f1c54e8fe2d5b9',
				client_secret: 'db88579970c7fbdd4772ba069151b47bb117c620',
				code: code,
				redirect_uri: 'http://localhost:8000/oauth/user-authorization-callback',
				state: state,
				some: 'this is my payload',
			},
			'headers': {
				Accept: 'application/json',
			}
		};
		let accessToken;
		const parsedBody = await rp(options);
		console.log('parsedBody', parsedBody);
		const obj = JSON.parse(parsedBody);
		accessToken = obj.access_token;
		console.log('accessToken', accessToken);
		const options2 = {
			uri: 'https://api.github.com/user',
			headers: {
				'User-Agent': 'node',
				'Authorization': 'token ' + accessToken,
			}
		};
		const response = await rp(options2);
		const user = JSON.parse(response);
		console.log('user', user);
		res.render('./user.ejs', { user });
	} catch (e) {
		console.log('error', e);
	}
});

app.use(express.static('../../'));
app.use(serveIndex('../../', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function () {
	console.log('server started on port 8000');
});
