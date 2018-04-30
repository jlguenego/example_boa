const jsonxml = require('jsontoxml');

function handleArray(js) {
	if (js instanceof Array) {
		return js.map(n => ({ item: n }));
	}
	if (js instanceof Object) {
		const result = {};
		for (let p in js) {
			result[p] = handleArray(js[p]);
		}
		return result;
	}
	return js;
}

module.exports = function outputFormat(req, res, next) {
	if (req.headers.accept && ['application/xml', 'text/xml', 'application/json', '*/*'].indexOf(req.headers.accept) === -1) {
		res.status(406).end();
		return;
	}
	const end = res.end;
	res.end = (chunk, encoding) => {
		if (req.headers.accept === 'application/xml' || req.headers.accept === 'text/xml') {
			const json = chunk.toString();
			const xml = jsonxml(JSON.stringify(handleArray(JSON.parse(json))));
			chunk = new Buffer(xml);
			res.set('Content-Type', req.headers.accept);
			res.set('Content-Length', chunk.byteLength);
		}

		end.call(res, chunk, encoding);
	}
	next();
};
