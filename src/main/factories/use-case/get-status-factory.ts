import { getStatus, GetStatus } from '@/domain/services';
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http';

export const makeGetStatus = (): GetStatus => {
  return getStatus(makeApiUrl('/applicant'), makeAxiosHttpClient());
};
