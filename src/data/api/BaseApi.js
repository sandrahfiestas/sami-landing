/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
import axios from 'axios';
// import { getJwt } from '../config/credentials';
// import { TOKEN_KEY } from '../core/appConstants';

const headersAccess = {
  'Content-Type': 'application/json',
};

const http = axios.create({
  // baseURL: 'https://8pzsl1vwl5.execute-api.us-east-2.amazonaws.com/FAse1',
  baseURL: 'https://79z25zohcj.execute-api.us-east-2.amazonaws.com/dev',
  headers: headersAccess,
});

// const httpLogin = axios.create({
//   baseURL: 'https://cognito-idp.us-east-2.amazonaws.com/',
//   headers: {
//     'Content-Type': 'application/x-amz-json-1.1',
//     'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
//   },
// });

// const httpLocal = axios.create({
//   baseURL: 'http://localhost:8080/',
//   headers: {
//     'Content-Type': 'application/x-amz-json-1.1',
//     'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
//   },
// });

const responseBody = (response) => response.data;

const BaseApi = {
  get: (url) => http.get(url).then(responseBody),
  getWithQueryParam: (url, config) => http.get(url, { params: config }).then(responseBody),
  postWithQueryParam: (url, config, body) => http.post(url, body, { params: config }).then(responseBody),
  post: (url, body) => http.post(url, body).then(responseBody),
  put: (url, body) => http.put(url, body).then(responseBody),
  delete: (url) => http.delete(url).then(responseBody),
  deleteWithQueryParams: (url, config) => http.delete(url, { params: config }).then(responseBody),
  postForm: (url, file, request) => {
    const formData = new FormData();
    file.forEach((element) => {
      formData.append('files', element);
    });
    if (file.length === 0) {
      formData.append('files', new Blob([null]));
    }
    formData.append(
      'request',
      new Blob([JSON.stringify(request)], { type: 'application/json' }),
    );
    return http
      .post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then(responseBody);
  },
  // postLogin: (body) => httpLogin.post('', body).then(responseBody),
  getSearchLocal: (url, config) => http.get(url, { params: config }).then(responseBody),
};
http.interceptors.response.use(undefined, (error) => {
  throw error.response;
});

// To add token
// http.interceptors.request.use(
//   (config) => {
//     const token = getJwt();
//     if (token) config.headers.Authorization = `${token}`;
//     console.log(config);
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
export default BaseApi;

