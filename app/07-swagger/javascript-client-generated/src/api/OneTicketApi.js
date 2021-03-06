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


import ApiClient from "../ApiClient";
import Ticket from '../model/Ticket';

/**
* OneTicket service.
* @module api/OneTicketApi
* @version 1.0.0
*/
export default class OneTicketApi {

    /**
    * Constructs a new OneTicketApi. 
    * @alias module:api/OneTicketApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an new ticket
     * Create an new ticket on multinline... 
     * @param {Object} opts Optional parameters
     * @param {module:model/Ticket} opts.ticket a ticket
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    createTicketWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['ticket'];


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/tickets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an new ticket
     * Create an new ticket on multinline... 
     * @param {Object} opts Optional parameters
     * @param {module:model/Ticket} opts.ticket a ticket
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    createTicket(opts) {
      return this.createTicketWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an existing ticket.
     * Delete an existing ticket.
     * @param {String} id ticket id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteTicketWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTicket");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/tickets/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing ticket.
     * Delete an existing ticket.
     * @param {String} id ticket id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteTicket(id) {
      return this.deleteTicketWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a single ticket
     * Retrieve a ticket
     * @param {String} id ticket id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    retrieveTicketWithHttpInfo(id) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling retrieveTicket");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/tickets/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a single ticket
     * Retrieve a ticket
     * @param {String} id ticket id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    retrieveTicket(id) {
      return this.retrieveTicketWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an new ticket
     * Update a ticket
     * @param {String} id ticket id
     * @param {Object} opts Optional parameters
     * @param {module:model/Ticket} opts.ticket a ticket
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    updateTicketWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['ticket'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTicket");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/tickets/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an new ticket
     * Update a ticket
     * @param {String} id ticket id
     * @param {Object} opts Optional parameters
     * @param {module:model/Ticket} opts.ticket a ticket
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    updateTicket(id, opts) {
      return this.updateTicketWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
