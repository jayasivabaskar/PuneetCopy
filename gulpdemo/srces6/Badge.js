import React, { Component } from 'react';
class Badge extends Component {
    constructor(){
        super();
        console.log('Set Initial State')
        this.state = {count: 0}
    }

    incrementCount(){
        console.log('click event captured..')
        var newcount = this.state.count + 1
        this.setState({count : newcount})
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" type="button" onClick={this.incrementCount.bind(this)}>
                {this.props.caption} <span className="badge">{this.state.count}</span>
            </button>
            </div>
        
        );
    }
}

export default Badge;



