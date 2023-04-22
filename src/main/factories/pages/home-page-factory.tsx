import { HomePage } from '@/app/pages/home-page';
import { makeGetAllApplicant } from '@/main/factories/use-case';

export function makeHomePage() {
  return <HomePage getAllApplicant={makeGetAllApplicant()} />;
}
