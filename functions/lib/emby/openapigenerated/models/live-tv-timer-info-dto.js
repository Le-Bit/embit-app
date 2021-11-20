"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveTvTimerInfoDtoKeepUntilEnum = exports.LiveTvTimerInfoDtoStatusEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var LiveTvTimerInfoDtoStatusEnum;
(function (LiveTvTimerInfoDtoStatusEnum) {
    LiveTvTimerInfoDtoStatusEnum["New"] = "New";
    LiveTvTimerInfoDtoStatusEnum["InProgress"] = "InProgress";
    LiveTvTimerInfoDtoStatusEnum["Completed"] = "Completed";
    LiveTvTimerInfoDtoStatusEnum["Cancelled"] = "Cancelled";
    LiveTvTimerInfoDtoStatusEnum["ConflictedOk"] = "ConflictedOk";
    LiveTvTimerInfoDtoStatusEnum["ConflictedNotOk"] = "ConflictedNotOk";
    LiveTvTimerInfoDtoStatusEnum["Error"] = "Error";
})(LiveTvTimerInfoDtoStatusEnum = exports.LiveTvTimerInfoDtoStatusEnum || (exports.LiveTvTimerInfoDtoStatusEnum = {}));
/**
 * @export
 * @enum {string}
 */
var LiveTvTimerInfoDtoKeepUntilEnum;
(function (LiveTvTimerInfoDtoKeepUntilEnum) {
    LiveTvTimerInfoDtoKeepUntilEnum["UntilDeleted"] = "UntilDeleted";
    LiveTvTimerInfoDtoKeepUntilEnum["UntilSpaceNeeded"] = "UntilSpaceNeeded";
    LiveTvTimerInfoDtoKeepUntilEnum["UntilWatched"] = "UntilWatched";
    LiveTvTimerInfoDtoKeepUntilEnum["UntilDate"] = "UntilDate";
})(LiveTvTimerInfoDtoKeepUntilEnum = exports.LiveTvTimerInfoDtoKeepUntilEnum || (exports.LiveTvTimerInfoDtoKeepUntilEnum = {}));
//# sourceMappingURL=live-tv-timer-info-dto.js.map