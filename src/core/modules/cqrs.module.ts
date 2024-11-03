import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { PostNotificationPublishHandler } from "@core/commands/post-notification-publish.handler";
import { GetAppIndexHandler } from "@core/queries/get-app-index.handler";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ],
    providers: [
        PostNotificationPublishHandler,
        GetAppIndexHandler
    ]
})
export class CqrsModule {}