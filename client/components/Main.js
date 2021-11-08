import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import TaskList from './TaskList';
import { getTasks } from '../store/reducers/tasksReducer';
import { getUsers } from '../store/reducers/usersReducer';
import AddForm from './AddFrom';
// import anime from 'animejs/lib/anime.es.js';

// functional Main Component

function Main() {
  //loading all tasks from database to redux
  const dispatch = useDispatch();

  useEffect(() => {
    var textWrapper = document.querySelector('.title');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline({ loop: false })
      .add({
        targets: '.title .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 5000,
        delay: (el, i) => 110 * i,
      })
  }, []);

  useEffect(() => {
    dispatch(getTasks());
    dispatch(getUsers());
  }, []);

  // rendering
  return (
    <div className="container mt-5 p-3 topLevel">
      <h1 className="title text-center">Fam-List</h1>

      <AddForm />

      <hr></hr>

      <TaskList />
    </div>
  );
}
export default Main;
