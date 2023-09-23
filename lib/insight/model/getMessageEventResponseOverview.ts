/**
 * LINE Messaging API(Insight)
 * This document describes LINE Messaging API(Insight).
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
* Summary of message statistics.
*/
export type GetMessageEventResponseOverview =  { 
    /**
    * Request ID.
    */
    'requestId'?: string/**/;
    /**
    * UNIX timestamp for message delivery time in seconds.
    */
    'timestamp'?: number/**/;
    /**
    * Number of messages delivered. This property shows values of less than 20. However, if all messages have not been sent, it will be null. 
    */
    'delivered'?: number/**/;
    /**
    * Number of users who opened the message, meaning they displayed at least 1 bubble.
    */
    'uniqueImpression'?: number | null/**/;
    /**
    * Number of users who opened any URL in the message.
    */
    'uniqueClick'?: number | null/**/;
    /**
    * Number of users who started playing any video or audio in the message.
    */
    'uniqueMediaPlayed'?: number | null/**/;
    /**
    * Number of users who played the entirety of any video or audio in the message.
    */
    'uniqueMediaPlayed100Percent'?: number | null/**/;
}

