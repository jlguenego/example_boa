'use strict';

const mongoose = require('mongoose');
const Ticket = require('./ticket');

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

/**
 * Create an new ticket
 * Create an new ticket on multinline... 
 *
 * ticket Ticket a ticket (optional)
 * returns Object
 **/
exports.createTicket = function (ticket) {
  return new Promise(async function (resolve, reject) {
    try {
      console.log('createTicket');
      const m = new Ticket(ticket);
      await m.save();
      resolve(JSON.stringify({ content: m.toObject() }));
    } catch (e) {
      console.log('error', e);
      reject(JSON.stringify(e));
    }
  });
}


/**
 * Delete an existing ticket.
 * Delete an existing ticket.
 *
 * id String ticket id
 * returns Object
 **/
exports.deleteTicket = function (id) {
  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a single ticket
 * Retrieve a ticket
 *
 * id String ticket id
 * returns Object
 **/
exports.retrieveTicket = function (id) {
  return new Promise(async function (resolve, reject) {
    try {
      const myId = getId(id);
      const resource = await Ticket.findById(myId);
      if (resource === null) {
        throw {
          status: 404,
          message: 'not found',
        }
      }
      resolve(JSON.stringify({ content: resource.toObject() }));
    } catch (e) {
      console.log('error', e);
      reject(JSON.stringify(e));
    }
  });
}


/**
 * Update an new ticket
 * Update a ticket
 *
 * id String ticket id
 * ticket Ticket a ticket (optional)
 * returns Object
 **/
exports.updateTicket = function (id, ticket) {
  return new Promise(async function (resolve, reject) {
    try {
      const myId = getId(id);
      let resource = await Ticket.findById(id);
      if (resource === null) {
        throw {
          status: 404,
          message: 'not found',
        }
      }
      await resource.update(ticket, {
        overwrite: true
      });
      resource = await Ticket.findById(id);
      resolve(JSON.stringify({ content: resource.toObject() }));
    } catch (e) {
      console.log('error', e);
      reject(JSON.stringify(e));
    }
  });
}

