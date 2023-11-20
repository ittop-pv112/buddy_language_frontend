// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { deserializeIntoUpdateUserRequest, serializeUpdateUserRequest, type UpdateUserRequest } from '../../models/updateUserRequest';
import { createUserResponseFromDiscriminatorValue, deserializeIntoUserResponse, serializeUserResponse, type UserResponse } from '../../models/userResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UpdateRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Builds and executes requests for operations under /user/update
 */
export class UpdateRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UpdateRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/user/update");
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserResponse
     */
    public post(body: UpdateUserRequest, requestConfiguration?: UpdateRequestBuilderPostRequestConfiguration | undefined) : Promise<UserResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<UserResponse>(requestInfo, createUserResponseFromDiscriminatorValue, undefined);
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UpdateUserRequest, requestConfiguration?: UpdateRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.tryAddRequestHeaders("Accept", "application/json;q=1, text/plain;q=0");
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUpdateUserRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a updateRequestBuilder
     */
    public withUrl(rawUrl: string) : UpdateRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UpdateRequestBuilder(rawUrl, this.requestAdapter);
    };
}
// tslint:enable
// eslint-enable
