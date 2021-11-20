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
 * @interface EmbyWebGenericEditEditorsEditorButtonItem
 */
export interface EmbyWebGenericEditEditorsEditorButtonItem {
  /**
   *
   * @type {string}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  editorType?: EmbyWebGenericEditEditorsEditorButtonItemEditorTypeEnum;
  /**
   *
   * @type {string}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  name?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  id?: any;
  /**
   *
   * @type {boolean}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  allowEmpty?: any;
  /**
   *
   * @type {boolean}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  isReadOnly?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  displayName?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  description?: any;
  /**
   *
   * @type {string}
   * @memberof EmbyWebGenericEditEditorsEditorButtonItem
   */
  parentId?: any;
}

/**
 * @export
 * @enum {string}
 */
export enum EmbyWebGenericEditEditorsEditorButtonItemEditorTypeEnum {
  Group = "Group",
  Text = "Text",
  Numeric = "Numeric",
  Boolean = "Boolean",
  SelectSingle = "SelectSingle",
  SelectMultiple = "SelectMultiple",
  Date = "Date",
  FilePath = "FilePath",
  FolderPath = "FolderPath",
  StatusItem = "StatusItem",
  ProgressItem = "ProgressItem",
  ButtonItem = "ButtonItem",
  ButtonGroup = "ButtonGroup",
  CaptionItem = "CaptionItem",
  LabelItem = "LabelItem",
  ItemList = "ItemList",
  RadioGroup = "RadioGroup",
  DataGrid = "DataGrid",
  PivotGrid = "PivotGrid",
  SpacerItem = "SpacerItem",
}
