var Badge = require('./Badge')

var Thumbnail = React.createClass({
   
    render: function(){
        return (
           
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img src="http://via.placeholder.com/192x200" alt="..."/>
      <div className="caption">
        <h3>{this.props.title}</h3>
        <p>Some summary</p>
        <div><Badge caption="Votes"/></div>
      </div>
    </div>
  </div>

            
            
        )
    }
})

module.exports = Thumbnail
