const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const outputFormat = require('./output-format');
const hateoas = require('./hateoas');

function getId(id) {
	try {
		return mongoose.Types.ObjectId(id);
	} catch (e) {
		throw {
			status: 400,
			message: 'Id not well formatted',
		}
	}
}

class Rest {
	resource(model) {
		const app = express.Router();
		app.use(bodyParser.json());
		app.use(outputFormat); // manage the accept xml, etc.

		// create
		app.post('/', async (req, res, next) => {
			console.log('create req.url', req.url);
			console.log('create req.body', req.body);
			try {
				const m = new model(req.body);
				await m.save();
				res.status(201).json({ content: hateoas.addLink(req, m.toObject()) });
			} catch (e) {
				res.status(e.status || 500).json({ error: e.message });
			}

		});

		// retrieve all
		app.get('/', async (req, res, next) => {
			console.log('retrieve all req.url', req.url);
			try {
				const resources = await model.find({});
				res.json({ content: resources.map(r => hateoas.addLink(req, r.toObject())) });
			} catch (e) {
				res.status(e.status || 500).json({ error: e.message });
			}
		});

		// retrieve one
		app.get('/:id', async (req, res, next) => {
			console.log('retrieve one req.url', req.url);
			try {
				const id = getId(req.params.id);
				const resource = await model.findById(id);
				if (resource === null) {
					res.status(404).json({ error: 'Object not found' });
					return;
				}
				res.json({ content: hateoas.addLink(req, resource.toObject()) });
			} catch (e) {
				res.status(e.status || 500).json({ error: e.message });
			}
		});

		// update (strong rewrite)
		app.put('/:id', async (req, res, next) => {
			console.log('update put req.url', req.url);
			try {
				const id = getId(req.params.id);
				let resource = await model.findById(id);
				if (resource === null) {
					res.status(404).json({ error: 'Object not found' });
					return;
				}
				await resource.update(req.body, {
					overwrite: true
				});
				resource = await model.findById(id);
				res.json({ content: hateoas.addLink(req, resource.toObject()) });
			} catch (e) {
				res.status(e.status || 500).json({ error: e.message });
			}
		});

		// update (small update with diff)
		app.patch('/:id', async (req, res, next) => {
			console.log('update put req.url', req.url);
			try {
				const id = getId(req.params.id);
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
				res.json({ content: hateoas.addLink(req, resource.toObject()) });
			} catch (e) {
				res.status(e.status || 500).json({ error: e.message });
			}
		});

		// delete one
		app.delete('/:id', async (req, res, next) => {
			console.log('delete one req.url', req.url);
			try {
				const id = getId(req.params.id);
				let resource = await model.findById(id);
				if (resource === null) {
					res.status(404).json({ error: 'Object not found' });
					return;
				}
				await model.deleteOne({ _id: req.params.id });
				res.json({ content: resource });
			} catch (e) {
				res.status(e.status || 500).json({ error: e.message });
			}
		});

		// delete all
		app.delete('/', async (req, res, next) => {
			console.log('delete all req.url', req.url);
			try {
				await model.deleteMany({});
				res.status(204).end();
			} catch (e) {
				res.status(e.status || 500).json({ error: e.message });
			}
		});

		return app;
	}
}

module.exports = new Rest();
