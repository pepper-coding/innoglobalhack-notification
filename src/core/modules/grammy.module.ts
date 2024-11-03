import { Global, Module } from "@nestjs/common";

import { GrammyService } from "@core/services/grammy.service";

@Global()
@Module({
    providers: [
        GrammyService
    ],
    exports: [
        GrammyService
    ]
})
export class GrammyModule {}