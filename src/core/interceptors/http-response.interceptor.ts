import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import * as rxjs from "rxjs";

import { HttpBaseResponseClass } from "@common/classes/http-base-response.class";

@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler) {
        const operator = rxjs.map((value) => {
            if(value instanceof HttpBaseResponseClass) {
                return value.getResponse();
            }
            else {
                return value;
            }
        });

        const observable = next.handle();

        return observable.pipe(operator);
    }
}