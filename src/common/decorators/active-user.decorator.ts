import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserActiveInterface } from '../interfaces/user-active.interface';

export const ActiveUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx
      .switchToHttp()
      .getRequest<{ user?: UserActiveInterface } & Request>();
    return request.user;
  },
);
