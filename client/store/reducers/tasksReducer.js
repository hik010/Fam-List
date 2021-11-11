import axios from 'axios';

// action
const GET_TASKS = 'GET_TASKS';
const CLEAR_TASKS = 'CLEAR_TASKS'
const TOGGLE_TASK = 'TOGGLE_TASK';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

// action creator
const _gotTasks = (payload) => {
  return {
    type: GET_TASKS,
    payload,
  };
};

export const _clearTask = () => ({
  type : CLEAR_TASKS
})

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    id,
  };
};

const _addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

const _deleteTask = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
const _updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};

// thunk creator
export const getTasks = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/tasks');
      dispatch(_gotTasks(data));
    } catch (e) {
      console.error('error in getTasks thunk', e);
    }
  };
};

export const addTask = (formData) => {
  return async (dispatch) => {
    try {
      (!formData.userId) ? formData.userId=null : Number(formData.userId);
      const { data } = await axios.post('/api/tasks', formData);
      dispatch(_addTask(data));
    } catch (e) {
      console.error('error in addTask thunk', e);
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/tasks/${id}`);
      dispatch(_deleteTask(data));
    } catch (e) {
      console.error('error in deleteTask thunk', e);
    }
  };
};

export const updateTask = (formData) => {
  return async (dispatch) => {
    try {
      (!formData.userId) ? formData.userId=null : Number(formData.userId);
      const { data } = await axios.put(`/api/tasks/${formData.id}`,formData,);
      dispatch(_updateTask(data));
    } catch (e) {
      console.error('error in updateTask thunk', e);
    }
  };
};

// initial state for tasks
const initialState = [];

// export reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return action.payload;
    case CLEAR_TASKS:
      return [];
    case TOGGLE_TASK: {
      return state.map((task) => {
        if (task.id === action.id) return { ...task, status: !task.status };
        return task;
      });
    }
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK: {
      return state.filter((task) => task.id != action.payload.id);
    }
    case UPDATE_TASK: {
      return state.map((task) => {
        if (task.id === action.payload.id) return action.payload;
        return task;
      });
    }
    default:
      return state;
  }
};
