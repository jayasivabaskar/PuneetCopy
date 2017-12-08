import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import NoMatch from './components/NoMatch'
import {Route, Link, Switch,Redirect} from 'react-router-dom'


class Routes extends Component {
   
    render() {
        return (
            <div>
                <Link to="/">Home Page</Link> | <Link to="/about">About Page</Link> |  <Link to="/user">User Page</Link>|  <Link to="/doesnotexist/wrongurl">Wrong URL</Link>
                <hr/>
                <Link to="/about/Chennai">Chennai</Link> | <Link to="/about/Delhi">Delhi</Link>
                <hr/>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/user" component={User}/>
                <Route exact path="/about" component={About}/>
                <Route path="/about/:city" component={About}/>
                {/* <Redirect to="/"/> */}
                <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}

export default Routes;