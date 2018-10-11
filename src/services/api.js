import axios from 'axios';
import { AsyncStorage } from 'react-native';

// NOTE Post to HTTPS in production!!!
const api = axios.create({
  baseURL: 'http://0.0.0.0:3000/api/v1/',
});

// api.interceptors.response.use(response => {
//   console.log('rezponz iz', response);
//   return response;
//   }, error => {
//     console.log('Response error:', error.response);
//     if (401 === error.response.status) {
//       console.log('******* 401 error *******');
//     } else if (403 === error.response.status) {
//       console.log('******* 403 error *******')
//     } else {
//       return Promise.reject(error.status);
//     }
// });

export const setAxiosTokenHeader = token => {
  console.log('setAxiosTokenHeader', token);
  api.defaults.headers.common['authorization'] = token;
  return Promise.resolve(token);
}

export const fetchUsers = () =>  api({ method: 'GET', url: 'users' })

export const fetchLab = () => api({ method: 'GET', url: 'lab' })

export const joinOrCreateLab = ({endpoint, invite_code, name}) => {
  console.log('joinOrCreateLab', endpoint, invite_code, name);
  return api({
    method: 'POST',
    url: endpoint,
    data: { [endpoint]: { invite_code, name } }
  });
}
