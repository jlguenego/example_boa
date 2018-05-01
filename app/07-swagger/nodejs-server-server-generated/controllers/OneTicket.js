'use strict';

var utils = require('../utils/writer.js');
var OneTicket = require('../service/OneTicketService');

module.exports.createTicket = function createTicket (req, res, next) {
  var ticket = req.swagger.params['ticket'].value;
  OneTicket.createTicket(ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTicket = function deleteTicket (req, res, next) {
  var id = req.swagger.params['id'].value;
  OneTicket.deleteTicket(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTicket = function retrieveTicket (req, res, next) {
  var id = req.swagger.params['id'].value;
  OneTicket.retrieveTicket(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTicket = function updateTicket (req, res, next) {
  var id = req.swagger.params['id'].value;
  var ticket = req.swagger.params['ticket'].value;
  OneTicket.updateTicket(id,ticket)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
