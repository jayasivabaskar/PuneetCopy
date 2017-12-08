import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import {Route, Link} from 'react-router-dom'

class Routes extends Component {
   
    render() {
        return (
            <div>
                <Link to="/">Home Page</Link> | <Link to="/about">About Page</Link>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        );
    }
}

export default Routes;