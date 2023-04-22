import { FormatterBuilder } from '@/main/builders';
import { FormatterComposite } from '@/main/composite/formatter-composite';
import { Formatter } from '@/main/protocols';

export function makeFormPageFormatter(): Formatter {
  return FormatterComposite([
    ...FormatterBuilder.field('phoneNumber').phone().build(),
    ...FormatterBuilder.field('yearsOfExperienceFrontEnd').digits().build(),
    ...FormatterBuilder.field('yearsOfExperienceBackEnd').digits().build(),
    ...FormatterBuilder.field('yearsOfExperienceDatabase').digits().build(),
  ]);
}
