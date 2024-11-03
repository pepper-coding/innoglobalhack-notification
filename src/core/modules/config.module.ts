import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { Global, Module } from "@nestjs/common";

import * as joi from "joi";

import { ConfigService } from "@core/services/config.service";

@Global()
@Module({
    imports: [
    	NestConfigModule.forRoot({
            validationSchema: joi.object({
                APP_HOSTNAME: joi.string().required(),
                APP_PORT: joi.number().required(),
                TG_TOKEN: joi.string().required(),
                TG_CHAT: joi.number().required()
            })
        })
    ],
    providers: [
        ConfigService
    ],
    exports: [
        ConfigService
    ]
})
export class ConfigModule {}