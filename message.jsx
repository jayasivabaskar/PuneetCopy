// Step-1. Create a component class
var Message = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Some message in the template</h2>
            </div>
        )
        
    }
})

// Step-2. Create an instance of the 
var obj = React.createElement(Message, {})

// Step-3. Render the instance on the DOM
ReactDOM.render(obj, document.getElementById('mount-point'))