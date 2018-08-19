import axios from 'axios';
import { AsyncStorage } from 'react-native';

// configure base url
const api = axios.create({
  baseURL: 'http://0.0.0.0:3000/api/v1/',
});

const _retrieveData = async () => {
  console.log('_retrieveData()');
  try {
    const value = await AsyncStorage.getItem('apiKey');
    if (value !== null) {
      // We have data!!
      console.log('Setting Axios Auth header', value);
      api.defaults.headers.common['authorization'] = value
      // return value
    }
   } catch (error) {
     // Error retrieving data
     console.log('error retriginv apiKey');
   }
}

_retrieveData()

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
