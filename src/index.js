import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Available from './Available';
import OneArray from './OneArray'
import VotingApp from './VotingApp'
import  ToDoList from './ToDoList'
import Routing from './Routing'

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
