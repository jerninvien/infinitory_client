import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/v1/';

export const networkRequest = {
  send({method, endpoint, data, headers}) {
    return axios({
      method,
      url: `${baseUrl}${endpoint}`,
      headers,
      data
      }).then(res => {
        // Handle the response here
        console.log('response is', res);
        return res;
      }).catch(err => {
         // Handle errors here
         console.log('error is', err);
         return err;
      });
  }
}
