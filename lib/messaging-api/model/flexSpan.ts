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
import { FlexComponent } from './flexComponent';


import { FlexComponentBase } from './models';
export type FlexSpan = FlexComponentBase &  { 
    type: "span",
    /**
    */
    'text'?: string/**/;
    /**
    */
    'size'?: string/**/;
    /**
    */
    'color'?: string/**/;
    /**
    */
    'weight'?: FlexSpan.WeightEnum/**/;
    /**
    */
    'style'?: FlexSpan.StyleEnum/**/;
    /**
    */
    'decoration'?: FlexSpan.DecorationEnum/**/;
}

export namespace FlexSpan {
    export enum WeightEnum {
        Regular = <any> 'regular',
        Bold = <any> 'bold'
    }
    export enum StyleEnum {
        Normal = <any> 'normal',
        Italic = <any> 'italic'
    }
    export enum DecorationEnum {
        None = <any> 'none',
        Underline = <any> 'underline',
        LineThrough = <any> 'line-through'
    }
}
