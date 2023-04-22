import { HttpClient, HttpStatusCode } from '@/domain/contracts/http-client';
import { UnexpectedError } from '@/domain/errors';

import { Applicant } from '../model';

type Setup = (url: string, httpClient: HttpClient<Output>) => GetAllAplicant;
type Output = Applicant[];
export type GetAllAplicant = () => Promise<Output>;

export const getAllApplicant: Setup = (url, httpClient) => async () => {
  const response = await httpClient.request({
    url,
    method: 'get',
  });
  switch (response.status) {
    case HttpStatusCode.ok:
      return response.data ?? [];
    default:
      throw new UnexpectedError();
  }
};
