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
import { ImageProviderInfo } from "../models";
import { RemoteImageResult } from "../models";
/**
 * RemoteImageServiceApi - axios parameter creator
 * @export
 */
export const RemoteImageServiceApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Requires authentication as administrator
     * @summary Gets a remote image
     * @param {string} imageUrl The image url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getImagesRemote: async (
      imageUrl: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'imageUrl' is not null or undefined
      if (imageUrl === null || imageUrl === undefined) {
        throw new RequiredError(
          "imageUrl",
          "Required parameter imageUrl was null or undefined when calling getImagesRemote."
        );
      }
      const localVarPath = `/Images/Remote`;
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

      // authentication apikeyauth required
      if (configuration && configuration.apiKey) {
        const localVarApiKeyValue =
          typeof configuration.apiKey === "function"
            ? await configuration.apiKey("api_key")
            : await configuration.apiKey;
        localVarQueryParameter["api_key"] = localVarApiKeyValue;
      }

      // authentication embyauth required

      if (imageUrl !== undefined) {
        localVarQueryParameter["ImageUrl"] = imageUrl;
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
    /**
     * Requires authentication as user
     * @summary Gets available remote images for an item
     * @param {string} id Item Id
     * @param {string} [type] The image type
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return
     * @param {string} [providerName] Optional. The image provider to use
     * @param {boolean} [includeAllLanguages] Optional.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemsByIdRemoteimages: async (
      id: string,
      type?: string,
      startIndex?: number,
      limit?: number,
      providerName?: string,
      includeAllLanguages?: boolean,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling getItemsByIdRemoteimages."
        );
      }
      const localVarPath = `/Items/{Id}/RemoteImages`.replace(
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
        method: "GET",
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

      if (type !== undefined) {
        localVarQueryParameter["Type"] = type;
      }

      if (startIndex !== undefined) {
        localVarQueryParameter["StartIndex"] = startIndex;
      }

      if (limit !== undefined) {
        localVarQueryParameter["Limit"] = limit;
      }

      if (providerName !== undefined) {
        localVarQueryParameter["ProviderName"] = providerName;
      }

      if (includeAllLanguages !== undefined) {
        localVarQueryParameter["IncludeAllLanguages"] = includeAllLanguages;
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
    /**
     * Requires authentication as user
     * @summary Gets available remote image providers for an item
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemsByIdRemoteimagesProviders: async (
      id: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling getItemsByIdRemoteimagesProviders."
        );
      }
      const localVarPath = `/Items/{Id}/RemoteImages/Providers`.replace(
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
        method: "GET",
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
     * @summary Downloads a remote image for an item
     * @param {string} id Item Id
     * @param {string} type The image type
     * @param {string} [providerName] The image provider
     * @param {string} [imageUrl] The image url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postItemsByIdRemoteimagesDownload: async (
      id: string,
      type: string,
      providerName?: string,
      imageUrl?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling postItemsByIdRemoteimagesDownload."
        );
      }
      // verify required parameter 'type' is not null or undefined
      if (type === null || type === undefined) {
        throw new RequiredError(
          "type",
          "Required parameter type was null or undefined when calling postItemsByIdRemoteimagesDownload."
        );
      }
      const localVarPath = `/Items/{Id}/RemoteImages/Download`.replace(
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

      if (type !== undefined) {
        localVarQueryParameter["Type"] = type;
      }

      if (providerName !== undefined) {
        localVarQueryParameter["ProviderName"] = providerName;
      }

      if (imageUrl !== undefined) {
        localVarQueryParameter["ImageUrl"] = imageUrl;
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
 * RemoteImageServiceApi - functional programming interface
 * @export
 */
export const RemoteImageServiceApiFp = function (
  configuration?: Configuration
) {
  return {
    /**
     * Requires authentication as administrator
     * @summary Gets a remote image
     * @param {string} imageUrl The image url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getImagesRemote(
      imageUrl: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await RemoteImageServiceApiAxiosParamCreator(
        configuration
      ).getImagesRemote(imageUrl, options);
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
     * Requires authentication as user
     * @summary Gets available remote images for an item
     * @param {string} id Item Id
     * @param {string} [type] The image type
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return
     * @param {string} [providerName] Optional. The image provider to use
     * @param {boolean} [includeAllLanguages] Optional.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getItemsByIdRemoteimages(
      id: string,
      type?: string,
      startIndex?: number,
      limit?: number,
      providerName?: string,
      includeAllLanguages?: boolean,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<RemoteImageResult>
    > {
      const localVarAxiosArgs = await RemoteImageServiceApiAxiosParamCreator(
        configuration
      ).getItemsByIdRemoteimages(
        id,
        type,
        startIndex,
        limit,
        providerName,
        includeAllLanguages,
        options
      );
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
     * Requires authentication as user
     * @summary Gets available remote image providers for an item
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getItemsByIdRemoteimagesProviders(
      id: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<ImageProviderInfo>>
    > {
      const localVarAxiosArgs = await RemoteImageServiceApiAxiosParamCreator(
        configuration
      ).getItemsByIdRemoteimagesProviders(id, options);
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
     * @summary Downloads a remote image for an item
     * @param {string} id Item Id
     * @param {string} type The image type
     * @param {string} [providerName] The image provider
     * @param {string} [imageUrl] The image url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async postItemsByIdRemoteimagesDownload(
      id: string,
      type: string,
      providerName?: string,
      imageUrl?: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await RemoteImageServiceApiAxiosParamCreator(
        configuration
      ).postItemsByIdRemoteimagesDownload(
        id,
        type,
        providerName,
        imageUrl,
        options
      );
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
 * RemoteImageServiceApi - factory interface
 * @export
 */
export const RemoteImageServiceApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Requires authentication as administrator
     * @summary Gets a remote image
     * @param {string} imageUrl The image url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getImagesRemote(imageUrl: string, options?: any): AxiosPromise<void> {
      return RemoteImageServiceApiFp(configuration)
        .getImagesRemote(imageUrl, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Requires authentication as user
     * @summary Gets available remote images for an item
     * @param {string} id Item Id
     * @param {string} [type] The image type
     * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
     * @param {number} [limit] Optional. The maximum number of records to return
     * @param {string} [providerName] Optional. The image provider to use
     * @param {boolean} [includeAllLanguages] Optional.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemsByIdRemoteimages(
      id: string,
      type?: string,
      startIndex?: number,
      limit?: number,
      providerName?: string,
      includeAllLanguages?: boolean,
      options?: any
    ): AxiosPromise<RemoteImageResult> {
      return RemoteImageServiceApiFp(configuration)
        .getItemsByIdRemoteimages(
          id,
          type,
          startIndex,
          limit,
          providerName,
          includeAllLanguages,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Requires authentication as user
     * @summary Gets available remote image providers for an item
     * @param {string} id Item Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getItemsByIdRemoteimagesProviders(
      id: string,
      options?: any
    ): AxiosPromise<Array<ImageProviderInfo>> {
      return RemoteImageServiceApiFp(configuration)
        .getItemsByIdRemoteimagesProviders(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Requires authentication as administrator
     * @summary Downloads a remote image for an item
     * @param {string} id Item Id
     * @param {string} type The image type
     * @param {string} [providerName] The image provider
     * @param {string} [imageUrl] The image url
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postItemsByIdRemoteimagesDownload(
      id: string,
      type: string,
      providerName?: string,
      imageUrl?: string,
      options?: any
    ): AxiosPromise<void> {
      return RemoteImageServiceApiFp(configuration)
        .postItemsByIdRemoteimagesDownload(
          id,
          type,
          providerName,
          imageUrl,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * RemoteImageServiceApi - object-oriented interface
 * @export
 * @class RemoteImageServiceApi
 * @extends {BaseAPI}
 */
export class RemoteImageServiceApi extends BaseAPI {
  /**
   * Requires authentication as administrator
   * @summary Gets a remote image
   * @param {string} imageUrl The image url
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RemoteImageServiceApi
   */
  public getImagesRemote(imageUrl: string, options?: any) {
    return RemoteImageServiceApiFp(this.configuration)
      .getImagesRemote(imageUrl, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Requires authentication as user
   * @summary Gets available remote images for an item
   * @param {string} id Item Id
   * @param {string} [type] The image type
   * @param {number} [startIndex] Optional. The record index to start at. All items with a lower index will be dropped from the results.
   * @param {number} [limit] Optional. The maximum number of records to return
   * @param {string} [providerName] Optional. The image provider to use
   * @param {boolean} [includeAllLanguages] Optional.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RemoteImageServiceApi
   */
  public getItemsByIdRemoteimages(
    id: string,
    type?: string,
    startIndex?: number,
    limit?: number,
    providerName?: string,
    includeAllLanguages?: boolean,
    options?: any
  ) {
    return RemoteImageServiceApiFp(this.configuration)
      .getItemsByIdRemoteimages(
        id,
        type,
        startIndex,
        limit,
        providerName,
        includeAllLanguages,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Requires authentication as user
   * @summary Gets available remote image providers for an item
   * @param {string} id Item Id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RemoteImageServiceApi
   */
  public getItemsByIdRemoteimagesProviders(id: string, options?: any) {
    return RemoteImageServiceApiFp(this.configuration)
      .getItemsByIdRemoteimagesProviders(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Requires authentication as administrator
   * @summary Downloads a remote image for an item
   * @param {string} id Item Id
   * @param {string} type The image type
   * @param {string} [providerName] The image provider
   * @param {string} [imageUrl] The image url
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof RemoteImageServiceApi
   */
  public postItemsByIdRemoteimagesDownload(
    id: string,
    type: string,
    providerName?: string,
    imageUrl?: string,
    options?: any
  ) {
    return RemoteImageServiceApiFp(this.configuration)
      .postItemsByIdRemoteimagesDownload(
        id,
        type,
        providerName,
        imageUrl,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
