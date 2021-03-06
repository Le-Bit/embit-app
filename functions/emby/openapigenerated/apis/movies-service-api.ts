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
import { BASE_PATH, RequestArgs, BaseAPI } from "../base";
import { RecommendationDto } from "../models";
/**
 * MoviesServiceApi - axios parameter creator
 * @export
 */
export const MoviesServiceApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Requires authentication as user
     * @summary Gets movie recommendations
     * @param {number} [categoryLimit] The max number of categories to return
     * @param {number} [itemLimit] The max number of items to return per category
     * @param {string} [userId] Optional. Filter by user id, and attach user data
     * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param {boolean} [enableImages] Optional, include image information in output
     * @param {boolean} [enableUserData] Optional, include user data
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type
     * @param {string} [enableImageTypes] Optional. The image types to include in the output.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMoviesRecommendations: async (
      categoryLimit?: number,
      itemLimit?: number,
      userId?: string,
      parentId?: string,
      enableImages?: boolean,
      enableUserData?: boolean,
      imageTypeLimit?: number,
      enableImageTypes?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/Movies/Recommendations`;
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

      if (categoryLimit !== undefined) {
        localVarQueryParameter["CategoryLimit"] = categoryLimit;
      }

      if (itemLimit !== undefined) {
        localVarQueryParameter["ItemLimit"] = itemLimit;
      }

      if (userId !== undefined) {
        localVarQueryParameter["UserId"] = userId;
      }

      if (parentId !== undefined) {
        localVarQueryParameter["ParentId"] = parentId;
      }

      if (enableImages !== undefined) {
        localVarQueryParameter["EnableImages"] = enableImages;
      }

      if (enableUserData !== undefined) {
        localVarQueryParameter["EnableUserData"] = enableUserData;
      }

      if (imageTypeLimit !== undefined) {
        localVarQueryParameter["ImageTypeLimit"] = imageTypeLimit;
      }

      if (enableImageTypes !== undefined) {
        localVarQueryParameter["EnableImageTypes"] = enableImageTypes;
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
 * MoviesServiceApi - functional programming interface
 * @export
 */
export const MoviesServiceApiFp = function (configuration?: Configuration) {
  return {
    /**
     * Requires authentication as user
     * @summary Gets movie recommendations
     * @param {number} [categoryLimit] The max number of categories to return
     * @param {number} [itemLimit] The max number of items to return per category
     * @param {string} [userId] Optional. Filter by user id, and attach user data
     * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param {boolean} [enableImages] Optional, include image information in output
     * @param {boolean} [enableUserData] Optional, include user data
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type
     * @param {string} [enableImageTypes] Optional. The image types to include in the output.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMoviesRecommendations(
      categoryLimit?: number,
      itemLimit?: number,
      userId?: string,
      parentId?: string,
      enableImages?: boolean,
      enableUserData?: boolean,
      imageTypeLimit?: number,
      enableImageTypes?: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<RecommendationDto>>
    > {
      const localVarAxiosArgs = await MoviesServiceApiAxiosParamCreator(
        configuration
      ).getMoviesRecommendations(
        categoryLimit,
        itemLimit,
        userId,
        parentId,
        enableImages,
        enableUserData,
        imageTypeLimit,
        enableImageTypes,
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
 * MoviesServiceApi - factory interface
 * @export
 */
export const MoviesServiceApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     * Requires authentication as user
     * @summary Gets movie recommendations
     * @param {number} [categoryLimit] The max number of categories to return
     * @param {number} [itemLimit] The max number of items to return per category
     * @param {string} [userId] Optional. Filter by user id, and attach user data
     * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root
     * @param {boolean} [enableImages] Optional, include image information in output
     * @param {boolean} [enableUserData] Optional, include user data
     * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type
     * @param {string} [enableImageTypes] Optional. The image types to include in the output.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMoviesRecommendations(
      categoryLimit?: number,
      itemLimit?: number,
      userId?: string,
      parentId?: string,
      enableImages?: boolean,
      enableUserData?: boolean,
      imageTypeLimit?: number,
      enableImageTypes?: string,
      options?: any
    ): AxiosPromise<Array<RecommendationDto>> {
      return MoviesServiceApiFp(configuration)
        .getMoviesRecommendations(
          categoryLimit,
          itemLimit,
          userId,
          parentId,
          enableImages,
          enableUserData,
          imageTypeLimit,
          enableImageTypes,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * MoviesServiceApi - object-oriented interface
 * @export
 * @class MoviesServiceApi
 * @extends {BaseAPI}
 */
export class MoviesServiceApi extends BaseAPI {
  /**
   * Requires authentication as user
   * @summary Gets movie recommendations
   * @param {number} [categoryLimit] The max number of categories to return
   * @param {number} [itemLimit] The max number of items to return per category
   * @param {string} [userId] Optional. Filter by user id, and attach user data
   * @param {string} [parentId] Specify this to localize the search to a specific item or folder. Omit to use the root
   * @param {boolean} [enableImages] Optional, include image information in output
   * @param {boolean} [enableUserData] Optional, include user data
   * @param {number} [imageTypeLimit] Optional, the max number of images to return, per image type
   * @param {string} [enableImageTypes] Optional. The image types to include in the output.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MoviesServiceApi
   */
  public getMoviesRecommendations(
    categoryLimit?: number,
    itemLimit?: number,
    userId?: string,
    parentId?: string,
    enableImages?: boolean,
    enableUserData?: boolean,
    imageTypeLimit?: number,
    enableImageTypes?: string,
    options?: any
  ) {
    return MoviesServiceApiFp(this.configuration)
      .getMoviesRecommendations(
        categoryLimit,
        itemLimit,
        userId,
        parentId,
        enableImages,
        enableUserData,
        imageTypeLimit,
        enableImageTypes,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
