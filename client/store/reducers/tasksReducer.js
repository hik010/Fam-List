import axios from 'axios'


// action
const GET_TASKS = 'GET_TASKS';

// action creator
const gotTasks = (payload) => {
  return {
    type: GET_TASKS,
    payload
  }
}

// thunk creator
export const getTasks = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/tasks');
      dispatch(gotTasks(data));
    } catch (e) {
      console.error('error in getTasks thunk', e);
    }
  }
}

// initial state
const initialState = [];

// export reducer
export default (state=initialState, action) => {
  switch(action.type) {
    case GET_TASKS:
      return action.payload;
    default:
      return state;
  }
}
