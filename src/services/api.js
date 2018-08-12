import axios from 'axios';

export const fetchUsers = () => {
  return axios({
    method: 'GET',
    url: 'https://randomuser.me/api/?results=5&nat=us,dk,fr,gb'
  });
  // .then(res => res).catch(error => error);
}

export const joinOrCreateLab = ({endpoint, pin_code, username}) => {
  console.log('joinOrCreateLab', endpoint, pin_code, username);
  return axios({
    method: 'POST',
    url: `http://0.0.0.0:3000/api/v1/${endpoint}`,
    data: {
      [endpoint]: {
        pin_code,
        name: username,
      }
    }
  });
  // .then(res => {
  //   // Handle the Invite response here
  //   console.log('response is', res);
  //   return res;
  // }).catch(err => {
  //    // Handle Invite errors here
  //    console.log('error is 1', err);
  //
  //    // this.setState({
  //    //   error: err.message || 'Invalid Pin Code',
  //    //   loading: false,
  //    // });
  //    return err;
  // });
}

// export const fetchUsersLocal = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve(people);
//     }, 3000);
//   })
// }
//
// const people = [
//   { name: 'Nader', age: 36 },
//   { name: 'Amanda', age: 24 },
//   { name: 'Jason', age: 44 }
// ]
