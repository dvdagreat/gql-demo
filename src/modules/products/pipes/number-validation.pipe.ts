import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NumberValidationPipe implements PipeTransform {
  readonly fieldName = 'number'
  transform(value: any, metadata: ArgumentMetadata) {
    if(!value) {
      throw new BadRequestException(`${this.fieldName} must be provided`)
    }

    return value;
  }
}
