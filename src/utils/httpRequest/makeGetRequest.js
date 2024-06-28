import { appAxios } from 'src/api/appAxios';

const makeGetRequest = async (endpoint, config = {}, params = {}, baseURL) => {
  const { data } = await appAxios(config, baseURL).get(endpoint, {
    params: params,
    paramsSerializer: { indexes: null },
  });
  return data;
};

export default makeGetRequest;
