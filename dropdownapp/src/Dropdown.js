import React, { Component } from 'react';
import Button from './Button'
import ListItem from './ListItem'
class Dropdown extends Component {

    constructor(){
        super();
        this.state = {show: false, courses: ['React', 'Angular', 'Ember', 'CanJS']}
    }
    
    buttonClick(){
        console.log('In parent component');
        this.setState({show: !this.state.show})
    }

    handleItemClick(item){
        console.log('In parent..', item)
        this.setState({buttonCaption: item, show: false, todo: item})
    }

    displayTextValue(){
        console.log('Display text value', this.state.todo);
    }

    handleTextChange(event){
        console.log(event.target.value);
        this.setState({todo: event.target.value})
    }

    render() {

        var list = this.state.courses.map((course, index) => <ListItem whenClick={this.handleItemClick.bind(this)} text={course} key={index}></ListItem> )

        return (
            <div class="dropdown">
            <input type="text" onChange={this.handleTextChange.bind(this)} value={this.state.todo}/>
            <button onClick={this.displayTextValue.bind(this)}>Display</button>
            <Button whenClick={this.buttonClick.bind(this)} caption={this.state.buttonCaption || this.props.buttonCaption}/>
            <ul class={this.state.show?"dropdown-menu show":"dropdown-menu"} aria-labelledby="dropdownMenu1">
                {list}
            </ul>
          </div> 
        );
    }
}

export default Dropdown;