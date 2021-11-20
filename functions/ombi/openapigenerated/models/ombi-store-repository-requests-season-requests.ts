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
/**
 *
 * @export
 * @interface OmbiStoreRepositoryRequestsSeasonRequests
 */
export interface OmbiStoreRepositoryRequestsSeasonRequests {
  /**
   *
   * @type {number}
   * @memberof OmbiStoreRepositoryRequestsSeasonRequests
   */
  seasonNumber?: any;
  /**
   *
   * @type {string}
   * @memberof OmbiStoreRepositoryRequestsSeasonRequests
   */
  overview?: any | null;
  /**
   *
   * @type {Array&lt;OmbiStoreRepositoryRequestsEpisodeRequests&gt;}
   * @memberof OmbiStoreRepositoryRequestsSeasonRequests
   */
  episodes?: any | null;
  /**
   *
   * @type {number}
   * @memberof OmbiStoreRepositoryRequestsSeasonRequests
   */
  childRequestId?: any;
  /**
   *
   * @type {OmbiStoreEntitiesRequestsChildRequests}
   * @memberof OmbiStoreRepositoryRequestsSeasonRequests
   */
  childRequest?: any | null;
  /**
   *
   * @type {boolean}
   * @memberof OmbiStoreRepositoryRequestsSeasonRequests
   */
  seasonAvailable?: any;
  /**
   *
   * @type {number}
   * @memberof OmbiStoreRepositoryRequestsSeasonRequests
   */
  id?: any;
}
