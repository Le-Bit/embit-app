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
 * @interface ActivityLogEntry
 */
export interface ActivityLogEntry {
  /**
   *
   * @type {number}
   * @memberof ActivityLogEntry
   */
  id?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  name?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  overview?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  shortOverview?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  type?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  itemId?: any;
  /**
   *
   * @type {Date}
   * @memberof ActivityLogEntry
   */
  date?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  userId?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  userPrimaryImageTag?: any;
  /**
   *
   * @type {string}
   * @memberof ActivityLogEntry
   */
  severity?: ActivityLogEntrySeverityEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum ActivityLogEntrySeverityEnum {
  Info = "Info",
  Debug = "Debug",
  Warn = "Warn",
  Error = "Error",
  Fatal = "Fatal",
}
