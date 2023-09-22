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

export type RoomUserProfileResponse = {
    /**
    * User\'s display name
    */
    'displayName': string/**/;
    /**
    * User ID
    */
    'userId': string/**/;
    /**
    * Profile image URL. `https` image URL. Not included in the response if the user doesn\'t have a profile image.
    */
    'pictureUrl'?: string/**/;
}

