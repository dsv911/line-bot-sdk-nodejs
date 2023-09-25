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

/* tslint:disable:no-unused-locals */
import { AttachModuleResponse } from '../model/attachModuleResponse';
import * as Types from "../../types";
import {ensureJSON} from "../../utils";
import {Readable} from "stream";

import { RequestFile } from '../../http';
import HTTPClient from "../../http";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


interface httpClientConfig {
    baseURL?: string;
    // TODO support defaultHeaders?
}


export class LineModuleAttachClient {
    private httpClient: HTTPClient;

    constructor(config: httpClientConfig = {}) {
        if (!config.baseURL) {
            config.baseURL = 'https://manager.line.biz';
        }
        this.httpClient = new HTTPClient(config);
    }

    /**
     * Attach by operation of the module channel provider
     * @param grantType authorization_code
     * @param code Authorization code received from the LINE Platform.
     * @param redirectUri Specify the redirect_uri specified in the URL for authentication and authorization.
     * @param codeVerifier Specify when using PKCE (Proof Key for Code Exchange) defined in the OAuth 2.0 extension specification as a countermeasure against authorization code interception attacks.
     * @param clientId Instead of using Authorization header, you can use this parameter to specify the channel ID of the module channel. You can find the channel ID of the module channel in the LINE Developers Console. 
     * @param clientSecret Instead of using Authorization header, you can use this parameter to specify the channel secret of the module channel. You can find the channel secret of the module channel in the LINE Developers Console. 
     * @param region If you specified a value for region in the URL for authentication and authorization, specify the same value. 
     * @param basicSearchId If you specified a value for basic_search_id in the URL for authentication and authorization, specify the same value.
     * @param scope If you specified a value for scope in the URL for authentication and authorization, specify the same value.
     * @param brandType If you specified a value for brand_type in the URL for authentication and authorization, specify the same value.
     */
    public async attachModule(grantType?: string, code?: string, redirectUri?: string, codeVerifier?: string, clientId?: string, clientSecret?: string, region?: string, basicSearchId?: string, scope?: string, brandType?: string, ) : Promise<AttachModuleResponse> {
        


        const formParams = {
            "grantType": grantType,
            "code": code,
            "redirectUri": redirectUri,
            "codeVerifier": codeVerifier,
            "clientId": clientId,
            "clientSecret": clientSecret,
            "region": region,
            "basicSearchId": basicSearchId,
            "scope": scope,
            "brandType": brandType,
        };



        const res = this.httpClient.postForm<AttachModuleResponse>(
            "/module/auth/v1/token",
            
            formParams,
            
            
        );
        return ensureJSON(res);
    }
}
