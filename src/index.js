import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clipper from './Clipper';

ReactDOM.render(
  <>
    <App />
  </>, document.getElementById('modal-window'));

ReactDOM.render(
  <>
      <Clipper />
  </>, document.getElementById('clipper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
