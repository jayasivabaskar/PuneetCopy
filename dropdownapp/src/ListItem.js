import React, { Component } from 'react';
class ListItem extends Component {
   
    handleItemClick(){
        console.log('Item is clicked..', this.props.text)
        this.props.whenClick(this.props.text);
    }
    render() {
        return (
            <li onClick={this.handleItemClick.bind(this)} class="list-group-item">{this.props.text}</li>
        );
    }
}

export default ListItem;