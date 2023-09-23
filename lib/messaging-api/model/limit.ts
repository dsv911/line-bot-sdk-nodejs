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


/**
* Limit of the Narrowcast
*/
export type Limit =  { 
    /**
    * The maximum number of narrowcast messages to send. Use this parameter to limit the number of narrowcast messages sent. The recipients will be chosen at random. 
    */
    'max'?: number/**/;
    /**
    * If true, the message will be sent within the maximum number of deliverable messages. The default value is `false`.  Targets will be selected at random. 
    */
    'upToRemainingQuota'?: boolean/* = false*/;
}

