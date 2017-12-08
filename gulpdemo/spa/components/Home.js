import React, { Component } from 'react';
class Home extends Component {

    constructor(){
        super();
        this.state = {email: '', pwd: ''}
    }

    authenticate(){
        console.log(this.props);

        fetch('http://localhost:4000/authenticate', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ email: this.state.email, pwd: this.state.pwd })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.auth){
                    //Navigate to next page
                    this.props.history.push('/about')
                }
                else{
                    //Show up error Messsage
                    this.setState({errorMessage: 'Invalid User/PWd!!'})
                }
                // this.setState({ todos: data, todo:'' });
            })
    }
    captureEmail(event){
        this.setState({email: event.target.value})
    }
    capturePwd(event){
        this.setState({pwd: event.target.value})
    }
    
    render() {
        return (
            <div class="container">
            
                    <strong>{this.state.errorMessage}</strong>
                    <h2 class="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" onChange={this.captureEmail.bind(this)} value={this.state.email}id="inputEmail" class="form-control" placeholder="Email address" required autoFocus/>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" onChange={this.capturePwd.bind(this)} value={this.state.pwd} id="inputPassword" class="form-control" placeholder="Password" required/>
             
                    <button class="btn btn-lg btn-primary btn-block" onClick={this.authenticate.bind(this)}>Sign in</button>
          
            
                </div> 
        );
    }
}

export default Home;