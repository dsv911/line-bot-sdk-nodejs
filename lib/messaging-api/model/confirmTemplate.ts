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
import { Action } from './action';
import { Template } from './template';


import { TemplateBase } from './models';
export type ConfirmTemplate = TemplateBase &  { 
    type: "confirm",
    /**
    */
    'text'?: string/**/;
    /**
    */
    'actions'?: Array<Action>/**/;
}

