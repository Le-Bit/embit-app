"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaSourceInfoTimestampEnum = exports.MediaSourceInfoVideo3DFormatEnum = exports.MediaSourceInfoTypeEnum = exports.MediaSourceInfoEncoderProtocolEnum = exports.MediaSourceInfoProtocolEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var MediaSourceInfoProtocolEnum;
(function (MediaSourceInfoProtocolEnum) {
    MediaSourceInfoProtocolEnum["File"] = "File";
    MediaSourceInfoProtocolEnum["Http"] = "Http";
    MediaSourceInfoProtocolEnum["Rtmp"] = "Rtmp";
    MediaSourceInfoProtocolEnum["Rtsp"] = "Rtsp";
    MediaSourceInfoProtocolEnum["Udp"] = "Udp";
    MediaSourceInfoProtocolEnum["Rtp"] = "Rtp";
    MediaSourceInfoProtocolEnum["Ftp"] = "Ftp";
    MediaSourceInfoProtocolEnum["Mms"] = "Mms";
})(MediaSourceInfoProtocolEnum = exports.MediaSourceInfoProtocolEnum || (exports.MediaSourceInfoProtocolEnum = {}));
/**
 * @export
 * @enum {string}
 */
var MediaSourceInfoEncoderProtocolEnum;
(function (MediaSourceInfoEncoderProtocolEnum) {
    MediaSourceInfoEncoderProtocolEnum["File"] = "File";
    MediaSourceInfoEncoderProtocolEnum["Http"] = "Http";
    MediaSourceInfoEncoderProtocolEnum["Rtmp"] = "Rtmp";
    MediaSourceInfoEncoderProtocolEnum["Rtsp"] = "Rtsp";
    MediaSourceInfoEncoderProtocolEnum["Udp"] = "Udp";
    MediaSourceInfoEncoderProtocolEnum["Rtp"] = "Rtp";
    MediaSourceInfoEncoderProtocolEnum["Ftp"] = "Ftp";
    MediaSourceInfoEncoderProtocolEnum["Mms"] = "Mms";
})(MediaSourceInfoEncoderProtocolEnum = exports.MediaSourceInfoEncoderProtocolEnum || (exports.MediaSourceInfoEncoderProtocolEnum = {}));
/**
 * @export
 * @enum {string}
 */
var MediaSourceInfoTypeEnum;
(function (MediaSourceInfoTypeEnum) {
    MediaSourceInfoTypeEnum["Default"] = "Default";
    MediaSourceInfoTypeEnum["Grouping"] = "Grouping";
    MediaSourceInfoTypeEnum["Placeholder"] = "Placeholder";
})(MediaSourceInfoTypeEnum = exports.MediaSourceInfoTypeEnum || (exports.MediaSourceInfoTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var MediaSourceInfoVideo3DFormatEnum;
(function (MediaSourceInfoVideo3DFormatEnum) {
    MediaSourceInfoVideo3DFormatEnum["HalfSideBySide"] = "HalfSideBySide";
    MediaSourceInfoVideo3DFormatEnum["FullSideBySide"] = "FullSideBySide";
    MediaSourceInfoVideo3DFormatEnum["FullTopAndBottom"] = "FullTopAndBottom";
    MediaSourceInfoVideo3DFormatEnum["HalfTopAndBottom"] = "HalfTopAndBottom";
    MediaSourceInfoVideo3DFormatEnum["MVC"] = "MVC";
})(MediaSourceInfoVideo3DFormatEnum = exports.MediaSourceInfoVideo3DFormatEnum || (exports.MediaSourceInfoVideo3DFormatEnum = {}));
/**
 * @export
 * @enum {string}
 */
var MediaSourceInfoTimestampEnum;
(function (MediaSourceInfoTimestampEnum) {
    MediaSourceInfoTimestampEnum["None"] = "None";
    MediaSourceInfoTimestampEnum["Zero"] = "Zero";
    MediaSourceInfoTimestampEnum["Valid"] = "Valid";
})(MediaSourceInfoTimestampEnum = exports.MediaSourceInfoTimestampEnum || (exports.MediaSourceInfoTimestampEnum = {}));
//# sourceMappingURL=media-source-info.js.map