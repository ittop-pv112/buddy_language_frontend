/* tslint:disable */
/* eslint-disable */
/**
 * BuddyLanguage.WebApi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Language } from './language';
import { TtsSpeed } from './tts-speed';
import { Voice } from './voice';

/**
 * 
 *
 * @export
 * @interface UpdateUserPreferencesRequest
 */
export interface UpdateUserPreferencesRequest {

    /**
     * @type {string}
     * @memberof UpdateUserPreferencesRequest
     */
    id: string;

    /**
     * @type {Language}
     * @memberof UpdateUserPreferencesRequest
     */
    nativeLanguage: Language;

    /**
     * @type {Language}
     * @memberof UpdateUserPreferencesRequest
     */
    targetLanguage: Language;

    /**
     * @type {TtsSpeed}
     * @memberof UpdateUserPreferencesRequest
     */
    selectedSpeed: TtsSpeed;

    /**
     * @type {Voice}
     * @memberof UpdateUserPreferencesRequest
     */
    selectedVoice: Voice;

    /**
     * @type {string}
     * @memberof UpdateUserPreferencesRequest
     */
    assistantRoleId: string;
}
