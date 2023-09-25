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
import { AudienceGroupType } from './audienceGroupType';


/**
* Create audience for click-based retargeting
*/
export type CreateClickBasedAudienceGroupResponse =  { 
    /**
    * The audience ID.
    */
    'audienceGroupId'?: number/**/;
    /**
    */
    'type'?: AudienceGroupType/**/;
    /**
    * The audience\'s name.
    */
    'description'?: string/**/;
    /**
    * When the audience was created (in UNIX time).
    */
    'created'?: number/**/;
    /**
    * The request ID that was specified when the audience was created.
    */
    'requestId'?: string/**/;
    /**
    * The URL that was specified when the audience was created.
    */
    'clickUrl'?: string/**/;
    /**
    * How the audience was created. `MESSAGING_API`: An audience created with Messaging API. 
    */
    'createRoute'?: CreateClickBasedAudienceGroupResponse.CreateRouteEnum/**/;
    /**
    * Audience\'s update permission. Audiences linked to the same channel will be READ_WRITE.  - `READ`: Can use only. - `READ_WRITE`: Can use and update. 
    */
    'permission'?: CreateClickBasedAudienceGroupResponse.PermissionEnum/**/;
    /**
    * Time of audience expiration. Only returned for specific audiences.
    */
    'expireTimestamp'?: number/**/;
    /**
    * The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:  true: Accounts are specified with IFAs. false (default): Accounts are specified with user IDs. 
    */
    'isIfaAudience'?: boolean/* = false*/;
}

export namespace CreateClickBasedAudienceGroupResponse {
    export type CreateRouteEnum = 
            'MESSAGING_API'
    ;
    export type PermissionEnum = 
            | 'READ'
            'READ_WRITE'
    ;
}
