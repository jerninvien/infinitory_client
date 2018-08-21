const SET_CURRENT_USER = 'SET_CURRENT_USER';

const GET_USERS_PENDING = 'GET_USERS_PENDING';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const GET_LAB_PENDING = 'GET_LAB_PENDING';
const GET_LAB_SUCCESS = 'GET_LAB_SUCCESS';
const GET_LAB_FAILURE = 'GET_LAB_FAILURE';

const JOIN_CREATE_LAB_PENDING = 'JOIN_CREATE_LAB_PENDING';
const JOIN_CREATE_LAB_SUCCESS = 'JOIN_CREATE_LAB_SUCCESS';
const JOIN_CREATE_LAB_FAILURE = 'JOIN_CREATE_LAB_FAILURE';

import {
  fetchLab,
  fetchUsers,
  joinOrCreateLab
} from 'app/src/services/api';

const initialState = {
  currentUser: null,
  devices: [],
  error: false,
  invite_codes: [],
  loading: false,
  statusCode: null,
  users: [],
}

export default function users (state = initialState, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      console.log('SET_CURRENT_USER', action);
      return {
        ...state,
        currentUser: action.currentUser
      }

    case GET_USERS_PENDING:
      console.log('GET_USERS_PENDING', action);
      return {
        ...state,
        users: [],
        loading: true,
        error: null,
      }
    case GET_USERS_SUCCESS: {
      console.log('GET_USERS_SUCCESS', action);
      const { users } = action.data.data;
      return {
        ...state,
        error: false,
        loading: false,
        users,
      }
    }
    case GET_USERS_FAILURE:
      console.log('GET_USERS_FAILURE', action);
      return {
        ...state,
        loading: false,
        error: action.error.message,
      }


    case GET_LAB_PENDING:
      console.log('GET_LAB_PENDING', action);
      return {
        ...state,
        users: [],
        loading: true,
        error: null,
        statusCode: null
      }
    case GET_LAB_SUCCESS: {
      console.log('GET_LAB_SUCCESS', action);
      const { devices, invite_codes, lab, users } = action.data.data;
      return {
        ...state,
        error: false,
        loading: false,
        devices,
        invite_codes,
        lab,
        users,
      }
    }
    case GET_LAB_FAILURE:
      console.log('GET_LAB_FAILURE', action.error.response);

      const { status } = action.error.response;
      return {
        ...state,
        loading: false,
        error: action.error,
        statusCode: status || null
      }

    case JOIN_CREATE_LAB_PENDING:
      console.log('JOIN_CREATE_LAB_PENDING', action);
      return {
        ...state,
        currentUser: {},
        loading: true,
        error: status || action.error,
      }
    case JOIN_CREATE_LAB_SUCCESS:
      console.log('JOIN_CREATE_LAB_SUCCESS', action);
      // const { currentUser } = action.data.data;
      const { currentUser, devices, invite_codes, lab, users } = action.data.data;

      return {
        ...state,
        currentUser,
        error: false,
        loading: false,
        devices,
        invite_codes,
        lab,
        users,
      }
    case JOIN_CREATE_LAB_FAILURE:
      console.log('JOIN_CREATE_LAB_FAILURE', action.error);
      return {
        ...state,
        loading: false,
        error: action.error.message || 'Invalid Pin Code',
      }

    default:
      return state
  }
}

export const setCurrentUserInStore = currentUser => dispatch => {
  dispatch({type: SET_CURRENT_USER, currentUser});
  return Promise.resolve();
}

// Thunk function:
export const getUsers = () => dispatch => {
    dispatch({ type: GET_USERS_PENDING });
    return fetchUsers()
      .then(data => dispatch({ type: GET_USERS_SUCCESS, data }))
      .catch(error => dispatch({ type: GET_USERS_FAILURE, error }));
}

export const getLab = () => dispatch => {
    dispatch({ type: GET_LAB_PENDING });
    return fetchLab()
      .then(data => dispatch({ type: GET_LAB_SUCCESS, data }))
      .catch(error => dispatch({ type: GET_LAB_FAILURE, error }))
  }

export const joinCreateLab = ({endpoint, invite_code, name}) => dispatch => {
    dispatch({ type: JOIN_CREATE_LAB_PENDING });
    return joinOrCreateLab({endpoint, invite_code, name})
      .then(data => dispatch({ type: JOIN_CREATE_LAB_SUCCESS, data }))
      .catch(error => dispatch({ type: JOIN_CREATE_LAB_FAILURE, error }));
}

// const getUsersSuccess = data => {
//   console.log('getUsersSuccess', data);
//   return { type: GET_USERS_SUCCESS, data }
// }
