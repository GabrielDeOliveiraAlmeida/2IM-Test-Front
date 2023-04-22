import { GetAllAplicant, getAllApplicant } from '@/domain/services';
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http';

export const makeGetAllApplicant = (): GetAllAplicant => {
  return getAllApplicant(makeApiUrl('/applicant'), makeAxiosHttpClient());
};
