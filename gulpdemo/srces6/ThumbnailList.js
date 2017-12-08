import React, { Component } from 'react';
import Thumbnail from './Thumbnail'
class ThumbnailList extends Component {

    render() {
        var courses = ['React', 'Angular', 'JS', 'Angular4']
        var list = courses.map(function(value, index){
            console.log(value)
            return <Thumbnail key={index} title={value}/>
        })
         return (
            <div className="container">
                <div className="row">
                    {list}
                </div> 
            </div>
            
         )
    }
}

export default ThumbnailList;


 
 