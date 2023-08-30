/**
 * LIFF server API
 * LIFF Server API.
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LiffBotPrompt } from "./liffBotPrompt";
import { LiffFeatures } from "./liffFeatures";
import { LiffScope } from "./liffScope";
import { LiffView } from "./liffView";

export type LiffApp = {
  /**
   * LIFF app ID
   */
  liffId?: string /**/;
  /**
   */
  view?: LiffView /**/;
  /**
   * Name of the LIFF app
   */
  description?: string /**/;
  /**
   */
  features?: LiffFeatures /**/;
  /**
   * How additional information in LIFF URLs is handled. concat is returned.
   */
  permanentLinkPattern?: string /**/;
  /**
   */
  scope?: Array<LiffScope> /**/;
  /**
   */
  botPrompt?: LiffBotPrompt /**/;
};

export namespace LiffApp {}
