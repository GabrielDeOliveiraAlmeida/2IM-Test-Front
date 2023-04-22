import { FieldFormatter, Formatter } from '../protocols';

export const FormatterComposite = (validators: FieldFormatter[]): Formatter => {
  return {
    format: (fieldName: string, input: string | number | boolean): string | number | boolean => {
      const allValidators = validators.filter((item) => item.field === fieldName);
      for (const validator of allValidators) {
        return validator.format(input);
      }
      return input;
    },
  };
};
