"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarApi = exports.CalendarApiFactory = exports.CalendarApiFp = exports.CalendarApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Ombi Api V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
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
 * CalendarApi - axios parameter creator
 * @export
 */
const CalendarApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2CalendarGet: async (options = {}) => {
            const localVarPath = `/api/v2/Calendar`;
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
exports.CalendarApiAxiosParamCreator = CalendarApiAxiosParamCreator;
/**
 * CalendarApi - functional programming interface
 * @export
 */
const CalendarApiFp = function (configuration) {
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV2CalendarGet(options) {
            const localVarAxiosArgs = await (0, exports.CalendarApiAxiosParamCreator)(configuration).apiV2CalendarGet(options);
            return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.CalendarApiFp = CalendarApiFp;
/**
 * CalendarApi - factory interface
 * @export
 */
const CalendarApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV2CalendarGet(options) {
            return (0, exports.CalendarApiFp)(configuration)
                .apiV2CalendarGet(options)
                .then((request) => request(axios, basePath));
        },
    };
};
exports.CalendarApiFactory = CalendarApiFactory;
/**
 * CalendarApi - object-oriented interface
 * @export
 * @class CalendarApi
 * @extends {BaseAPI}
 */
class CalendarApi extends base_1.BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarApi
     */
    apiV2CalendarGet(options) {
        return (0, exports.CalendarApiFp)(this.configuration)
            .apiV2CalendarGet(options)
            .then((request) => request(this.axios, this.basePath));
    }
}
exports.CalendarApi = CalendarApi;
//# sourceMappingURL=calendar-api.js.map