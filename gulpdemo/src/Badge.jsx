var Badge = React.createClass({
    getInitialState: function(){
        console.log('Set Initial State')
        return {count: 0};
    },

    incrementCount: function(){
        console.log('click event captured..')
        var newcount = this.state.count + 2
        this.setState({count : newcount})
    },

    render: function(){
        return (
            <div>
                <button className="btn btn-primary" type="button" onClick={this.incrementCount}>
                {this.props.caption} <span className="badge">{this.state.count}</span>
              </button>
            </div>
            
            
        )
    }
})

module.exports = Badge