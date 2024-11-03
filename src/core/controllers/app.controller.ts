import { UseInterceptors, Controller, HttpCode, Get } from "@nestjs/common";
import { ApiTags, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { HttpResponseInterceptor } from "@core/interceptors/http-response.interceptor";
import { HttpResponseStatusEnum } from "@common/enums/http-response-status.enum";
import { GetAppIndexQuery } from "@common/queries/get-app-index.query";

@ApiTags("App")
@UseInterceptors(HttpResponseInterceptor)
@Controller("/")
export class AppController {
    constructor(private readonly queryBus: QueryBus) {}

    @ApiOkResponse({ description: "Everything is good" })
    @HttpCode(HttpResponseStatusEnum.OK)
    @Get("/")
    public async getAppIndex() {
        return await this.queryBus.execute(new GetAppIndexQuery());
    }
}