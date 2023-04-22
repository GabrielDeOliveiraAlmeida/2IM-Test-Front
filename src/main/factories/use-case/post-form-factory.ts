import { PostForm, setupPostForm } from '@/domain/services';
import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http';

export const makePostForm = (): PostForm => {
  return setupPostForm(makeApiUrl('/applicant'), makeAxiosHttpClient());
};
