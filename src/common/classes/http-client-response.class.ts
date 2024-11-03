import { HttpClientResponseInterface } from "@common/interfaces/http-client-response.interface";
import { HttpResponseStatusEnum } from "@common/enums/http-response-status.enum";
import { HttpBaseResponseClass } from "@common/classes/http-base-response.class";

export class HttpClientResponseClass<R extends HttpClientResponseInterface = HttpClientResponseInterface> extends HttpBaseResponseClass<R> {
    constructor(response: R, status: HttpResponseStatusEnum) {
        super(response, status);
    }
}