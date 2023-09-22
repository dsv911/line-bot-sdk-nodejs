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
import { Message } from './message';

export type PushMessageRequest = {
    /**
    * ID of the receiver.
    */
    'to': string/**/;
    /**
    * List of Message objects.
    */
    'messages': Array<Message>/**/;
    /**
    * `true`: The user doesn’t receive a push notification when a message is sent. `false`: The user receives a push notification when the message is sent (unless they have disabled push notifications in LINE and/or their device). The default value is false. 
    */
    'notificationDisabled'?: boolean/* = false*/;
    /**
    * List of aggregation unit name. Case-sensitive. This functions can only be used by corporate users who have submitted the required applications. 
    */
    'customAggregationUnits'?: Array<string>/**/;
}

