import { Global, Module } from "@nestjs/common";

import { NotificationController } from "@core/controllers/notification.controller";
import { AppController } from "@core/controllers/app.controller";
import { ResponseModule } from "@core/modules/response.module";
import { SwaggerModule } from "@core/modules/swagger.module";
import { ConfigModule } from "@core/modules/config.module";
import { GrammyModule } from "@core/modules/grammy.module";
import { CqrsModule } from "@core/modules/cqrs.module";

@Global()
@Module({
    imports: [
        ResponseModule,
        SwaggerModule,
        ConfigModule,
        GrammyModule,
        CqrsModule
    ],
    controllers: [
        NotificationController,
        AppController
    ]
})
export class AppModule {}