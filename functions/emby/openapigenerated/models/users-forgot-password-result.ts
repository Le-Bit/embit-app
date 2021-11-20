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
 * @interface UsersForgotPasswordResult
 */
export interface UsersForgotPasswordResult {
  /**
   *
   * @type {string}
   * @memberof UsersForgotPasswordResult
   */
  action?: UsersForgotPasswordResultActionEnum;
  /**
   *
   * @type {string}
   * @memberof UsersForgotPasswordResult
   */
  pinFile?: any;
  /**
   *
   * @type {Date}
   * @memberof UsersForgotPasswordResult
   */
  pinExpirationDate?: any | null;
}

/**
 * @export
 * @enum {string}
 */
export enum UsersForgotPasswordResultActionEnum {
  ContactAdmin = "ContactAdmin",
  PinCode = "PinCode",
  InNetworkRequired = "InNetworkRequired",
}
