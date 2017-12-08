
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class Home extends Component {
    
    render() {
        return (
             <h2>Home Page</h2>   
        );
    }
}

export default Home;
ReactDOM.render(<Home/>, document.getElementById('mount-point-comp1'))