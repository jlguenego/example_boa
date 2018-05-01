const mongoose = require('mongoose');

const Ticket = mongoose.model('Ticket', new mongoose.Schema({
    name: String
}, { strict: false, }));

module.exports = Ticket;


async function connect() {
	try {
		await mongoose.connect('mongodb://localhost/boa');
		console.log('connected to MongoDB.');
	} catch (e) {
		console.log('error while connecting to MongoDB.', e.message);
		process.exit(1);
	}
}
connect();