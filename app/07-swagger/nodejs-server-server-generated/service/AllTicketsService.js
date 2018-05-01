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
 * Delete all tickets
 * To be able to delete all tickets. 
 *
 * no response value expected for this operation
 **/
exports.deleteAllTickets = function () {
  return new Promise(async function (resolve, reject) {
    // Do the job in MONGODB
    console.log('delete all in mongo');
    try {
      await Ticket.deleteMany({});
      resolve();
    } catch (e) {
      reject(e);
    }
    
  });
}


/**
 * List all tickets
 * To be able to retrieve all tickets. 
 *
 * returns Object
 **/
exports.retrieveAllTickets = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

