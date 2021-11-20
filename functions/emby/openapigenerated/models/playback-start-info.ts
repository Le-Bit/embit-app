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
 * @interface PlaybackStartInfo
 */
export interface PlaybackStartInfo {
  /**
   *
   * @type {boolean}
   * @memberof PlaybackStartInfo
   */
  canSeek?: any;
  /**
   *
   * @type {BaseItemDto}
   * @memberof PlaybackStartInfo
   */
  item?: any;
  /**
   *
   * @type {Array&lt;QueueItem&gt;}
   * @memberof PlaybackStartInfo
   */
  nowPlayingQueue?: any;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  playlistItemId?: any;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  itemId?: any;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  sessionId?: any;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  mediaSourceId?: any;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  audioStreamIndex?: any | null;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  subtitleStreamIndex?: any | null;
  /**
   *
   * @type {boolean}
   * @memberof PlaybackStartInfo
   */
  isPaused?: any;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  playlistIndex?: any;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  playlistLength?: any;
  /**
   *
   * @type {boolean}
   * @memberof PlaybackStartInfo
   */
  isMuted?: any;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  positionTicks?: any | null;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  runTimeTicks?: any | null;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  playbackStartTimeTicks?: any | null;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  volumeLevel?: any | null;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  brightness?: any | null;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  aspectRatio?: any;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  eventName?: PlaybackStartInfoEventNameEnum;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  playMethod?: PlaybackStartInfoPlayMethodEnum;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  liveStreamId?: any;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  playSessionId?: any;
  /**
   *
   * @type {string}
   * @memberof PlaybackStartInfo
   */
  repeatMode?: PlaybackStartInfoRepeatModeEnum;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  subtitleOffset?: any;
  /**
   *
   * @type {number}
   * @memberof PlaybackStartInfo
   */
  playbackRate?: any;
  /**
   *
   * @type {Array&lt;string&gt;}
   * @memberof PlaybackStartInfo
   */
  playlistItemIds?: any;
}

/**
 * @export
 * @enum {string}
 */
export enum PlaybackStartInfoEventNameEnum {
  TimeUpdate = "TimeUpdate",
  Pause = "Pause",
  Unpause = "Unpause",
  VolumeChange = "VolumeChange",
  RepeatModeChange = "RepeatModeChange",
  AudioTrackChange = "AudioTrackChange",
  SubtitleTrackChange = "SubtitleTrackChange",
  PlaylistItemMove = "PlaylistItemMove",
  PlaylistItemRemove = "PlaylistItemRemove",
  PlaylistItemAdd = "PlaylistItemAdd",
  QualityChange = "QualityChange",
  StateChange = "StateChange",
  SubtitleOffsetChange = "SubtitleOffsetChange",
  PlaybackRateChange = "PlaybackRateChange",
}
/**
 * @export
 * @enum {string}
 */
export enum PlaybackStartInfoPlayMethodEnum {
  Transcode = "Transcode",
  DirectStream = "DirectStream",
  DirectPlay = "DirectPlay",
}
/**
 * @export
 * @enum {string}
 */
export enum PlaybackStartInfoRepeatModeEnum {
  RepeatNone = "RepeatNone",
  RepeatAll = "RepeatAll",
  RepeatOne = "RepeatOne",
}
