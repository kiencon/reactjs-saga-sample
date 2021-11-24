/* eslint-disable class-methods-use-this */
import axios from 'axios';
import Cookies from '../cookies';

class AxiosService {
  constructor() {
    this.instance = axios.create({
      headers: this._getHeaders(),
    });

    this.instance.interceptors.request.use(
      this._interceptBeforeRequest,
      this._interceptRequestError,
    );

    this.instance.interceptors.response.use(
      this._interceptResponseData,
      this._interceptResponseError,
    );

    // this.instance.defaults.baseURL = 'http://localhost:3001'
  }

  _getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  async _interceptBeforeRequest(config) {
    const cloneConfig = { ...config };

    if (!config.url) {
      return Promise.reject(new Error('[AxiosService] URL must not be blank'));
    }

    const authToken = Cookies.get('auth_token') || localStorage.getItem('auth_token');
    if (authToken) {
      cloneConfig.headers.authorization = `Bearer ${authToken}`;
    }

    return cloneConfig;
  }

  _interceptRequestError(error) {
    // Do something with request error
    return Promise.reject(error);
  }

  _interceptResponseData(response) {
    // Do something with response data
    return response;
  }

  _interceptResponseError(error) {
    // Do something with response error
    return Promise.reject(error.toJSON());
  }

  get(url = '/', params = {}, config = {}) {
    return this.instance.get(url, {
      params,
      ...config,
    });
  }

  post(url = '/', data, config = { crossdomain: true }) {
    return this.instance.post(url, data, config);
  }

  put(url = '/', data, config = { crossdomain: true }) {
    return this.instance.put(url, data, config);
  }

  patch(url = '/', data, config = { crossdomain: true }) {
    return this.instance.patch(url, data, config);
  }

  delete(url = '/', params = {}, config = { crossdomain: true }) {
    return this.instance.delete(url, { params }, config);
  }
}

const axiosInstance = new AxiosService();

export default axiosInstance;
