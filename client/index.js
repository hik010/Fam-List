import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  return (
  <Provider store={store}>
    <HashRouter>
    <div>App Component</div>
    </HashRouter>

  </Provider>
  )
}

ReactDOM.render(<App /> , document.getElementById('root'));
