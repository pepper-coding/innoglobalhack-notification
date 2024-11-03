import { HttpBaseResponseInterface } from "@common/interfaces/http-base-response.interface";
import { HttpResponseStatusEnum } from "@common/enums/http-response-status.enum";

export class HttpBaseResponseClass<R extends HttpBaseResponseInterface = HttpBaseResponseInterface> {
    constructor(
        private readonly response: R, 
        private readonly status: HttpResponseStatusEnum
    ) {}

    public getResponse() {
        return this.response;
    }

    public getStatus() {
        return this.status;
    }
}