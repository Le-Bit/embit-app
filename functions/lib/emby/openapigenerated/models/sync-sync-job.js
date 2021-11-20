"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncSyncJobStatusEnum = exports.SyncSyncJobCategoryEnum = void 0;
/**
 * @export
 * @enum {string}
 */
var SyncSyncJobCategoryEnum;
(function (SyncSyncJobCategoryEnum) {
    SyncSyncJobCategoryEnum["Latest"] = "Latest";
    SyncSyncJobCategoryEnum["NextUp"] = "NextUp";
    SyncSyncJobCategoryEnum["Resume"] = "Resume";
})(SyncSyncJobCategoryEnum = exports.SyncSyncJobCategoryEnum || (exports.SyncSyncJobCategoryEnum = {}));
/**
 * @export
 * @enum {string}
 */
var SyncSyncJobStatusEnum;
(function (SyncSyncJobStatusEnum) {
    SyncSyncJobStatusEnum["Queued"] = "Queued";
    SyncSyncJobStatusEnum["Converting"] = "Converting";
    SyncSyncJobStatusEnum["ReadyToTransfer"] = "ReadyToTransfer";
    SyncSyncJobStatusEnum["Transferring"] = "Transferring";
    SyncSyncJobStatusEnum["Completed"] = "Completed";
    SyncSyncJobStatusEnum["CompletedWithError"] = "CompletedWithError";
    SyncSyncJobStatusEnum["Failed"] = "Failed";
})(SyncSyncJobStatusEnum = exports.SyncSyncJobStatusEnum || (exports.SyncSyncJobStatusEnum = {}));
//# sourceMappingURL=sync-sync-job.js.map