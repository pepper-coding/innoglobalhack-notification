import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";

import { ConfigService } from "@core/services/config.service";
import { SwaggerModule } from "@core/modules/swagger.module";
import { AppModule } from "@core/modules/app.module";

async function bootstrap() {
    const adapter = new FastifyAdapter();

    const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

    const swagger = app.get(SwaggerModule);

    swagger.use(app);

    const config = app.get(ConfigService);

    const hostname = config.getAppHostname();

    const port = config.getAppPort();

    await app.listen(port, hostname);
}

bootstrap();