import axios, { AxiosStatic } from 'axios';
import Cookies from 'js-cookie';

export const DEVELOPMENT_URL = 'http://localhost:8080';
export const PRODUCTION_URL = 'https://api.youlift.xyz';

export const DEVELOPMENT_DOMAIN = 'localhost';
export const PRODUCTION_DOMAIN = '.youlift.xyz';

export const COOKIE_NAME = 'mysession';

export const isLogged = (): boolean => {
  if (Cookies.get(COOKIE_NAME)) {
    return true;
  }
  return false;
};

export const getUserName = async (): Promise<string> => {
  axios.defaults.withCredentials = true;
  const ID = await getUserID();
  return axios
    .get(DEVELOPMENT_URL + `/v1/user/${ID}`)
    .then((response) => response.data.Name ?? '');
};

export const getUserID = (): Promise<number> => {
  axios.defaults.withCredentials = true;
  return axios
    .get(DEVELOPMENT_URL + '/session/')
    .then((response) => response.data);
};

export const logout = (): void => {
  if (Cookies.get(COOKIE_NAME)) {
    Cookies.remove(COOKIE_NAME, { path: '/', domain: DEVELOPMENT_DOMAIN });
    window.location.replace('/');
  }
};

export const getUserInformation = async (): Promise<any> => {
  axios.defaults.withCredentials = true;
  const ID = await getUserID();
  return axios
    .get(DEVELOPMENT_URL + `/v1/user/${ID}`)
    .then((user) => user.data)
    .catch((error) => error);
};

export const getUserStats = async (): Promise<any> => {
  axios.defaults.withCredentials = true;
  const ID = await getUserID();
  return axios
    .get(DEVELOPMENT_URL + `/v1/userStat/${ID}`)
    .then((stats) => stats.data)
    .catch((error) => error);
};
