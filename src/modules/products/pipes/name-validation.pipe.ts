import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NameValidationPipe implements PipeTransform {
  readonly fieldName = 'name'
  transform(value: any, metadata: ArgumentMetadata) {
    if(!value) {
      throw new BadRequestException(`${this.fieldName} must be provided`)
    }

    return value;
  }
}
