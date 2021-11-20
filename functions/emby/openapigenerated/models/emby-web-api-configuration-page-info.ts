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
/**
 *
 * @export
 * @interface EmbyWebApiConfigurationPageInfo
 */
export interface EmbyWebApiConfigurationPageInfo {
  /**
   *
   * @type {string}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  name?: any;
  /**
   *
   * @type {boolean}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  enableInMainMenu?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  menuSection?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  menuIcon?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  displayName?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  configurationPageType?: EmbyWebApiConfigurationPageInfoConfigurationPageTypeEnum;
  /**
   *
   * @type {string}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  pluginId?: any;
  /**
   *
   * @type {CommonPluginsIPlugin}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  plugin?: any;
  /**
   *
   * @type {Array&lt;string&gt;}
   * @memberof EmbyWebApiConfigurationPageInfo
   */
  translations?: any;
}

/**
 * @export
 * @enum {string}
 */
export enum EmbyWebApiConfigurationPageInfoConfigurationPageTypeEnum {
  PluginConfiguration = "PluginConfiguration",
  None = "None",
}
