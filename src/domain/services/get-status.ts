import { HttpClient, HttpStatusCode } from '@/domain/contracts/http-client';
import { UnexpectedError } from '@/domain/errors';

type Setup = (url: string, httpClient: HttpClient<Output>) => GetStatus;
type Output = { id: string; ended: boolean; suspended: boolean };
type Input = { processId: string };
export type GetStatus = (input: Input) => Promise<Output>;

export const getStatus: Setup =
  (url, httpClient) =>
  async ({ processId }) => {
    const response = await httpClient.request({
      url: `${url}/${processId}`,
      method: 'get',
    });
    switch (response.status) {
      case HttpStatusCode.ok:
        return response.data ?? { id: '', ended: true, suspended: true };
      case HttpStatusCode.notFound:
        throw new Error('Processo não encontrado');
      default:
        throw new UnexpectedError();
    }
  };
