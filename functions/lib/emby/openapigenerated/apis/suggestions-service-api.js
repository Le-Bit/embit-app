"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionsServiceApi = exports.SuggestionsServiceApiFactory = exports.SuggestionsServiceApiFp = exports.SuggestionsServiceApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Emby Server API
 * Explore the Emby Server API
 *
 * OpenAPI spec version: 4.7.0.17
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
const axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
const base_1 = require("../base");
/**
 * SuggestionsServiceApi - axios parameter creator
 * @export
 */
const SuggestionsServiceApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * No authentication required
         * @summary Gets items based on a query.
         * @param {string} userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersByUseridSuggestions: async (userId, options = {}) => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new base_1.RequiredError("userId", "Required parameter userId was null or undefined when calling getUsersByUseridSuggestions.");
            }
            const localVarPath = `/Users/{UserId}/Suggestions`.replace(`{${"UserId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, "https://example.com");
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = new URLSearchParams(query).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    };
};
exports.SuggestionsServiceApiAxiosParamCreator = SuggestionsServiceApiAxiosParamCreator;
/**
 * SuggestionsServiceApi - functional programming interface
 * @export
 */
const SuggestionsServiceApiFp = function (configuration) {
    return {
        /**
         * No authentication required
         * @summary Gets items based on a query.
         * @param {string} userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUsersByUseridSuggestions(userId, options) {
            const localVarAxiosArgs = await (0, exports.SuggestionsServiceApiAxiosParamCreator)(configuration).getUsersByUseridSuggestions(userId, options);
            return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.SuggestionsServiceApiFp = SuggestionsServiceApiFp;
/**
 * SuggestionsServiceApi - factory interface
 * @export
 */
const SuggestionsServiceApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * No authentication required
         * @summary Gets items based on a query.
         * @param {string} userId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUsersByUseridSuggestions(userId, options) {
            return (0, exports.SuggestionsServiceApiFp)(configuration)
                .getUsersByUseridSuggestions(userId, options)
                .then((request) => request(axios, basePath));
        },
    };
};
exports.SuggestionsServiceApiFactory = SuggestionsServiceApiFactory;
/**
 * SuggestionsServiceApi - object-oriented interface
 * @export
 * @class SuggestionsServiceApi
 * @extends {BaseAPI}
 */
class SuggestionsServiceApi extends base_1.BaseAPI {
    /**
     * No authentication required
     * @summary Gets items based on a query.
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuggestionsServiceApi
     */
    getUsersByUseridSuggestions(userId, options) {
        return (0, exports.SuggestionsServiceApiFp)(this.configuration)
            .getUsersByUseridSuggestions(userId, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
exports.SuggestionsServiceApi = SuggestionsServiceApi;
//# sourceMappingURL=suggestions-service-api.js.map