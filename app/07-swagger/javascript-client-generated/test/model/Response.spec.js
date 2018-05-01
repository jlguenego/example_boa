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
    instance = new TicketApi.Response();
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

  describe('Response', function() {
    it('should create an instance of Response', function() {
      // uncomment below and update the code to test Response
      //var instane = new TicketApi.Response();
      //expect(instance).to.be.a(TicketApi.Response);
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new TicketApi.Response();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new TicketApi.Response();
      //expect(instance).to.be();
    });

  });

}));
