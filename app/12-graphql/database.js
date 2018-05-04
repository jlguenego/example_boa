const mongoose = require('mongoose');
const Ticket = mongoose.model('Ticket', new mongoose.Schema({
    name: String
}, { strict: false }));

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

function manageId(o) {
    o.id = o._id;
    delete o._id;
    return o;
}

async function createTicket(body) {
    console.log('create ticket start');
    try {
        const m = new Ticket(body);
        await m.save();
        const result = m.toObject();
        return manageId(result);
    } catch (e) {
        console.log('error', e);
        throw new Error('cannot create the ticket', e.message);
    }
}

async function retrieveAllTicket() {
    try {
        const resources = await Ticket.find({});
        const result = resources.map(r => manageId(r));
        return result;
    } catch (e) {
        console.log('error', e);
        throw new Error('cannot create the ticket', e.message);
    }
}

async function retrieveTicket(id) {
    try {
        const m = await Ticket.findById(id);
        if (m === null) {
            throw new Error('object not found');
        }
        const result = m.toObject();
        return manageId(result);
    } catch (e) {
        console.log('error', e);
        throw new Error('cannot create the ticket', e.message);
    }
}


const database = {
    createTicket,
    retrieveAllTicket,
    retrieveTicket,
};

module.exports = database;