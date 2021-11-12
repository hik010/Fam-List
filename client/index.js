import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store';
// import Main from './components/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import anime from 'animejs/lib/anime.es.js';
import "../public/style.css"
import AppTest from './components/AppTest';

function App(){
  return (
  <Provider store={store}>
    <HashRouter>
    <AppTest />
    </HashRouter>

  </Provider>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'));
