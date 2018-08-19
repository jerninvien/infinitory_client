import axios from 'axios';
import { AsyncStorage } from 'react-native';

// configure base url
const api = axios.create({
  baseURL: 'http://0.0.0.0:3000/api/v1/',
});

export const setAxiosTokenHeader = token => {
  console.log('setAxiosTokenHeader()', token);
  api.defaults.headers.common['authorization'] = token
}

export const fetchUsers = () => {
  // return axios({
  //   method: 'GET',
  //   url: 'https://randomuser.me/api/?results=5&nat=us,dk,fr,gb'
  // });

  return api({
    method: 'GET',
    url: 'users',
  })
}


export const joinOrCreateLab = ({url, invite_code, name}) => {
  console.log('joinOrCreateLab', url, invite_code, name);
  return api({
    method: 'POST',
    url,
    data: { [endpoint]: { invite_code, name } }
  });
}
