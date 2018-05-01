'use strict';


/**
 * Delete all tickets
 * To be able to delete all tickets. 
 *
 * no response value expected for this operation
 **/
exports.deleteAllTickets = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List all tickets
 * To be able to retrieve all tickets. 
 *
 * returns Object
 **/
exports.retrieveAllTickets = function() {
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

