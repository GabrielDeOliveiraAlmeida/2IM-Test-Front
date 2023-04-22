import { Form } from '@/app/pages/form-page/types/form-types';
import { HttpClient, HttpStatusCode } from '@/domain/contracts/http-client';
import { FailedToPostFormError } from '@/domain/errors';

type Setup = (url: string, httpClient: HttpClient<string>) => PostForm;
type Input = { data: Form };
type Output = string;
export type PostForm = (input: Input) => Promise<Output>;

export const setupPostForm: Setup =
  (url, httpClient) =>
  async ({ data }) => {
    const response = await httpClient.request({
      url,
      method: 'post',
      data,
    });
    switch (response.status) {
      case HttpStatusCode.ok:
        return response.data ?? '';
      default:
        throw new FailedToPostFormError();
    }
  };
