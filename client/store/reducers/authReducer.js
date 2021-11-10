import axios from "axios";

// action
const GET_AUTH = 'GET_AUTH';

// action creator
const _getAuth = (payload) => {
  return {
    type : GET_AUTH,
    payload
  }
}

// thunk creator
const getAuth = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/auth/me');
      dispatch(_getAuth(data));
    }catch (e) {
      console.error('error in getAuth thunk', e)
    }


  }
}

// reducer
export default (state = {}, action) => {
  switch (action.type) {
    case GET_AUTH:
      return action.payload
    default:
      return state
  }
}
