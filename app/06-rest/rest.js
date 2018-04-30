const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jsonxml = require('jsontoxml');

function handleArray(js) {
	if (js instanceof Array) {
		return js.map(n => ({item: n}));
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

function manageFormat() {
	const middleware = (req, res, next) => {
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
	return middleware;
}

class Rest {
	resource(model) {
		const app = express.Router();
		app.use(bodyParser.json());
		app.use(manageFormat());

		// create
		app.post('/', async (req, res, next) => {
			console.log('create req.url', req.url);
			try {
				const object = new model(req.body);
				await object.save();
				res.status(201).json({ content: object });
			} catch (e) {
				res.status(400).json({ error: e.message });
			}

		});

		// retrieve all
		app.get('/', async (req, res, next) => {
			console.log('retrieve all req.url', req.url);
			try {
				const resources = await model.find({});
				res.json({ content: resources });
			} catch (e) {
				res.status(400).json({ error: e.message });
			}
		});

		// retrieve one
		app.get('/:id', async (req, res, next) => {
			console.log('retrieve one req.url', req.url);
			try {
				const id = mongoose.Types.ObjectId(req.params.id);
				const resource = await model.findById(id);
				if (resource === null) {
					res.status(404).json({ error: 'Object not found' });
					return;
				}
				res.json({ content: resource });
			} catch (e) {
				res.status(400).json({ error: e.message });
			}
		});

		// update (strong rewrite)
		app.put('/:id', async (req, res, next) => {
			console.log('update put req.url', req.url);
			try {
				const id = mongoose.Types.ObjectId(req.params.id);
				let resource = await model.findById(id);
				if (resource === null) {
					res.status(404).json({ error: 'Object not found' });
					return;
				}
				await resource.update(req.body, {
					overwrite: true
				});
				resource = await model.findById(id);
				res.json({ content: resource });
			} catch (e) {
				res.status(400).json({ error: e.message });
			}
		});

		// update (small update with diff)
		app.patch('/:id', async (req, res, next) => {
			console.log('update put req.url', req.url);
			try {
				const id = mongoose.Types.ObjectId(req.params.id);
				let resource = await model.findById(id);
				if (resource === null) {
					res.status(404).json({ error: 'Object not found' });
					return;
				}
				await resource.update(req.body, {
					// PATCH want an overwrite set to false
					overwrite: false
				});
				resource = await model.findById(id);
				res.json({ content: resource });
			} catch (e) {
				res.status(400).json({ error: e.message });
			}
		});

		// delete one
		app.delete('/:id', async (req, res, next) => {
			console.log('delete one req.url', req.url);
			try {
				const id = mongoose.Types.ObjectId(req.params.id);
				let resource = await model.findById(id);
				if (resource === null) {
					res.status(404).json({ error: 'Object not found' });
					return;
				}
				await model.deleteOne({ _id: req.params.id });
				res.json({ content: resource });
			} catch (e) {
				res.status(400).json({ error: e.message });
			}
		});

		// delete all
		app.delete('/', async (req, res, next) => {
			console.log('delete all req.url', req.url);
			try {
				await model.deleteMany({});
				res.status(204).end();
			} catch (e) {
				res.status(400).json({ error: e.message });
			}
		});

		return app;
	}
}

module.exports = new Rest();
