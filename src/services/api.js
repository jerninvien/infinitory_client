import axios from 'axios';
import { AsyncStorage } from 'react-native';

// NOTE Post to HTTPS in production!!!
const api = axios.create({
  baseURL: 'http://0.0.0.0:3000/api/v1/',
});

export const setAxiosTokenHeader = token =>
  api.defaults.headers.common['authorization'] = token

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
