import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import ForgotCredentials from './ForgotCredentials';

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="text-center text-primary">Please Log In to Continue</h5>
        </div>
        <div className="card-body">
          <LoginForm/>
        </div>
        <div className="card-footer text-center">
          <ForgotCredentials/>
        </div>
      </div>

    );
  }
}

export default App;
