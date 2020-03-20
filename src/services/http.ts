import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

const baseURL = 'http://127.0.0.1:3001/api';

type Request = (url: string, data?: object) => Promise<any>;

interface HttpRequest {
  get?: Request;
  post?: Request;
  delete?: Request;
  put?: Request;
}

type Method = 'get' | 'post' | 'delete' | 'put';

const methods: Method[] = ['get', 'post', 'delete', 'put'];

const http: HttpRequest = {};

methods.forEach(v => {
  http[v] = (url: string, data: any) => {
    const config: AxiosRequestConfig = {
      url,
      method: v,
      baseURL
    };
    const instance = axios.create({
      baseURL
    });
    // 请求拦截器
    instance.interceptors.request.use(
      cfg => {
        // 在这里可以对请求添加头部信息
        return cfg;
      },
      error => {
        // 错误抛出
        return Promise.reject(error);
      }
    );
    // 结果拦截器
    instance.interceptors.response.use(
      res => {
        if (res && res.data) {
          return res.data;
        }
        return res;
      },
      error => {
        // 错误抛出
        return Promise.reject(error);
      }
    );

    if (v === 'get' || v === 'delete') {
      config.params = data;
    } else {
      config.data = qs.stringify(data);
    }

    return instance
      .request(config)
      .then(res => {
        return res;
      })
      .catch(err => {
        // 错误集中处理
        return Promise.reject(err);
      });
  };
});

export default http;
