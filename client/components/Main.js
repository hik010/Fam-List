import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import TaskList from './TaskList';
import { getTasks } from '../store/reducers/tasksReducer';
import { getUsers } from '../store/reducers/usersReducer';
import AddForm from './AddFrom';

// functional Main Component

function Main() {
  //loading all tasks from database to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
    dispatch(getUsers());
  }, []);

  // rendering
  return (
    <div className="container mt-5 p-3 topLevel">
      <h1 className="text-center">Fam-List</h1>

      <AddForm />

      <hr></hr>

      <TaskList />
    </div>
  );
}
export default Main;
