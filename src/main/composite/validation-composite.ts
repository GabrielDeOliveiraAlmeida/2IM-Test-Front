import { FieldValidator, Validator } from '../protocols/validation';

export const ValidationComposite = (validators: FieldValidator[]): Validator => {
  return {
    validate: (fieldName: string, input: object): string | undefined => {
      const allValidators = validators.filter((item) => item.field === fieldName);
      for (const validator of allValidators) {
        try {
          validator.validate(input);
        } catch (e) {
          const error = e as Error;
          return error.message;
        }
      }
    },
  };
};
