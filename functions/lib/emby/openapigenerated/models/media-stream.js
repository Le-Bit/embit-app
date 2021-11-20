"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaStreamProtocolEnum = exports.MediaStreamDeliveryMethodEnum = exports.MediaStreamTypeEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var MediaStreamTypeEnum;
(function (MediaStreamTypeEnum) {
    MediaStreamTypeEnum["Unknown"] = "Unknown";
    MediaStreamTypeEnum["Audio"] = "Audio";
    MediaStreamTypeEnum["Video"] = "Video";
    MediaStreamTypeEnum["Subtitle"] = "Subtitle";
    MediaStreamTypeEnum["EmbeddedImage"] = "EmbeddedImage";
    MediaStreamTypeEnum["Attachment"] = "Attachment";
    MediaStreamTypeEnum["Data"] = "Data";
})(MediaStreamTypeEnum = exports.MediaStreamTypeEnum || (exports.MediaStreamTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var MediaStreamDeliveryMethodEnum;
(function (MediaStreamDeliveryMethodEnum) {
    MediaStreamDeliveryMethodEnum["Encode"] = "Encode";
    MediaStreamDeliveryMethodEnum["Embed"] = "Embed";
    MediaStreamDeliveryMethodEnum["External"] = "External";
    MediaStreamDeliveryMethodEnum["Hls"] = "Hls";
})(MediaStreamDeliveryMethodEnum = exports.MediaStreamDeliveryMethodEnum || (exports.MediaStreamDeliveryMethodEnum = {}));
/**
 * @export
 * @enum {string}
 */
var MediaStreamProtocolEnum;
(function (MediaStreamProtocolEnum) {
    MediaStreamProtocolEnum["File"] = "File";
    MediaStreamProtocolEnum["Http"] = "Http";
    MediaStreamProtocolEnum["Rtmp"] = "Rtmp";
    MediaStreamProtocolEnum["Rtsp"] = "Rtsp";
    MediaStreamProtocolEnum["Udp"] = "Udp";
    MediaStreamProtocolEnum["Rtp"] = "Rtp";
    MediaStreamProtocolEnum["Ftp"] = "Ftp";
    MediaStreamProtocolEnum["Mms"] = "Mms";
})(MediaStreamProtocolEnum = exports.MediaStreamProtocolEnum || (exports.MediaStreamProtocolEnum = {}));
//# sourceMappingURL=media-stream.js.map