import { AxiosResponse } from 'axios';
import { HttpClient } from './http-service';

interface Dict<T> {
  [key: string]: T;
  [key: number]: T;
}

export interface ChangeListener {
  (event: any): any;
}

export class ServiceBase extends HttpClient {
  private onChangeListeners: Dict<ChangeListener> = {};
  get = async (url: string, paramsQuery?: any): Promise<AxiosResponse> => {
    return await this.axiosInstance.get(url, { params: { ...paramsQuery } });
  };
  getParams = async (
    url: string,
    paramsQuery?: any,
  ): Promise<AxiosResponse> => {
    return await this.axiosInstance.get(url, { params: { ...paramsQuery } });
  };
  put = async (url: string, data: any): Promise<AxiosResponse> => {
    return await this.axiosInstance.put(url, data);
  };

  patch = async (url: string, data: any): Promise<AxiosResponse> => {
    return await this.axiosInstance.patch(url, data);
  };

  post = async (url: string, params: any): Promise<AxiosResponse> => {
    return await this.axiosInstance.post(url, params);
  };
  
  postFormData = async (
    url: string,
    params: any,
    config?: any,
  ): Promise<AxiosResponse> => {
    return await this.axiosInstance.post(url, params, config);
  };

  putFormData = async (
    url: string,
    data: any,
    config: any,
  ): Promise<AxiosResponse> => {
    return await this.axiosInstance.put(url, data, config);
  };

  delete = async (url: string, id: number | string): Promise<AxiosResponse> => {
    return await this.axiosInstance.delete(`${url}/${id}`);
  };

  deleteByUrl = async (url: string): Promise<AxiosResponse> => {
    return await this.axiosInstance.delete(url);
  };

  update = async (
    url: string,
    id: number | undefined,
    params: any,
  ): Promise<AxiosResponse> => {
    return await this.axiosInstance.patch(`${url}/${id}`, params);
  };

  subscribe(key: string, listener: ChangeListener) {
    if (this.onChangeListeners[key]) return;
    this.onChangeListeners[key] = listener;
  }

  unsubcribe(key: string) {
    delete this.onChangeListeners[key];
  }

  fire(data: any) {
    Object.values(this.onChangeListeners).forEach((listener) => listener(data));
  }
}
