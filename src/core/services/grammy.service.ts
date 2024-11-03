import { Injectable } from "@nestjs/common";

import { Api } from "grammy";

import { ConfigService } from "@core/services/config.service";

@Injectable()
export class GrammyService {
    private readonly api: Api;

    constructor(private readonly configService: ConfigService) {
        const token = this.configService.getTgToken();

        this.api = new Api(token);
    }

    public async sendMessage(text: string) {
        const chat = this.configService.getTgChat();

        return await this.api.sendMessage(chat, text);
    }
}