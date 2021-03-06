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
import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
/**
 * VideosServiceApi - axios parameter creator
 * @export
 */
export const VideosServiceApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Requires authentication as administrator
     * @summary Removes alternate video sources.
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteVideosByIdAlternatesources: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling deleteVideosByIdAlternatesources."
        );
      }
      const localVarPath = `/Videos/{Id}/AlternateSources`.replace(
        `{${"Id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication apikeyauth required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("api_key")
            : await configuration.apiKey;
        localVarQueryParameter["api_key"] = localVarApiKeyValue;
      }

      // authentication embyauth required

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
     * Requires authentication as administrator
     * @summary Merges videos into a single record
     * @param {string} [ids] Item id list. This allows multiple, comma delimited.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postVideosMergeversions: async (
      ids?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/Videos/MergeVersions`;
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

      // authentication apikeyauth required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("api_key")
            : await configuration.apiKey;
        localVarQueryParameter["api_key"] = localVarApiKeyValue;
      }

      // authentication embyauth required

      if (ids !== undefined) {
        localVarQueryParameter["Ids"] = ids;
      }

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
  };
};

/**
 * VideosServiceApi - functional programming interface
 * @export
 */
export const VideosServiceApiFp = function (configuration?: Configuration) {
  return {
    /**
     * Requires authentication as administrator
     * @summary Removes alternate video sources.
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteVideosByIdAlternatesources(
      id: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await VideosServiceApiAxiosParamCreator(
        configuration
      ).deleteVideosByIdAlternatesources(id, options);
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
     * Requires authentication as administrator
     * @summary Merges videos into a single record
     * @param {string} [ids] Item id list. This allows multiple, comma delimited.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async postVideosMergeversions(
      ids?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await VideosServiceApiAxiosParamCreator(
        configuration
      ).postVideosMergeversions(ids, options);
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
 * VideosServiceApi - factory interface
 * @export
 */
export const VideosServiceApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Requires authentication as administrator
     * @summary Removes alternate video sources.
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteVideosByIdAlternatesources(
      id: string,
      options?: any
    ): AxiosPromise<void> {
      return VideosServiceApiFp(configuration)
        .deleteVideosByIdAlternatesources(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Requires authentication as administrator
     * @summary Merges videos into a single record
     * @param {string} [ids] Item id list. This allows multiple, comma delimited.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postVideosMergeversions(ids?: string, options?: any): AxiosPromise<void> {
      return VideosServiceApiFp(configuration)
        .postVideosMergeversions(ids, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * VideosServiceApi - object-oriented interface
 * @export
 * @class VideosServiceApi
 * @extends {BaseAPI}
 */
export class VideosServiceApi extends BaseAPI {
  /**
   * Requires authentication as administrator
   * @summary Removes alternate video sources.
   * @param {string} id Item Id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VideosServiceApi
   */
  public deleteVideosByIdAlternatesources(id: string, options?: any) {
    return VideosServiceApiFp(this.configuration)
      .deleteVideosByIdAlternatesources(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Requires authentication as administrator
   * @summary Merges videos into a single record
   * @param {string} [ids] Item id list. This allows multiple, comma delimited.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof VideosServiceApi
   */
  public postVideosMergeversions(ids?: string, options?: any) {
    return VideosServiceApiFp(this.configuration)
      .postVideosMergeversions(ids, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
