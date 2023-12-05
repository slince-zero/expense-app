import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs';

// 定义自己的拦截器
export class CustomerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        return data.map((item) => {
          const response = { ...item, createdAt: item.created_at };
          delete response.created_at;
          delete response.updated_at;
          return response;
        });
      }),
    );
  }
}
