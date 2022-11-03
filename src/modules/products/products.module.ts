import { Module } from '@nestjs/common';
import { LoggerModule } from '../logger/logger.module';
import { ProductsController } from './products.controller';

@Module({
  imports: [LoggerModule],
  controllers: [ProductsController],
  providers: []
})
export class ProductsModule {}
