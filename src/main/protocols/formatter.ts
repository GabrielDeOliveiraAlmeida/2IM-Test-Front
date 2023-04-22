export type FieldFormatter = {
  field: string;
  format: (input?: any) => string | number;
};

export type Formatter = { format: (fieldName: string, input: any) => string | number | boolean };
