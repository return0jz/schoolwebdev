import React from 'react';
import "./signin.css";

class SignIn extends React.Component {
  render() {
    return (
      <div className="signIn">
        <h1> Log In: </h1>
        <input onChange={e => this.setState({username: e.target.value})} autoComplete="off" id="username" type="text" placeholder="Username" />
        <input onChange={e => this.setState({password: e.target.value})} autoComplete="off" id="password" type="password" placeholder="Password" />
        <button> Log In </button>
        <p> Haven't registered yet? <a href="/signup"> Click here </a>  </p>
      </div>
    );
  }
}

export default SignIn;