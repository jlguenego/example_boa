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
/**
 * Accept JSON or XML
 * The format is decided according the HTTP Request header 'Accept'
 * 
 * @param {any} req 
 * @param {any} res 
 * @param {any} next 
 * @returns 
 */
module.exports = function outputFormat(req, res, next) {
	const accept = req.headers.accept.split(',').map(s => s.trim())[0];
	if (accept && ['application/xml', 'text/xml', 'application/json', '*/*'].indexOf(accept) === -1) {
		res.status(406).end();
		return;
	}
	const end = res.end;
	res.end = (chunk, encoding) => {
		if (accept === 'application/xml' || accept === 'text/xml') {
			const json = chunk.toString();
			const xml = jsonxml(JSON.stringify(handleArray(JSON.parse(json))));
			chunk = Buffer.from(xml);
			res.set('Content-Type', req.headers.accept);
			res.set('Content-Length', chunk.byteLength);
		}

		end.call(res, chunk, encoding);
	}
	next();
};
