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
* Transcoding response
*/
export type GetMessageContentTranscodingResponse =  { 
    /**
    * The preparation status. One of:  `processing`: Preparing to get content. `succeeded`: Ready to get the content. You can get the content sent by users. `failed`: Failed to prepare to get the content. 
    */
    'status': GetMessageContentTranscodingResponse.StatusEnum/**/;
}

export namespace GetMessageContentTranscodingResponse {
    export enum StatusEnum {
        Processing = <any> 'processing',
        Succeeded = <any> 'succeeded',
        Failed = <any> 'failed'
    }
}
