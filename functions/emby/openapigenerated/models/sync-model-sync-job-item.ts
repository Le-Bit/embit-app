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
 * @interface SyncModelSyncJobItem
 */
export interface SyncModelSyncJobItem {
  /**
   *
   * @type {number}
   * @memberof SyncModelSyncJobItem
   */
  id?: any;
  /**
   *
   * @type {number}
   * @memberof SyncModelSyncJobItem
   */
  jobId?: any;
  /**
   *
   * @type {number}
   * @memberof SyncModelSyncJobItem
   */
  itemId?: any;
  /**
   *
   * @type {string}
   * @memberof SyncModelSyncJobItem
   */
  itemName?: any;
  /**
   *
   * @type {string}
   * @memberof SyncModelSyncJobItem
   */
  mediaSourceId?: any;
  /**
   *
   * @type {MediaSourceInfo}
   * @memberof SyncModelSyncJobItem
   */
  mediaSource?: any;
  /**
   *
   * @type {string}
   * @memberof SyncModelSyncJobItem
   */
  targetId?: any;
  /**
   *
   * @type {string}
   * @memberof SyncModelSyncJobItem
   */
  outputPath?: any;
  /**
   *
   * @type {string}
   * @memberof SyncModelSyncJobItem
   */
  status?: SyncModelSyncJobItemStatusEnum;
  /**
   *
   * @type {number}
   * @memberof SyncModelSyncJobItem
   */
  progress?: any | null;
  /**
   *
   * @type {Date}
   * @memberof SyncModelSyncJobItem
   */
  dateCreated?: any;
  /**
   *
   * @type {number}
   * @memberof SyncModelSyncJobItem
   */
  primaryImageItemId?: any;
  /**
   *
   * @type {string}
   * @memberof SyncModelSyncJobItem
   */
  primaryImageTag?: any;
  /**
   *
   * @type {string}
   * @memberof SyncModelSyncJobItem
   */
  temporaryPath?: any;
  /**
   *
   * @type {Array&lt;SyncModelItemFileInfo&gt;}
   * @memberof SyncModelSyncJobItem
   */
  additionalFiles?: any;
  /**
   *
   * @type {number}
   * @memberof SyncModelSyncJobItem
   */
  itemDateModifiedTicks?: any;
}

/**
 * @export
 * @enum {string}
 */
export enum SyncModelSyncJobItemStatusEnum {
  Queued = "Queued",
  Converting = "Converting",
  ReadyToTransfer = "ReadyToTransfer",
  Transferring = "Transferring",
  Synced = "Synced",
  Failed = "Failed",
}
