import axios from 'axios';
import { AsyncStorage } from 'react-native';

// configure base url
const api = axios.create({
  baseURL: 'http://0.0.0.0:3000/api/v1/',
});

// intercept requests and add authorization token
api.interceptors.request.use(config => {
  // const token = store.getState().auth.token;
  console.log('helo up here');

  AsyncStorage.getItem('api_key').then(token => {
    if (token) {
      console.log('token found!');
      config.headers.authorization = `Bearer ${token}`;
    } else {
      console.log('token not found!');
    }
  });

  console.log('configing axios api', config);
  return config;
})


export const fetchUsers = () => {
  console.log('fetchUserszzz');
  // return axios({
  //   method: 'GET',
  //   url: 'https://randomuser.me/api/?results=5&nat=us,dk,fr,gb'
  // });

  return api({
    method: 'GET',
    url: 'users',
  })
}


export const joinOrCreateLab = ({endpoint, invite_code, name}) => {
  console.log('joinOrCreateLab', endpoint, invite_code, name);
  return api({
    method: 'POST',
    url: endpoint,
    data: {
      [endpoint]: { invite_code, name }
    }
  });
}
