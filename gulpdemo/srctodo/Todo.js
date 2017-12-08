import React, { Component } from 'react';
import axios from 'axios';
class Todo extends Component {

    constructor(){
        super();
        this.state = {todos: [{text: 'Item1'}, {text: 'Item2'}]}
    }

    componentWillMount() {
        axios.get('http://localhost:4000/todo')
        .then( (response) => {
          console.log(response);
          this.setState({todos: response.data})
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    render() {
        var list = this.state.todos.map((todo, i) => <li key={i}>{todo.text}</li>)
        return (
            <div>
                <h2>Todo list</h2>
                <ul>
                {list}
            </ul>
                </div>
            
            
        );
    }
}

export default Todo;