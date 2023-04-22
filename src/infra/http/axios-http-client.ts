import axios, { AxiosResponse } from 'axios';

import {
  HttpRequest,
  HttpClient,
  HttpResponse,
  HttpStatusCode,
} from '@/domain/contracts/http-client';

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.data,
        params: data.params,
        headers: data.headers,
      });

      return {
        status: axiosResponse.status,
        data: axiosResponse.data,
      };
    } catch (error) {
      let axiosResponse;
      if (axios.isAxiosError(error)) {
        if (error.response) {
          axiosResponse = error.response;
        }
        if (error.request) {
          axiosResponse = error.request;
        }
        return {
          status: axiosResponse.status,
          data: axiosResponse.data,
        };
      }
      return {
        status: HttpStatusCode.serverError,
      };
    }
  }
}
