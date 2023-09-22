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
* basic information about the bot.
*/
export type ModuleBot = {
    /**
    * Bot\'s user ID
    */
    'userId': string/**/;
    /**
    * Bot\'s basic ID
    */
    'basicId': string/**/;
    /**
    * Bot\'s premium ID. Not included in the response if the premium ID isn\'t set.
    */
    'premiumId'?: string/**/;
    /**
    * Bot\'s display name
    */
    'displayName': string/**/;
    /**
    * Profile image URL. Image URL starting with `https://`. Not included in the response if the bot doesn\'t have a profile image.
    */
    'pictureUrl'?: string/**/;
}

