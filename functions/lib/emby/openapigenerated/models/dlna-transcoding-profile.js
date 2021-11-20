"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DlnaTranscodingProfileContextEnum = exports.DlnaTranscodingProfileTranscodeSeekInfoEnum = exports.DlnaTranscodingProfileTypeEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var DlnaTranscodingProfileTypeEnum;
(function (DlnaTranscodingProfileTypeEnum) {
    DlnaTranscodingProfileTypeEnum["Audio"] = "Audio";
    DlnaTranscodingProfileTypeEnum["Video"] = "Video";
    DlnaTranscodingProfileTypeEnum["Photo"] = "Photo";
})(DlnaTranscodingProfileTypeEnum = exports.DlnaTranscodingProfileTypeEnum || (exports.DlnaTranscodingProfileTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var DlnaTranscodingProfileTranscodeSeekInfoEnum;
(function (DlnaTranscodingProfileTranscodeSeekInfoEnum) {
    DlnaTranscodingProfileTranscodeSeekInfoEnum["Auto"] = "Auto";
    DlnaTranscodingProfileTranscodeSeekInfoEnum["Bytes"] = "Bytes";
})(DlnaTranscodingProfileTranscodeSeekInfoEnum = exports.DlnaTranscodingProfileTranscodeSeekInfoEnum || (exports.DlnaTranscodingProfileTranscodeSeekInfoEnum = {}));
/**
 * @export
 * @enum {string}
 */
var DlnaTranscodingProfileContextEnum;
(function (DlnaTranscodingProfileContextEnum) {
    DlnaTranscodingProfileContextEnum["Streaming"] = "Streaming";
    DlnaTranscodingProfileContextEnum["Static"] = "Static";
})(DlnaTranscodingProfileContextEnum = exports.DlnaTranscodingProfileContextEnum || (exports.DlnaTranscodingProfileContextEnum = {}));
//# sourceMappingURL=dlna-transcoding-profile.js.map