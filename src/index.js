import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Available from './Available';
import OneArray from './OneArray'
import VotingApp from './VotingApp'
ReactDOM.render(
  <React.StrictMode>
    <VotingApp />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
