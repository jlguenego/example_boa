'use strict';

var utils = require('../utils/writer.js');
var AllTickets = require('../service/AllTicketsService');

module.exports.deleteAllTickets = function deleteAllTickets (req, res, next) {
  AllTickets.deleteAllTickets()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAllTickets = function retrieveAllTickets (req, res, next) {
  AllTickets.retrieveAllTickets()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
