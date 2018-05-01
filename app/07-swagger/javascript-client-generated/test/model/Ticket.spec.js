/**
 * Ticket API
 * Ticket API for illustrating purpose.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: jlguenego@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TicketApi);
  }
}(this, function(expect, TicketApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TicketApi.Ticket();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Ticket', function() {
    it('should create an instance of Ticket', function() {
      // uncomment below and update the code to test Ticket
      //var instane = new TicketApi.Ticket();
      //expect(instance).to.be.a(TicketApi.Ticket);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TicketApi.Ticket();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TicketApi.Ticket();
      //expect(instance).to.be();
    });

  });

}));
