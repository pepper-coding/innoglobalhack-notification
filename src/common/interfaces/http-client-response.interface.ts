import { HttpBaseResponseInterface } from "@common/interfaces/http-base-response.interface";

export interface HttpClientResponseInterface extends HttpBaseResponseInterface {
    readonly data?: HttpResponseDataType;
}