export type Validate = (input?: any) => Error | undefined;

export type FieldValidator = {
  field: string;
  validate: Validate;
};

export type Validator = { validate: (fieldName: string, input: any) => string | undefined };
