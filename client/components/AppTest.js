import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import anime from 'animejs/lib/anime.es.js';
import { Route, Routes, useNavigate } from 'react-router';
import SignIn from './SignIn';
import Home from './Home';
import { getTasks, _clearTasks } from '../store/reducers/tasksReducer';
import { getUsers, _clearUsers } from '../store/reducers/usersReducer';
import { getAuth, _clearAuth } from '../store/reducers/authReducer';

function AppTest() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth, shallowEqual);
  let navigate = useNavigate()


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
      navigate('/home');
    }
  };

  const clickLogOut = () => {
    window.localStorage.removeItem('jwt-token');
    dispatch(_clearAuth());
    dispatch(_clearTasks());
    dispatch(_clearUsers());
    navigate('/signin');
  };

  // componentDidMount

  useEffect(() => {
    animateTitle();
    attemptLogin();
  }, []);

  return (
    <div className="container mt-5 p-3 topLevel">
      <h1 className="title text-center">Fam-List</h1>
      <Routes>
        <Route
          path="/signin"
          element={<SignIn attemptLogin={attemptLogin} />}
        />
        <Route path="/home" element={<Home clickLogOut={clickLogOut} />} />
      </Routes>
    </div>
  );
}

export default AppTest;
