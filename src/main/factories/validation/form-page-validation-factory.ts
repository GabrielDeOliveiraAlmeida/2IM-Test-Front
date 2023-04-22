import { ValidationBuilder } from '@/main/builders';
import { ValidationComposite } from '@/main/composite';
import { Validator } from '@/main/protocols';

export function makeFormPageValidation(): Validator {
  return ValidationComposite([
    ...ValidationBuilder.field('name').required().build(),
    ...ValidationBuilder.field('phoneNumber').required().phone().build(),
    ...ValidationBuilder.field('frontEndExperience').required().build(),
    ...ValidationBuilder.field('backEndExperience').required().build(),
    ...ValidationBuilder.field('dataBaseExperience').required().build(),
    ...ValidationBuilder.field('camundaExperience').required().build(),
    ...ValidationBuilder.field('healthAreaExperience').required().build(),
    ...ValidationBuilder.field('yearsOfExperienceFrontEnd').required().build(),
    ...ValidationBuilder.field('yearsOfExperienceBackEnd').required().build(),
    ...ValidationBuilder.field('yearsOfExperienceDatabase').required().build(),
  ]);
}
