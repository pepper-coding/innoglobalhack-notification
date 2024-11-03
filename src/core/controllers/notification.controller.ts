import { UseInterceptors, Controller, HttpCode, Post, Body } from "@nestjs/common";
import { ApiTags, ApiOkResponse } from "@nestjs/swagger";
import { CommandBus } from "@nestjs/cqrs";

import { PostNotificationPublishCommand } from "@common/commands/post-notification-publish.command";
import { PostNotificationPublishBodyDto } from "@common/dtos/post-notification-publish.dto";
import { HttpResponseInterceptor } from "@core/interceptors/http-response.interceptor";
import { HttpResponseStatusEnum } from "@common/enums/http-response-status.enum";

@ApiTags("Notification")
@UseInterceptors(HttpResponseInterceptor)
@Controller("/notification")
export class NotificationController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiOkResponse({ description: "Notification was successfully published" })
    @HttpCode(HttpResponseStatusEnum.OK)
    @Post("/publish")
    public async getAppIndex(@Body() body: PostNotificationPublishBodyDto) {
        return await this.commandBus.execute(new PostNotificationPublishCommand(body));
    }
}