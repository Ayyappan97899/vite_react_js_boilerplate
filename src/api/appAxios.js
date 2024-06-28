import axios from 'axios';
import getHostAPIUrl from './config';

export const appAxios = (config = {}, baseURL = getHostAPIUrl()) => {
  let defaultConfig = {};

  defaultConfig = {
    ...config,
  };

  const axiosCreate = axios.create({
    baseURL: baseURL,
    responseType: 'json',
    headers: {
      ...defaultConfig,
    },
  });

  axiosCreate.interceptors.response.use(
    (res) => res,
    (err) => {
      return Promise.reject(err);
    }
  );

  return axiosCreate;
};
