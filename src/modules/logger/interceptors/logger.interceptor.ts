import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggerInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.logger.log('before logger interceptor')
    return next.handle().pipe(tap(() => {
      this.logger.log('after logger interceptor')
    }))
  }
}
