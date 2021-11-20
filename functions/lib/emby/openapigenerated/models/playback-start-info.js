"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaybackStartInfoRepeatModeEnum = exports.PlaybackStartInfoPlayMethodEnum = exports.PlaybackStartInfoEventNameEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var PlaybackStartInfoEventNameEnum;
(function (PlaybackStartInfoEventNameEnum) {
    PlaybackStartInfoEventNameEnum["TimeUpdate"] = "TimeUpdate";
    PlaybackStartInfoEventNameEnum["Pause"] = "Pause";
    PlaybackStartInfoEventNameEnum["Unpause"] = "Unpause";
    PlaybackStartInfoEventNameEnum["VolumeChange"] = "VolumeChange";
    PlaybackStartInfoEventNameEnum["RepeatModeChange"] = "RepeatModeChange";
    PlaybackStartInfoEventNameEnum["AudioTrackChange"] = "AudioTrackChange";
    PlaybackStartInfoEventNameEnum["SubtitleTrackChange"] = "SubtitleTrackChange";
    PlaybackStartInfoEventNameEnum["PlaylistItemMove"] = "PlaylistItemMove";
    PlaybackStartInfoEventNameEnum["PlaylistItemRemove"] = "PlaylistItemRemove";
    PlaybackStartInfoEventNameEnum["PlaylistItemAdd"] = "PlaylistItemAdd";
    PlaybackStartInfoEventNameEnum["QualityChange"] = "QualityChange";
    PlaybackStartInfoEventNameEnum["StateChange"] = "StateChange";
    PlaybackStartInfoEventNameEnum["SubtitleOffsetChange"] = "SubtitleOffsetChange";
    PlaybackStartInfoEventNameEnum["PlaybackRateChange"] = "PlaybackRateChange";
})(PlaybackStartInfoEventNameEnum = exports.PlaybackStartInfoEventNameEnum || (exports.PlaybackStartInfoEventNameEnum = {}));
/**
 * @export
 * @enum {string}
 */
var PlaybackStartInfoPlayMethodEnum;
(function (PlaybackStartInfoPlayMethodEnum) {
    PlaybackStartInfoPlayMethodEnum["Transcode"] = "Transcode";
    PlaybackStartInfoPlayMethodEnum["DirectStream"] = "DirectStream";
    PlaybackStartInfoPlayMethodEnum["DirectPlay"] = "DirectPlay";
})(PlaybackStartInfoPlayMethodEnum = exports.PlaybackStartInfoPlayMethodEnum || (exports.PlaybackStartInfoPlayMethodEnum = {}));
/**
 * @export
 * @enum {string}
 */
var PlaybackStartInfoRepeatModeEnum;
(function (PlaybackStartInfoRepeatModeEnum) {
    PlaybackStartInfoRepeatModeEnum["RepeatNone"] = "RepeatNone";
    PlaybackStartInfoRepeatModeEnum["RepeatAll"] = "RepeatAll";
    PlaybackStartInfoRepeatModeEnum["RepeatOne"] = "RepeatOne";
})(PlaybackStartInfoRepeatModeEnum = exports.PlaybackStartInfoRepeatModeEnum || (exports.PlaybackStartInfoRepeatModeEnum = {}));
//# sourceMappingURL=playback-start-info.js.map