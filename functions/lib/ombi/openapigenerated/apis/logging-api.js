"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingApi = exports.LoggingApiFactory = exports.LoggingApiFp = exports.LoggingApiAxiosParamCreator = void 0;
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
 * LoggingApi - axios parameter creator
 * @export
 */
const LoggingApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @param {OmbiModelsUiLoggingModel} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1LoggingPost: async (body, options = {}) => {
            const localVarPath = `/api/v1/Logging`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, "https://example.com");
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: "POST" }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter["Content-Type"] = "application/json-patch+json";
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
            const needsSerialization = typeof body !== "string" ||
                localVarRequestOptions.headers["Content-Type"] === "application/json";
            localVarRequestOptions.data = needsSerialization
                ? JSON.stringify(body !== undefined ? body : {})
                : body || "";
            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    };
};
exports.LoggingApiAxiosParamCreator = LoggingApiAxiosParamCreator;
/**
 * LoggingApi - functional programming interface
 * @export
 */
const LoggingApiFp = function (configuration) {
    return {
        /**
         *
         * @param {OmbiModelsUiLoggingModel} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1LoggingPost(body, options) {
            const localVarAxiosArgs = await (0, exports.LoggingApiAxiosParamCreator)(configuration).apiV1LoggingPost(body, options);
            return (axios = axios_1.default, basePath = base_1.BASE_PATH) => {
                const axiosRequestArgs = Object.assign(Object.assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
exports.LoggingApiFp = LoggingApiFp;
/**
 * LoggingApi - factory interface
 * @export
 */
const LoggingApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         *
         * @param {OmbiModelsUiLoggingModel} [body]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1LoggingPost(body, options) {
            return (0, exports.LoggingApiFp)(configuration)
                .apiV1LoggingPost(body, options)
                .then((request) => request(axios, basePath));
        },
    };
};
exports.LoggingApiFactory = LoggingApiFactory;
/**
 * LoggingApi - object-oriented interface
 * @export
 * @class LoggingApi
 * @extends {BaseAPI}
 */
class LoggingApi extends base_1.BaseAPI {
    /**
     *
     * @param {OmbiModelsUiLoggingModel} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoggingApi
     */
    apiV1LoggingPost(body, options) {
        return (0, exports.LoggingApiFp)(this.configuration)
            .apiV1LoggingPost(body, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
exports.LoggingApi = LoggingApi;
//# sourceMappingURL=logging-api.js.map