import { Injectable } from "@nestjs/common";

import { HttpClientResponseInterface } from "@common/interfaces/http-client-response.interface";
import { HttpOkResponse } from "@common/responses/http-ok.response";

@Injectable()
export class ResponseService {
    public getHttpOkResponse<R extends HttpClientResponseInterface = HttpClientResponseInterface>(response: R) {
        return new HttpOkResponse(response);
    }
}