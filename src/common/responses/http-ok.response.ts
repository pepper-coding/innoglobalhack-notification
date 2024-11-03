import { HttpClientResponseInterface } from "@common/interfaces/http-client-response.interface";
import { HttpClientResponseClass } from "@common/classes/http-client-response.class";
import { HttpResponseStatusEnum } from "@common/enums/http-response-status.enum";

export class HttpOkResponse<R extends HttpClientResponseInterface = HttpClientResponseInterface> extends HttpClientResponseClass<R> {
    constructor(response: R) {
        super(response, HttpResponseStatusEnum.OK);
    }
}