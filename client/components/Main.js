import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Container } from 'react-bootstrap';
import TaskList from './TaskList';
import { getTasks, _clearTasks } from '../store/reducers/tasksReducer';
import { getUsers, _clearUsers } from '../store/reducers/usersReducer';
import {getAuth, _clearAuth} from "../store/reducers/authReducer"
import AddForm from './AddFrom';
import SignIn from './SignIn';
import anime from 'animejs/lib/anime.es.js';

// functional Main Component

function Main() {
  //loading all tasks from database to redux
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth, shallowEqual);

  const animateTitle = () => {
    var textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime.timeline({ loop: false }).add({
      targets: '.title .letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 5000,
      delay: (el, i) => 110 * i,
    });
  };

  // will fill up the auth of the state if token on window local storage
  const attemptLogin = () => {
    const tokenStored = window.localStorage.getItem('jwt-token');
    if (tokenStored) {
      // get the user data with that token
      // const userData = {name: "hyo", password: "1234"}
      dispatch(getAuth(tokenStored));
      dispatch(getTasks());
      dispatch(getUsers());
    }
  }

  const clickLogOut = () => {
    window.localStorage.removeItem('jwt-token');
   dispatch(_clearAuth());
   dispatch(_clearTasks());
   dispatch(_clearUsers());
  }

  // componentDidMount, after the very initial render
  useEffect(() => {
    animateTitle();
    attemptLogin();

    // authentication steps
  }, []);



  // rendering
  return (
    <div className="container mt-5 p-3 topLevel">
      <h1 className="title text-center">Fam-List</h1>

      {JSON.stringify(auth) === '{}' ? (
        <SignIn attemptLogin={attemptLogin} />
      ) : (
        <React.Fragment>
          <h3 className="text-center"> Welcome, {auth.name} </h3>
          <button type="button" className="btn btn-danger" onClick={clickLogOut}> Logout </button>
          <AddForm />

          <hr></hr>

          <TaskList />
        </React.Fragment>
      )}
    </div>
  );
}
export default Main;
