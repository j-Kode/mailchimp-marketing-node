/*
 * Mailchimp Marketing API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3.0.29
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
 * BatchWebhooks service.
 * @module api/BatchWebhooksApi
 */

/**
 * Constructs a new BatchWebhooksApi. 
 * @alias module:api/BatchWebhooksApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;

  /**
   * Delete batch webhook
   * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
   * @param {String} batchWebhookId The unique id for the batch webhook.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */
  this.removeWithHttpInfo = function(batchWebhookId) {
    var postBody = null;

    // verify the required parameter 'batchWebhookId' is set
    if (batchWebhookId === undefined || batchWebhookId === null) {
      throw new Error("Missing the required parameter 'batchWebhookId' when calling ");
    }

    var pathParams = {
      'batch_webhook_id': batchWebhookId
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
      '/batch-webhooks/{batch_webhook_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Delete batch webhook
   * Remove a batch webhook. Webhooks will no longer be sent to the given URL.
   * @param {String} batchWebhookId The unique id for the batch webhook.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}
   */
  this.remove = function(batchWebhookId) {
    return this.removeWithHttpInfo(batchWebhookId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Get batch webhook info
   * Get information about a specific batch webhook.
   * @param {String} batchWebhookId The unique id for the batch webhook.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhook} and HTTP response
   */
  this.getWithHttpInfo = function(batchWebhookId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'batchWebhookId' is set
    if (batchWebhookId === undefined || batchWebhookId === null) {
      throw new Error("Missing the required parameter 'batchWebhookId' when calling ");
    }

    var pathParams = {
      'batch_webhook_id': batchWebhookId
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
      '/batch-webhooks/{batch_webhook_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Get batch webhook info
   * Get information about a specific batch webhook.
   * @param {String} batchWebhookId The unique id for the batch webhook.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhook}
   */
  this.get = function(batchWebhookId, opts) {
    return this.getWithHttpInfo(batchWebhookId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * List batch webhooks
   * Get all webhooks that have been configured for batches.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhooks} and HTTP response
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
      '/batch-webhooks', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * List batch webhooks
   * Get all webhooks that have been configured for batches.
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.fields A comma-separated list of fields to return. Reference parameters of sub-objects with dot notation.
   * @param {Array.<String>} opts.excludeFields A comma-separated list of fields to exclude. Reference parameters of sub-objects with dot notation.
   * @param {Number} opts.count The number of records to return. [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **10**. [Maximum value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **1000** (default to 10)
   * @param {Number} opts.offset The number of records from a collection to skip. Iterating over large collections with this parameter can be slow.  [Default value](/developer/guides/get-started-with-mailchimp-api-3/#Parameters) is **0**. (default to 0)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhooks}
   */
  this.list = function(opts) {
    return this.listWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Update batch webhook
   * Update a webhook that will fire whenever any batch request completes processing.
   * @param {String} batchWebhookId The unique id for the batch webhook.
   * @param {module:model/BatchWebhook2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhook} and HTTP response
   */
  this.updateWithHttpInfo = function(batchWebhookId, body) {
    var postBody = body;

    // verify the required parameter 'batchWebhookId' is set
    if (batchWebhookId === undefined || batchWebhookId === null) {
      throw new Error("Missing the required parameter 'batchWebhookId' when calling ");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling ");
    }

    var pathParams = {
      'batch_webhook_id': batchWebhookId
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
      '/batch-webhooks/{batch_webhook_id}', 'PATCH',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Update batch webhook
   * Update a webhook that will fire whenever any batch request completes processing.
   * @param {String} batchWebhookId The unique id for the batch webhook.
   * @param {module:model/BatchWebhook2} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhook}
   */
  this.update = function(batchWebhookId, body) {
    return this.updateWithHttpInfo(batchWebhookId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }

  /**
   * Add batch webhook
   * Configure a webhook that will fire whenever any batch request completes processing.
   * @param {module:model/BatchWebhook1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BatchWebhook} and HTTP response
   */
  this.createWithHttpInfo = function(body) {
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
      '/batch-webhooks', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }
  /**
   * Add batch webhook
   * Configure a webhook that will fire whenever any batch request completes processing.
   * @param {module:model/BatchWebhook1} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BatchWebhook}
   */
  this.create = function(body) {
    return this.createWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
