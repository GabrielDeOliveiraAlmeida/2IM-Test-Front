import { FormPage } from '@/app/pages';
import { makePostForm } from '@/main/factories/use-case';
import { makeFormPageFormatter, makeFormPageValidation } from '@/main/factories/validation';

export function makeFormPage() {
  return (
    <FormPage
      validator={makeFormPageValidation()}
      formatter={makeFormPageFormatter()}
      apiForm={makePostForm()}
    />
  );
}
