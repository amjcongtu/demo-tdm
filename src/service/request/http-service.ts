import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpClient {
  axiosInstance: AxiosInstance;
  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: process.env.API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      timeout: 5000,
    };
    this.axiosInstance = axios.create(config);
  }
}
