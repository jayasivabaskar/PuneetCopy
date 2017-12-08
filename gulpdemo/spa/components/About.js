import React, { Component } from 'react';
class About extends Component {
    componentWillMount() {
        console.log('CWM', this.props.match.params.city);
    }

    componentWillUpdate(){
        console.log('CWU**', this.props.match.params.city);
    }

    render() {
        console.log(this.props.match);  
        return (
             <h2>About Page for  {this.props.match.params.city}</h2>   
        );
    }
}

export default About;