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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { AddUserRequest } from '../models';
import { UpdateUserPreferencesRequest } from '../models';
import { UpdateUserRequest } from '../models';
import { User } from '../models';
import { UserResponse } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddUserRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userAddPost: async (body?: AddUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") /*|| localVarRequestOptions.headers['Content-Type'] === 'application/json'*/;
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userGetByTelegramIdGet: async (id?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/get_by_telegram_id`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userGetGet: async (userId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/get`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateUserRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userUpdatePost: async (body?: UpdateUserRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") /*|| localVarRequestOptions.headers['Content-Type'] === 'application/json'*/;
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {UpdateUserPreferencesRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userUpdateUserPreferencesPost: async (body?: UpdateUserPreferencesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/update_user_preferences`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") /*|| localVarRequestOptions.headers['Content-Type'] === 'application/json'*/;
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {AddUserRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAddPost(body?: AddUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UserResponse>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userAddPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userGetByTelegramIdGet(id?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<User>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userGetByTelegramIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userGetGet(userId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<User>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userGetGet(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateUserRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userUpdatePost(body?: UpdateUserRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UserResponse>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userUpdatePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {UpdateUserPreferencesRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userUpdateUserPreferencesPost(body?: UpdateUserPreferencesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UserResponse>>> {
            const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userUpdateUserPreferencesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {AddUserRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userAddPost(body?: AddUserRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<UserResponse>> {
            return UserApiFp(configuration).userAddPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [id] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userGetByTelegramIdGet(id?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
            return UserApiFp(configuration).userGetByTelegramIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [userId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userGetGet(userId?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<User>> {
            return UserApiFp(configuration).userGetGet(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateUserRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userUpdatePost(body?: UpdateUserRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<UserResponse>> {
            return UserApiFp(configuration).userUpdatePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UpdateUserPreferencesRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userUpdateUserPreferencesPost(body?: UpdateUserPreferencesRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<UserResponse>> {
            return UserApiFp(configuration).userUpdateUserPreferencesPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @param {AddUserRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async userAddPost(body?: AddUserRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<UserResponse>> {
        return UserApiFp(this.configuration).userAddPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [id] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async userGetByTelegramIdGet(id?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<User>> {
        return UserApiFp(this.configuration).userGetByTelegramIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [userId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async userGetGet(userId?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<User>> {
        return UserApiFp(this.configuration).userGetGet(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateUserRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async userUpdatePost(body?: UpdateUserRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<UserResponse>> {
        return UserApiFp(this.configuration).userUpdatePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {UpdateUserPreferencesRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async userUpdateUserPreferencesPost(body?: UpdateUserPreferencesRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<UserResponse>> {
        return UserApiFp(this.configuration).userUpdateUserPreferencesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
