import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown'

var options = {
    buttonCaption: 'Show Courses!!',
    courses: []
}
var obj = React.createElement(Dropdown, options)

ReactDOM.render(obj, document.getElementById('mount-point'))