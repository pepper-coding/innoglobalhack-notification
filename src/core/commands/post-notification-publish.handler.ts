import { CommandHandler } from "@nestjs/cqrs";

import { PostNotificationPublishCommand } from "@common/commands/post-notification-publish.command";
import { ResponseService } from "@core/services/response.service";
import { GrammyService } from "@core/services/grammy.service";

@CommandHandler(PostNotificationPublishCommand)
export class PostNotificationPublishHandler {
    constructor(
        private readonly responseService: ResponseService,
        private readonly grammyService: GrammyService
    ) {}

    public async execute(command: PostNotificationPublishCommand) {
        const response = await this.grammyService.sendMessage(command.body.text);

        return this.responseService.getHttpOkResponse({
            message: "Notification was successfully published",
            data: response
        });
    }
}