import axios from 'axios';

export const fetchUsers = () => {
  return axios({
    method: 'GET',
    url: 'https://randomuser.me/api/?results=5&nat=us,dk,fr,gb'
  }).then(res => res).catch(error => error);
}

export const fetchUsersLocal = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people);
    }, 3000);
  })
}

const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
]
