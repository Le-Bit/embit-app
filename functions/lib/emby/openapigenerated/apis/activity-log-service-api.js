"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLogServiceApi = exports.ActivityLogServiceApiFactory = exports.ActivityLogServiceApiFp = exports.ActivityLogServiceApiAxiosParamCreator = void 0;
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
 * ActivityLogServiceApi - axios parameter creator
 * @export
 */
const ActivityLogServiceApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Gets activity log entries
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemActivitylogEntries: async (startIndex, limit, minDate, options = {}) => {
            const localVarPath = `/System/ActivityLog/Entries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, "https://example.com");
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "GET" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication apikeyauth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === "function"
                    ? await configuration.apiKey("api_key")
                    : await configuration.apiKey;
                localVarQueryParameter["api_key"] = localVarApiKeyValue;
            }
            // authentication embyauth required
            if (startIndex !== undefined) {
                localVarQueryParameter["StartIndex"] = startIndex;
            }
            if (limit !== undefined) {
                localVarQueryParameter["Limit"] = limit;
            }
            if (minDate !== undefined) {
                localVarQueryParameter["MinDate"] = minDate;
            }
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
exports.ActivityLogServiceApiAxiosParamCreator = ActivityLogServiceApiAxiosParamCreator;
/**
 * ActivityLogServiceApi - functional programming interface
 * @export
 */
const ActivityLogServiceApiFp = function (configuration) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Gets activity log entries
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSystemActivitylogEntries(startIndex, limit, minDate, options) {
            const localVarAxiosArgs = await (0, exports.ActivityLogServiceApiAxiosParamCreator)(configuration).getSystemActivitylogEntries(startIndex, limit, minDate, options);
            return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.ActivityLogServiceApiFp = ActivityLogServiceApiFp;
/**
 * ActivityLogServiceApi - factory interface
 * @export
 */
const ActivityLogServiceApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Requires authentication as administrator
         * @summary Gets activity log entries
         * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
         * @param {number} [limit] Optional. The maximum number of records to return
         * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSystemActivitylogEntries(startIndex, limit, minDate, options) {
            return (0, exports.ActivityLogServiceApiFp)(configuration)
                .getSystemActivitylogEntries(startIndex, limit, minDate, options)
                .then((request) => request(axios, basePath));
        },
    };
};
exports.ActivityLogServiceApiFactory = ActivityLogServiceApiFactory;
/**
 * ActivityLogServiceApi - object-oriented interface
 * @export
 * @class ActivityLogServiceApi
 * @extends {BaseAPI}
 */
class ActivityLogServiceApi extends base_1.BaseAPI {
    /**
     * Requires authentication as administrator
     * @summary Gets activity log entries
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return
     * @param {string} [minDate] Optional. The minimum date. Format &#x3D; ISO
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActivityLogServiceApi
     */
    getSystemActivitylogEntries(startIndex, limit, minDate, options) {
        return (0, exports.ActivityLogServiceApiFp)(this.configuration)
            .getSystemActivitylogEntries(startIndex, limit, minDate, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
exports.ActivityLogServiceApi = ActivityLogServiceApi;
//# sourceMappingURL=activity-log-service-api.js.map