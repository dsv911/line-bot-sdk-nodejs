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
import { QuickReply } from './quickReply';
import { Sender } from './sender';


import { MessageBase } from './models';
export type VideoMessage = MessageBase &  { 
    type: "video",
    /**
    */
    'originalContentUrl'?: string/**/;
    /**
    */
    'previewImageUrl'?: string/**/;
    /**
    */
    'trackingId'?: string/**/;
}

