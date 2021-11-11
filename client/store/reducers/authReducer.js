import axios from 'axios';

// action
const GET_AUTH = 'GET_AUTH';
const CLEAR_AUTH = 'CLEAR_AUTH'; //when user logs out

// action creator
const _getAuth = (payload) => {
  return {
    type: GET_AUTH,
    payload,
  };
};

export const _clearAuth = () => {
  return {
    type: CLEAR_AUTH,
  };
};

export const authenticate = async (name, password, method) => {
    const { data: token } = await axios.post(`/auth/${method}`, {
      name,
      password,
    });
    window.localStorage.setItem('jwt-token', token);

};
// thunk creator

export const getAuth = (token) => {
  return async (dispatch) => {
    try {
      // WHY add to req.headers.authorization..?
      const { data } = await axios.get('/auth', {
        headers: {
          authorization: token,
        },
      });
      dispatch(_getAuth(data));
    } catch (e) {
      console.error('error in getAuth thunk', e);
    }
  };
};

// reducer
export default (state = {}, action) => {
  switch (action.type) {
    case GET_AUTH:
      return action.payload;
    case CLEAR_AUTH:
      return {};
    default:
      return state;
  }
};
