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
import { AddAudienceToAudienceGroupRequest } from "../model/addAudienceToAudienceGroupRequest";
import { AudienceGroupCreateRoute } from "../model/audienceGroupCreateRoute";
import { AudienceGroupStatus } from "../model/audienceGroupStatus";
import { CreateAudienceGroupRequest } from "../model/createAudienceGroupRequest";
import { CreateAudienceGroupResponse } from "../model/createAudienceGroupResponse";
import { CreateClickBasedAudienceGroupRequest } from "../model/createClickBasedAudienceGroupRequest";
import { CreateClickBasedAudienceGroupResponse } from "../model/createClickBasedAudienceGroupResponse";
import { CreateImpBasedAudienceGroupRequest } from "../model/createImpBasedAudienceGroupRequest";
import { CreateImpBasedAudienceGroupResponse } from "../model/createImpBasedAudienceGroupResponse";
import { ErrorResponse } from "../model/errorResponse";
import { GetAudienceDataResponse } from "../model/getAudienceDataResponse";
import { GetAudienceGroupAuthorityLevelResponse } from "../model/getAudienceGroupAuthorityLevelResponse";
import { GetAudienceGroupsResponse } from "../model/getAudienceGroupsResponse";
import { UpdateAudienceGroupAuthorityLevelRequest } from "../model/updateAudienceGroupAuthorityLevelRequest";
import { UpdateAudienceGroupDescriptionRequest } from "../model/updateAudienceGroupDescriptionRequest";

import * as Types from "../../types";
import { ensureJSON } from "../../utils";
import { Readable } from "stream";

import HTTPClient from "../../http";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

interface httpClientConfig {
  baseURL?: string;
  channelAccessToken: string;
  // TODO support defaultHeaders?
}

export class ManageAudienceClient {
  private httpClient: HTTPClient;

  constructor(config: httpClientConfig) {
    if (!config.baseURL) {
      config.baseURL = "https://api.line.me";
    }
    this.httpClient = new HTTPClient({
      defaultHeaders: {
        Authorization: "Bearer " + config.channelAccessToken,
      },
      responseParser: this.parseHTTPResponse.bind(this),
      baseURL: config.baseURL,
    });
  }

  private async parseHTTPResponse(response: Response) {
    const { LINE_REQUEST_ID_HTTP_HEADER_NAME } = Types;
    let resBody = {
      ...(await response.json()),
    };
    if (response.headers.get(LINE_REQUEST_ID_HTTP_HEADER_NAME)) {
      resBody[LINE_REQUEST_ID_HTTP_HEADER_NAME] = response.headers.get(
        LINE_REQUEST_ID_HTTP_HEADER_NAME,
      );
    }
    return resBody;
  }

