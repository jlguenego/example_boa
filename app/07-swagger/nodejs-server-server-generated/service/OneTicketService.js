'use strict';


/**
 * Create an new ticket
 * Create an new ticket on multinline... 
 *
 * ticket Ticket a ticket (optional)
 * returns Object
 **/
exports.createTicket = function(ticket) {
  return new Promise(function(resolve, reject) {
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
 * Delete an existing ticket.
 * Delete an existing ticket.
 *
 * id String ticket id
 * returns Object
 **/
exports.deleteTicket = function(id) {
  return new Promise(function(resolve, reject) {
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
exports.retrieveTicket = function(id) {
  return new Promise(function(resolve, reject) {
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
 * Update an new ticket
 * Update a ticket
 *
 * id String ticket id
 * ticket Ticket a ticket (optional)
 * returns Object
 **/
exports.updateTicket = function(id,ticket) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

