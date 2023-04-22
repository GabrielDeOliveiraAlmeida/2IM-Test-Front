import { Validate } from '../protocols';

export const phoneValidator: Validate = (input: string) => {
  const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  if (phoneRegex.test(input)) {
    return undefined;
  }
  throw new Error('Telefone inválido');
};

export const biggerThanZero: Validate = (input: number) => {
  if (input >= 0) {
    return undefined;
  }
  throw new Error('Deve ser maior ou igual a zero!');
};

export const requiredField: Validate = (input: any) => {
  if (input === null || input === undefined || input === '' || Number.isNaN(input)) {
    console.log(Number.isNaN(input));
    throw new Error('Campo requirido');
  }
  return undefined;
};
