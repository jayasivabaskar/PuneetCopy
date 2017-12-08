// Step-1. Create a component class
var Time = React.createClass({
    render: function(){

        var currentTime = new Date();
        return (
            <div>
                <h2>Current Time</h2>
                <p>{currentTime.getHours()} : {currentTime.getMinutes()} : {currentTime.getSeconds()}</p>
            </div>
        )
        
    }
})

setInterval( function(){ 
   // Step-2. Create an instance of the 
var obj = React.createElement(Time, {})

// Step-3. Render the instance on the DOM
ReactDOM.render(obj, document.getElementById('mount-point'))
}, 1000) 