  /**
   * Activate audience
   * @param audienceGroupId The audience ID.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#activate-audience-group"> Documentation</a>
   */
  public async activateAudienceGroup(
    audienceGroupId: number,
  ): Promise<Types.MessageAPIResponseBase> {
    const res = this.httpClient.put(
      "/v2/bot/audienceGroup/{audienceGroupId}/activate".replace(
        "{audienceGroupId}",
        String(audienceGroupId),
      ),
    );
    return ensureJSON(res);
  }
  /**
   * Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by JSON)
   * @param addAudienceToAudienceGroupRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group"> Documentation</a>
   */
  public async addAudienceToAudienceGroup(
    addAudienceToAudienceGroupRequest: AddAudienceToAudienceGroupRequest,
  ): Promise<Types.MessageAPIResponseBase> {
    const params = addAudienceToAudienceGroupRequest;

    const res = this.httpClient.put("/v2/bot/audienceGroup/upload", params);
    return ensureJSON(res);
  }
  /**
   * Create audience for uploading user IDs (by JSON)
   * @param createAudienceGroupRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group"> Documentation</a>
   */
  public async createAudienceGroup(
    createAudienceGroupRequest: CreateAudienceGroupRequest,
  ): Promise<CreateAudienceGroupResponse> {
    const params = createAudienceGroupRequest;

    const res = this.httpClient.post<CreateAudienceGroupResponse>(
      "/v2/bot/audienceGroup/upload",
      params,
    );
    return ensureJSON(res);
  }
  /**
   * Create audience for click-based retargeting
   * @param createClickBasedAudienceGroupRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-click-audience-group"> Documentation</a>
   */
  public async createClickBasedAudienceGroup(
    createClickBasedAudienceGroupRequest: CreateClickBasedAudienceGroupRequest,
  ): Promise<CreateClickBasedAudienceGroupResponse> {
    const params = createClickBasedAudienceGroupRequest;

    const res = this.httpClient.post<CreateClickBasedAudienceGroupResponse>(
      "/v2/bot/audienceGroup/click",
      params,
    );
    return ensureJSON(res);
  }
  /**
   * Create audience for impression-based retargeting
   * @param createImpBasedAudienceGroupRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group"> Documentation</a>
   */
  public async createImpBasedAudienceGroup(
    createImpBasedAudienceGroupRequest: CreateImpBasedAudienceGroupRequest,
  ): Promise<CreateImpBasedAudienceGroupResponse> {
    const params = createImpBasedAudienceGroupRequest;

    const res = this.httpClient.post<CreateImpBasedAudienceGroupResponse>(
      "/v2/bot/audienceGroup/imp",
      params,
    );
    return ensureJSON(res);
  }
  /**
   * Delete audience
   * @param audienceGroupId The audience ID.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#delete-audience-group"> Documentation</a>
   */
  public async deleteAudienceGroup(
    audienceGroupId: number,
  ): Promise<Types.MessageAPIResponseBase> {
    const res = this.httpClient.delete(
      "/v2/bot/audienceGroup/{audienceGroupId}".replace(
        "{audienceGroupId}",
        String(audienceGroupId),
      ),
    );
    return ensureJSON(res);
  }
  /**
   * Gets audience data.
   * @param audienceGroupId The audience ID.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-audience-group"> Documentation</a>
   */
  public async getAudienceData(
    audienceGroupId: number,
  ): Promise<GetAudienceDataResponse> {
    const res = this.httpClient.get<GetAudienceDataResponse>(
      "/v2/bot/audienceGroup/{audienceGroupId}".replace(
        "{audienceGroupId}",
        String(audienceGroupId),
      ),
    );
    return ensureJSON(res);
  }
  /**
   * Get the authority level of the audience
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-authority-level"> Documentation</a>
   */
  public async getAudienceGroupAuthorityLevel(): Promise<GetAudienceGroupAuthorityLevelResponse> {
    const res = this.httpClient.get<GetAudienceGroupAuthorityLevelResponse>(
      "/v2/bot/audienceGroup/authorityLevel",
    );
    return ensureJSON(res);
  }
  /**
   * Gets data for more than one audience.
   * @param page The page to return when getting (paginated) results. Must be 1 or higher.
   * @param description The name of the audience(s) to return. You can search for partial matches. This is case-insensitive, meaning AUDIENCE and audience are considered identical. If omitted, the name of the audience(s) will not be used as a search criterion.
   * @param status The status of the audience(s) to return. If omitted, the status of the audience(s) will not be used as a search criterion.
   * @param size The number of audiences per page. Default: 20 Max: 40
   * @param includesExternalPublicGroups true (default): Get public audiences created in all channels linked to the same bot. false: Get audiences created in the same channel.
   * @param createRoute How the audience was created. If omitted, all audiences are included.  `OA_MANAGER`: Return only audiences created with LINE Official Account Manager (opens new window). `MESSAGING_API`: Return only audiences created with Messaging API.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#get-audience-groups"> Documentation</a>
   */
  public async getAudienceGroups(
    page: number,
    description?: string,
    status?: AudienceGroupStatus,
    size?: number,
    includesExternalPublicGroups?: boolean,
    createRoute?: AudienceGroupCreateRoute,
  ): Promise<GetAudienceGroupsResponse> {
    const queryParams = {
      page: page,
      description: description,
      status: status,
      size: size,
      includesExternalPublicGroups: includesExternalPublicGroups,
      createRoute: createRoute,
    };

    const res = this.httpClient.get<GetAudienceGroupsResponse>(
      "/v2/bot/audienceGroup/list",
      queryParams,
    );
    return ensureJSON(res);
  }
  /**
   * Change the authority level of the audience
   * @param updateAudienceGroupAuthorityLevelRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#change-authority-level"> Documentation</a>
   */
  public async updateAudienceGroupAuthorityLevel(
    updateAudienceGroupAuthorityLevelRequest: UpdateAudienceGroupAuthorityLevelRequest,
  ): Promise<Types.MessageAPIResponseBase> {
    const params = updateAudienceGroupAuthorityLevelRequest;

    const res = this.httpClient.put(
      "/v2/bot/audienceGroup/authorityLevel",
      params,
    );
    return ensureJSON(res);
  }
  /**
   * Renames an existing audience.
   * @param audienceGroupId The audience ID.
   * @param updateAudienceGroupDescriptionRequest
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#set-description-audience-group"> Documentation</a>
   */
  public async updateAudienceGroupDescription(
    audienceGroupId: number,
    updateAudienceGroupDescriptionRequest: UpdateAudienceGroupDescriptionRequest,
  ): Promise<Types.MessageAPIResponseBase> {
    const params = updateAudienceGroupDescriptionRequest;

    const res = this.httpClient.put(
      "/v2/bot/audienceGroup/{audienceGroupId}/updateDescription".replace(
        "{audienceGroupId}",
        String(audienceGroupId),
      ),
      params,
    );
    return ensureJSON(res);
  }
}
