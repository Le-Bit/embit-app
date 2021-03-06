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
import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from "../base";
import { OmbiModelsExternalPlexTokenAuthentication } from "../models";
import { OmbiModelsUserAuthModel } from "../models";
/**
 * TokenApi - axios parameter creator
 * @export
 */
export const TokenApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {number} pinId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenPinIdGet: async (
      pinId: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'pinId' is not null or undefined
      if (pinId === null || pinId === undefined) {
        throw new RequiredError(
          "pinId",
          "Required parameter pinId was null or undefined when calling apiV1TokenPinIdGet."
        );
      }
      const localVarPath = `/api/v1/Token/{pinId}`.replace(
        `{${"pinId"}}`,
        encodeURIComponent(String(pinId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Returns the Token for the Ombi User if we can match the Plex user with a valid Ombi User
     * @param {OmbiModelsExternalPlexTokenAuthentication} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenPlextokenPost: async (
      body?: OmbiModelsExternalPlexTokenAuthentication,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/Token/plextoken`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json-patch+json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Gets the token.
     * @param {OmbiModelsUserAuthModel} [body] The model.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenPost: async (
      body?: OmbiModelsUserAuthModel,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/Token`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json-patch+json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Refreshes the token.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenRefreshPost: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/Token/refresh`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {OmbiModelsUserAuthModel} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenRequirePasswordPost: async (
      body?: OmbiModelsUserAuthModel,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1/Token/requirePassword`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json-patch+json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.query) {
        query.set(key, options.query[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * TokenApi - functional programming interface
 * @export
 */
export const TokenApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @param {number} pinId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1TokenPinIdGet(
      pinId: number,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await TokenApiAxiosParamCreator(
        configuration
      ).apiV1TokenPinIdGet(pinId, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Returns the Token for the Ombi User if we can match the Plex user with a valid Ombi User
     * @param {OmbiModelsExternalPlexTokenAuthentication} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1TokenPlextokenPost(
      body?: OmbiModelsExternalPlexTokenAuthentication,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await TokenApiAxiosParamCreator(
        configuration
      ).apiV1TokenPlextokenPost(body, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Gets the token.
     * @param {OmbiModelsUserAuthModel} [body] The model.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1TokenPost(
      body?: OmbiModelsUserAuthModel,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await TokenApiAxiosParamCreator(
        configuration
      ).apiV1TokenPost(body, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Refreshes the token.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1TokenRefreshPost(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await TokenApiAxiosParamCreator(
        configuration
      ).apiV1TokenRefreshPost(options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @param {OmbiModelsUserAuthModel} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV1TokenRequirePasswordPost(
      body?: OmbiModelsUserAuthModel,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await TokenApiAxiosParamCreator(
        configuration
      ).apiV1TokenRequirePasswordPost(body, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * TokenApi - factory interface
 * @export
 */
export const TokenApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @param {number} pinId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenPinIdGet(pinId: number, options?: any): AxiosPromise<void> {
      return TokenApiFp(configuration)
        .apiV1TokenPinIdGet(pinId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Returns the Token for the Ombi User if we can match the Plex user with a valid Ombi User
     * @param {OmbiModelsExternalPlexTokenAuthentication} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenPlextokenPost(
      body?: OmbiModelsExternalPlexTokenAuthentication,
      options?: any
    ): AxiosPromise<void> {
      return TokenApiFp(configuration)
        .apiV1TokenPlextokenPost(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Gets the token.
     * @param {OmbiModelsUserAuthModel} [body] The model.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenPost(
      body?: OmbiModelsUserAuthModel,
      options?: any
    ): AxiosPromise<void> {
      return TokenApiFp(configuration)
        .apiV1TokenPost(body, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Refreshes the token.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenRefreshPost(options?: any): AxiosPromise<void> {
      return TokenApiFp(configuration)
        .apiV1TokenRefreshPost(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {OmbiModelsUserAuthModel} [body]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1TokenRequirePasswordPost(
      body?: OmbiModelsUserAuthModel,
      options?: any
    ): AxiosPromise<boolean> {
      return TokenApiFp(configuration)
        .apiV1TokenRequirePasswordPost(body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * TokenApi - object-oriented interface
 * @export
 * @class TokenApi
 * @extends {BaseAPI}
 */
export class TokenApi extends BaseAPI {
  /**
   *
   * @param {number} pinId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TokenApi
   */
  public apiV1TokenPinIdGet(pinId: number, options?: any) {
    return TokenApiFp(this.configuration)
      .apiV1TokenPinIdGet(pinId, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Returns the Token for the Ombi User if we can match the Plex user with a valid Ombi User
   * @param {OmbiModelsExternalPlexTokenAuthentication} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TokenApi
   */
  public apiV1TokenPlextokenPost(
    body?: OmbiModelsExternalPlexTokenAuthentication,
    options?: any
  ) {
    return TokenApiFp(this.configuration)
      .apiV1TokenPlextokenPost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Gets the token.
   * @param {OmbiModelsUserAuthModel} [body] The model.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TokenApi
   */
  public apiV1TokenPost(body?: OmbiModelsUserAuthModel, options?: any) {
    return TokenApiFp(this.configuration)
      .apiV1TokenPost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Refreshes the token.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TokenApi
   */
  public apiV1TokenRefreshPost(options?: any) {
    return TokenApiFp(this.configuration)
      .apiV1TokenRefreshPost(options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @param {OmbiModelsUserAuthModel} [body]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TokenApi
   */
  public apiV1TokenRequirePasswordPost(
    body?: OmbiModelsUserAuthModel,
    options?: any
  ) {
    return TokenApiFp(this.configuration)
      .apiV1TokenRequirePasswordPost(body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
