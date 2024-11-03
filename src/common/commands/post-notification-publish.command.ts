import { PostNotificationPublishBodyDto } from "@common/dtos/post-notification-publish.dto";

export class PostNotificationPublishCommand {
    constructor(public readonly body: PostNotificationPublishBodyDto) {}
}