import { ApiProperty } from "@nestjs/swagger";

export class PostNotificationPublishBodyDto {
    @ApiProperty({ name: "text", type: String, required: true, example: "Some text", description: "Post notification publish body text" })
    public readonly text: string;
}