/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RichMenuBatchOperation } from "./richMenuBatchOperation";

/**
 * Unlink the rich menu from all users linked to the rich menu.
 */
import { RichMenuBatchOperationBase } from "./models";

export type RichMenuBatchUnlinkAllOperation = RichMenuBatchOperationBase & {
  type: "unlinkAll";
};
