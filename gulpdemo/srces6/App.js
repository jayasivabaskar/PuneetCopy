import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import ThumbnailList from './ThumbnailList'

var obj = React.createElement(ThumbnailList, {});
ReactDOM.render(obj, document.getElementById('mount-point'))
