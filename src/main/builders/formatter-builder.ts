import { FieldFormatter } from '../protocols';
import { phoneMask, toNumber } from '../util';

export class FormatterBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validation: FieldFormatter[],
  ) {}

  static field(fieldName: string): FormatterBuilder {
    return new FormatterBuilder(fieldName, []);
  }

  phone(): FormatterBuilder {
    this.validation.push({
      field: this.fieldName,
      format: phoneMask,
    });
    return this;
  }

  digits(): FormatterBuilder {
    this.validation.push({
      field: this.fieldName,
      format: toNumber,
    });
    return this;
  }

  build(): FieldFormatter[] {
    return this.validation;
  }
}
