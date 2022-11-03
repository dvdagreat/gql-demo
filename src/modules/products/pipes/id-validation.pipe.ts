import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  readonly fieldName = 'id'
  transform(value: any, metadata: ArgumentMetadata) {
    if(!value) {
      throw new BadRequestException(`${this.fieldName} must be provided`)
    }

    if(isNaN(value)) {
      throw new BadRequestException(`${this.fieldName} must be a number`)
    }

    return value;
  }
}
