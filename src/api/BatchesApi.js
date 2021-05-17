/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.42
 * Contact: apihelp@mailchimp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */



var ApiClient = require('../ApiClient');

/**
 * Batches service.
 * @module api/BatchesApi
 */

/**
 * Constructs a new BatchesApi. 
 * @alias module:api/BatchesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Delete batch request
   * Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.
   * @param {String} batchId The unique id for the batch operation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.deleteRequestWithHttpInfo = function(batchId) {
    var postBody = null;

    // verify the required parameter 'batchId' is set
    if (batchId === undefined || batchId === null) {
      throw new Error("Missing the required parameter 'batchId' when calling ");
    }

    var pathParams = {
      'batch_id': batchId
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/batches/{batch_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete batch request
   * Stops a batch request from running. Since only one batch request is run at a time, this can be used to cancel a long running request. The results of any completed operations will not be available after this call.
   * @param {String} batchId The unique id for the batch operation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.deleteRequest = function(batchId) {
    return this.deleteRequestWithHttpInfo(batchId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List batch requests
   * Get a summary of batch requests that have been made.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchOperations} and HTTP response
   */
  this.listWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv'),
      'count': opts['count'],
      'offset': opts['offset']
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/batches', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List batch requests
   * Get a summary of batch requests that have been made.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. Default value is 10. Maximum value is 1000 (default to 10)
   * @param {Number} opts.offset Used for [pagination](https://mailchimp.com/developer/marketing/docs/methods-parameters/#pagination), this it the number of records from a collection to skip. Default value is 0. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchOperations}
   */
  this.list = function(opts) {
    return this.listWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get batch operation status
   * Get the status of a batch request.
   * @param {String} batchId The unique id for the batch operation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Batch} and HTTP response
   */
  this.statusWithHttpInfo = function(batchId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'batchId' is set
    if (batchId === undefined || batchId === null) {
      throw new Error("Missing the required parameter 'batchId' when calling ");
    }

    var pathParams = {
      'batch_id': batchId
    };
    var queryParams = {
      'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
      'exclude_fields': this.apiClient.buildCollectionParam(opts['excludeFields'], 'csv')
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/batches/{batch_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get batch operation status
   * Get the status of a batch request.
   * @param {String} batchId The unique id for the batch operation.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Batch}
   */
  this.status = function(batchId, opts) {
    return this.statusWithHttpInfo(batchId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Start batch operation
   * Begin processing a batch operations request.
   * @param {module:model/Body} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Batch} and HTTP response
   */
  this.startWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };

    var formParams = {
    };

    var authNames = ['basicAuth'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json', 'application/problem+json'];
    var returnType = 'application/json';

    return this.apiClient.callApi(
      '/batches', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Start batch operation
   * Begin processing a batch operations request.
   * @param {module:model/Body} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Batch}
   */
  this.start = function(body) {
    return this.startWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
