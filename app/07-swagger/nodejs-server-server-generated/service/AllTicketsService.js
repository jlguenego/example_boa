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
      console.log('error', e);
      reject(JSON.stringify(e));
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
  return new Promise(async function (resolve, reject) {
    try {
      console.log('retrieve all tickets');
      const resources = await Ticket.find({});
      const array = resources.map(r => r.toObject());
      console.log('resources', array);
      resolve(JSON.stringify({content: array}));
    } catch (e) {
      console.log('error', e);
      reject(JSON.stringify(e));
    }
  });
}

