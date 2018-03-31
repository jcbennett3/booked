import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event){
    this.setState({username: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  resetFormInputs(){
    document.getElementById('usernameInput').value = '';
    document.getElementById('passwordInput').value = '';
  }

  handleSubmit(event){
    event.preventDefault();
    let usernameInput = document.getElementById('usernameInput');
    let passwordInput = document.getElementById('passwordInput');
    usernameInput.classList.remove("error");
    passwordInput.classList.remove("error");
    let username = this.state.username;
    let password = this.state.password;
    if(username === 'admin' && password === 'password'){
      alert('Okie Dokie')
    } else {
      if(username !== 'admin'){
        usernameInput.classList.add("error");
      }
      if(password !== 'password'){
        passwordInput.classList.add("error");
      }
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="form form-horizontal text-center" id="login-form">
        <div className="LoginForm-errors"></div>
        <div className="jumbotron">
          <div className="form-group">
            <input type="text" className="form-control" id="usernameInput" placeholder="Username" value={this.state.username} onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <input type="text" class="form-control" id="passwordInput" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </div>
          <br/>
          <div className="form-actions">
            <input type="submit" className="btn btn-primary btn-block"/>
          </div>
        </div>
      </form>
    )
  }

}

export default LoginForm;
