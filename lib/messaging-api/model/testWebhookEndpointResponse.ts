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

export type TestWebhookEndpointResponse = {
    /**
    * Result of the communication from the LINE platform to the webhook URL.
    */
    'success'?: boolean/**/;
    /**
    * Time of the event in milliseconds. Even in the case of a redelivered webhook, it represents the time the event occurred, not the time it was redelivered. 
    */
    'timestamp': Date/**/;
    /**
    * The HTTP status code. If the webhook response isn\'t received, the status code is set to zero or a negative number.
    */
    'statusCode': number/**/;
    /**
    * Reason for the response.
    */
    'reason': string/**/;
    /**
    * Details of the response.
    */
    'detail': string/**/;
}

