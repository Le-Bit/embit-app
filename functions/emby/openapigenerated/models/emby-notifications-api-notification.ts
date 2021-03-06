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
 * @interface EmbyNotificationsApiNotification
 */
export interface EmbyNotificationsApiNotification {
  /**
   *
   * @type {string}
   * @memberof EmbyNotificationsApiNotification
   */
  id?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyNotificationsApiNotification
   */
  userId?: any;
  /**
   *
   * @type {Date}
   * @memberof EmbyNotificationsApiNotification
   */
  date?: any;
  /**
   *
   * @type {boolean}
   * @memberof EmbyNotificationsApiNotification
   */
  isRead?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyNotificationsApiNotification
   */
  name?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyNotificationsApiNotification
   */
  description?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyNotificationsApiNotification
   */
  url?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyNotificationsApiNotification
   */
  level?: EmbyNotificationsApiNotificationLevelEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum EmbyNotificationsApiNotificationLevelEnum {
  Normal = "Normal",
  Warning = "Warning",
  Error = "Error",
}
