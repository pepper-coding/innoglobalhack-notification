import { ConfigService as NestConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigService {
    constructor(private readonly nestConfigService: NestConfigService) {}

    public getAppHostname() {
        return this.nestConfigService.get("APP_HOSTNAME");
    }

    public getAppPort() {
        return this.nestConfigService.get("APP_PORT");
    }

    public getTgToken() {
        return this.nestConfigService.get("TG_TOKEN");
    }

    public getTgChat() {
        return this.nestConfigService.get("TG_CHAT");
    }
}