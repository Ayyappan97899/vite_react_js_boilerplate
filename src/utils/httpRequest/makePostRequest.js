import { appAxios } from 'src/api/appAxios';

export const makePostRequest = async (endpoint, body, config = {}, baseURL) => {
  const { data } = await appAxios(config, baseURL).post(endpoint, body, config);

  return data;
};
