import { FieldValidator } from '../protocols';
import { biggerThanZero, phoneValidator, requiredField } from '../util';

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validation: FieldValidator[],
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  required(): ValidationBuilder {
    this.validation.push({
      field: this.fieldName,
      validate: requiredField,
    });
    return this;
  }

  biggerThanZero(): ValidationBuilder {
    this.validation.push({
      field: this.fieldName,
      validate: biggerThanZero,
    });
    return this;
  }

  phone(): ValidationBuilder {
    this.validation.push({
      field: this.fieldName,
      validate: phoneValidator,
    });
    return this;
  }

  build(): FieldValidator[] {
    return this.validation;
  }
}
