import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class DescriptionValidationPipe implements PipeTransform {
  readonly fieldName = 'description'
  transform(value: any, metadata: ArgumentMetadata) {
    if(!value) {
      throw new BadRequestException(`${this.fieldName} must be provided`)
    }

    return value;
  }
}
