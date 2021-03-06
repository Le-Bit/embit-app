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
import { BASE_PATH, RequestArgs, BaseAPI } from "../base";
import { OmbiModelsConnectedUsersViewModel } from "../models";
/**
 * HubApi - axios parameter creator
 * @export
 */
export const HubApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Returns the currently connected users in Ombi
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2HubUsersGet: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/api/v2/Hub/Users`;
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
  };
};

/**
 * HubApi - functional programming interface
 * @export
 */
export const HubApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Returns the currently connected users in Ombi
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async apiV2HubUsersGet(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<OmbiModelsConnectedUsersViewModel>>
    > {
      const localVarAxiosArgs = await HubApiAxiosParamCreator(
        configuration
      ).apiV2HubUsersGet(options);
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
 * HubApi - factory interface
 * @export
 */
export const HubApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Returns the currently connected users in Ombi
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV2HubUsersGet(
      options?: any
    ): AxiosPromise<Array<OmbiModelsConnectedUsersViewModel>> {
      return HubApiFp(configuration)
        .apiV2HubUsersGet(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * HubApi - object-oriented interface
 * @export
 * @class HubApi
 * @extends {BaseAPI}
 */
export class HubApi extends BaseAPI {
  /**
   *
   * @summary Returns the currently connected users in Ombi
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof HubApi
   */
  public apiV2HubUsersGet(options?: any) {
    return HubApiFp(this.configuration)
      .apiV2HubUsersGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
