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
 * @interface OmbiSettingsSettingsModelsUserManagementSettings
 */
export interface OmbiSettingsSettingsModelsUserManagementSettings {
  /**
   *
   * @type {boolean}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  importPlexAdmin?: any;
  /**
   *
   * @type {boolean}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  importPlexUsers?: any;
  /**
   *
   * @type {boolean}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  importEmbyUsers?: any;
  /**
   *
   * @type {boolean}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  importJellyfinUsers?: any;
  /**
   *
   * @type {number}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  movieRequestLimit?: any;
  /**
   *
   * @type {OmbiStoreEntitiesRequestLimitType}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  movieRequestLimitType?: any;
  /**
   *
   * @type {number}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  episodeRequestLimit?: any;
  /**
   *
   * @type {OmbiStoreEntitiesRequestLimitType}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  episodeRequestLimitType?: any;
  /**
   *
   * @type {number}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  musicRequestLimit?: any;
  /**
   *
   * @type {OmbiStoreEntitiesRequestLimitType}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  musicRequestLimitType?: any;
  /**
   *
   * @type {string}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  defaultStreamingCountry?: any | null;
  /**
   *
   * @type {Array&lt;string&gt;}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  defaultRoles?: any | null;
  /**
   *
   * @type {Array&lt;string&gt;}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  bannedPlexUserIds?: any | null;
  /**
   *
   * @type {Array&lt;string&gt;}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  bannedEmbyUserIds?: any | null;
  /**
   *
   * @type {Array&lt;string&gt;}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  bannedJellyfinUserIds?: any | null;
  /**
   *
   * @type {number}
   * @memberof OmbiSettingsSettingsModelsUserManagementSettings
   */
  id?: any;
}
