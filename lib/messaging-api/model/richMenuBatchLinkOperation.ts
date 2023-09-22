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
import { RequestFile } from './models';
import { RichMenuBatchOperation } from './richMenuBatchOperation';

/**
* Replace the rich menu with the rich menu specified in the `to` property for all users linked to the rich menu specified in the `from` property.
*/
export type RichMenuBatchLinkOperation = RichMenuBatchOperation & {
    /**
    */
    'from': string/**/;
    /**
    */
    'to': string/**/;
}

