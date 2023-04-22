export const onlyDigits = (input: string): string => {
  return input.replace(/\D/g, '');
};

export const phoneMask = (input: string) => {
  input = onlyDigits(input);
  const size = input.length;
  if (size > 10) {
    input = input.replace(/^([0-9]{2})([0-9]{5})([0-9]{0,4}).*/, '($1) $2-$3');
  }
  if (size > 6) {
    input = input.replace(/^([0-9]{2})([0-9]{4})([0-9]{0,4}).*/, '($1) $2-$3');
  } else if (size > 2) {
    input = input.replace(/^([0-9]{2})([0-9]{0,5}).*/, '($1) $2');
  }
  return input;
};

export const toNumber = (input: string) => {
  input = onlyDigits(input);
  return Number.parseFloat(input);
};
