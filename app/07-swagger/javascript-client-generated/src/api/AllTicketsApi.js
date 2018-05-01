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

/**
* AllTickets service.
* @module api/AllTicketsApi
* @version 1.0.0
*/
export default class AllTicketsApi {

    /**
    * Constructs a new AllTicketsApi. 
    * @alias module:api/AllTicketsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete all tickets
     * To be able to delete all tickets. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAllTicketsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = null;

      return this.apiClient.callApi(
        '/tickets', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete all tickets
     * To be able to delete all tickets. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAllTickets() {
      return this.deleteAllTicketsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all tickets
     * To be able to retrieve all tickets. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    retrieveAllTicketsWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/tickets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all tickets
     * To be able to retrieve all tickets. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    retrieveAllTickets() {
      return this.retrieveAllTicketsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
