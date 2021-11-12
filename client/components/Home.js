import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import TaskList from './TaskList';
import AddForm from './AddFrom';

function Home({clickLogOut}){
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth, shallowEqual);
  return (
    <React.Fragment>
    <h3 className="text-center"> Welcome, {auth.name} </h3>
    <button type="button" className="btn btn-danger" onClick={clickLogOut}> Logout </button>
    <AddForm />

    <hr></hr>

    <TaskList />
  </React.Fragment>
  )
}

export default Home;
