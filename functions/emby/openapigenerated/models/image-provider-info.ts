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
 * @interface ImageProviderInfo
 */
export interface ImageProviderInfo {
  /**
   *
   * @type {string}
   * @memberof ImageProviderInfo
   */
  name?: any;
  /**
   *
   * @type {Array&lt;string&gt;}
   * @memberof ImageProviderInfo
   */
  supportedImages?: Array<ImageProviderInfoSupportedImagesEnum>;
}

/**
 * @export
 * @enum {string}
 */
export enum ImageProviderInfoSupportedImagesEnum {
  Primary = "Primary",
  Art = "Art",
  Backdrop = "Backdrop",
  Banner = "Banner",
  Logo = "Logo",
  Thumb = "Thumb",
  Disc = "Disc",
  Box = "Box",
  Screenshot = "Screenshot",
  Menu = "Menu",
  Chapter = "Chapter",
  BoxRear = "BoxRear",
  Thumbnail = "Thumbnail",
  LogoLight = "LogoLight",
  LogoLightColor = "LogoLightColor",
}
