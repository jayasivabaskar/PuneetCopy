import React, { Component } from 'react';
import UserDisplay from './UserDisplay'
import UserEdit from './UserEdit'
import {Route, Link} from 'react-router-dom'
class User extends Component {
    
    render() {
        return (
             <div>
                 <Link to="/user">Display</Link> | <Link to="/user/edit">Edit</Link>
                   <Route exact path="/user" component={UserDisplay}/> 
                   <Route path="/user/edit" component={UserEdit}/> 
              </div>      
        );
    }
}

export default User;