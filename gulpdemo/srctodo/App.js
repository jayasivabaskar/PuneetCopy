import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Todo from './Todo'

var obj = React.createElement(Todo, {});
ReactDOM.render(obj, document.getElementById('mount-point'))
