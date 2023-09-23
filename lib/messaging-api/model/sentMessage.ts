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


export type SentMessage =  { 
    /**
    * ID of the sent message.
    */
    'id': string/**/;
    /**
    * Quote token of the message. Only included when a message object that can be specified as a quote target was sent as a push or reply message. 
    */
    'quoteToken'?: string/**/;
}

