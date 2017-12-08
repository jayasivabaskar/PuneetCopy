import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class About extends Component {
    
    render() {
        return (
             <h2>About Page</h2>   
        );
    }
}

export default About;
ReactDOM.render(<About/>, document.getElementById('mount-point-comp2'))