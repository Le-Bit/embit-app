"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaybackProgressInfoRepeatModeEnum = exports.PlaybackProgressInfoPlayMethodEnum = exports.PlaybackProgressInfoEventNameEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var PlaybackProgressInfoEventNameEnum;
(function (PlaybackProgressInfoEventNameEnum) {
    PlaybackProgressInfoEventNameEnum["TimeUpdate"] = "TimeUpdate";
    PlaybackProgressInfoEventNameEnum["Pause"] = "Pause";
    PlaybackProgressInfoEventNameEnum["Unpause"] = "Unpause";
    PlaybackProgressInfoEventNameEnum["VolumeChange"] = "VolumeChange";
    PlaybackProgressInfoEventNameEnum["RepeatModeChange"] = "RepeatModeChange";
    PlaybackProgressInfoEventNameEnum["AudioTrackChange"] = "AudioTrackChange";
    PlaybackProgressInfoEventNameEnum["SubtitleTrackChange"] = "SubtitleTrackChange";
    PlaybackProgressInfoEventNameEnum["PlaylistItemMove"] = "PlaylistItemMove";
    PlaybackProgressInfoEventNameEnum["PlaylistItemRemove"] = "PlaylistItemRemove";
    PlaybackProgressInfoEventNameEnum["PlaylistItemAdd"] = "PlaylistItemAdd";
    PlaybackProgressInfoEventNameEnum["QualityChange"] = "QualityChange";
    PlaybackProgressInfoEventNameEnum["StateChange"] = "StateChange";
    PlaybackProgressInfoEventNameEnum["SubtitleOffsetChange"] = "SubtitleOffsetChange";
    PlaybackProgressInfoEventNameEnum["PlaybackRateChange"] = "PlaybackRateChange";
})(PlaybackProgressInfoEventNameEnum = exports.PlaybackProgressInfoEventNameEnum || (exports.PlaybackProgressInfoEventNameEnum = {}));
/**
 * @export
 * @enum {string}
 */
var PlaybackProgressInfoPlayMethodEnum;
(function (PlaybackProgressInfoPlayMethodEnum) {
    PlaybackProgressInfoPlayMethodEnum["Transcode"] = "Transcode";
    PlaybackProgressInfoPlayMethodEnum["DirectStream"] = "DirectStream";
    PlaybackProgressInfoPlayMethodEnum["DirectPlay"] = "DirectPlay";
})(PlaybackProgressInfoPlayMethodEnum = exports.PlaybackProgressInfoPlayMethodEnum || (exports.PlaybackProgressInfoPlayMethodEnum = {}));
/**
 * @export
 * @enum {string}
 */
var PlaybackProgressInfoRepeatModeEnum;
(function (PlaybackProgressInfoRepeatModeEnum) {
    PlaybackProgressInfoRepeatModeEnum["RepeatNone"] = "RepeatNone";
    PlaybackProgressInfoRepeatModeEnum["RepeatAll"] = "RepeatAll";
    PlaybackProgressInfoRepeatModeEnum["RepeatOne"] = "RepeatOne";
})(PlaybackProgressInfoRepeatModeEnum = exports.PlaybackProgressInfoRepeatModeEnum || (exports.PlaybackProgressInfoRepeatModeEnum = {}));
//# sourceMappingURL=playback-progress-info.js.map