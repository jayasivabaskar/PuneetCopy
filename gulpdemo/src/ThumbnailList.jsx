var Thumbnail = require('./Thumbnail')
var ThumbnailList = React.createClass({
    
     render: function(){
        var courses = ['React', 'Angular', 'JS', 'Angular4']
        var list = courses.map(function(value, index){
            console.log(value)
            return <Thumbnail title={value}/>
        })
         return (
            <div className="container">
                <div className="row">
                    {list}
                </div> 
            </div>
            
         )
     }
 })

 module.exports = ThumbnailList
 
 