import axios from 'axios'


// action
const GET_USERS = 'GET_USERS';
const CLEAR_USERS = 'CLEAR_USERS';

// action creator
const gotUsers = (payload) => {
  return {
    type: GET_USERS,
    payload
  }
}

export const _clearUsers = () => {
  return {
    type: CLEAR_USERS
  }
}

// thunk creator
export const getUsers = () => {
  return async(dispatch) => {
    try{
      const {data} = await axios.get(`/api/users`);
      dispatch(gotUsers(data))
    } catch (e) {
      console.error('error in getUsers thunk', e);
    }
  }
}


// initial state
const initialState = [];


// export reducer
export default (state = initialState, action) => {
  switch (action.type){
    case GET_USERS:
      return action.payload;
    case CLEAR_USERS:
      return [];
    default:
      return state;
  }
}
