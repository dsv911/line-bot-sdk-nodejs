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

import { AudienceGroupType } from "./audienceGroupType";

/**
 * Create audience for impression-based retargeting
 */
export type CreateImpBasedAudienceGroupResponse = {
  /**
   * The audience ID.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group">audienceGroupId Documentation</a>
   */
  audienceGroupId?: number /**/;
  /**
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group">type Documentation</a>
   */
  type?: AudienceGroupType /**/;
  /**
   * The audience\'s name.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group">description Documentation</a>
   */
  description?: string /**/;
  /**
   * When the audience was created (in UNIX time).
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group">created Documentation</a>
   */
  created?: number /**/;
  /**
   * The request ID that was specified when the audience was created.
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-imp-audience-group">requestId Documentation</a>
   */
  requestId?: string /**/;
};

export namespace CreateImpBasedAudienceGroupResponse {}
