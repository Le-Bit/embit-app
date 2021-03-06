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
 * @interface PlayerStateInfo
 */
export interface PlayerStateInfo {
  /**
   *
   * @type {number}
   * @memberof PlayerStateInfo
   */
  positionTicks?: any | null;
  /**
   *
   * @type {boolean}
   * @memberof PlayerStateInfo
   */
  canSeek?: any;
  /**
   *
   * @type {boolean}
   * @memberof PlayerStateInfo
   */
  isPaused?: any;
  /**
   *
   * @type {boolean}
   * @memberof PlayerStateInfo
   */
  isMuted?: any;
  /**
   *
   * @type {number}
   * @memberof PlayerStateInfo
   */
  volumeLevel?: any | null;
  /**
   *
   * @type {number}
   * @memberof PlayerStateInfo
   */
  audioStreamIndex?: any | null;
  /**
   *
   * @type {number}
   * @memberof PlayerStateInfo
   */
  subtitleStreamIndex?: any | null;
  /**
   *
   * @type {string}
   * @memberof PlayerStateInfo
   */
  mediaSourceId?: any;
  /**
   *
   * @type {string}
   * @memberof PlayerStateInfo
   */
  playMethod?: PlayerStateInfoPlayMethodEnum;
  /**
   *
   * @type {string}
   * @memberof PlayerStateInfo
   */
  repeatMode?: PlayerStateInfoRepeatModeEnum;
  /**
   *
   * @type {number}
   * @memberof PlayerStateInfo
   */
  subtitleOffset?: any;
  /**
   *
   * @type {number}
   * @memberof PlayerStateInfo
   */
  playbackRate?: any;
}

/**
 * @export
 * @enum {string}
 */
export enum PlayerStateInfoPlayMethodEnum {
  Transcode = "Transcode",
  DirectStream = "DirectStream",
  DirectPlay = "DirectPlay",
}
/**
 * @export
 * @enum {string}
 */
export enum PlayerStateInfoRepeatModeEnum {
  RepeatNone = "RepeatNone",
  RepeatAll = "RepeatAll",
  RepeatOne = "RepeatOne",
}
