import { Body, Controller, Get, Param, Patch, Post, UsePipes, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from '../logger/interceptors/logger.interceptor';
import { DummyDto } from './decorators/dummy-dto.decorator';
import { CreateProductDto } from './dtos/create-product.dto';
import { DescriptionValidationPipe } from './pipes/description-validation.pipe';
import { IdValidationPipe } from './pipes/id-validation.pipe';
import { NameValidationPipe } from './pipes/name-validation.pipe';
import { NumberValidationPipe } from './pipes/number-validation.pipe';

interface dummydto {
    name: string,
    number: number
}

@Controller('products')
export class ProductsController {
    @UsePipes(new ValidationPipe())
    @Patch(':id[0-9]+')
    @UseInterceptors(LoggerInterceptor)
    createProducts(
        @Param('id', IdValidationPipe) id: number, 
        @Body() createProductDto: CreateProductDto, 
    ): any {

        return [id, createProductDto.name, createProductDto.description, createProductDto.number]
    }

    @Get()
    getDummy(@DummyDto('name') dummyName: string, @DummyDto('number') dummyNumber: string) {
        return {
            dummyName, dummyNumber
        };
    }
}
