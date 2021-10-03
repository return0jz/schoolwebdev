import React from 'react';
import "./signin.css";

class SignIn extends React.Component {
  render() {
    return (
      <div className="signIn">
        <h1> Log In: </h1>
        <input autoComplete="off" id="username" type="text" placeholder="Username" />
        <input autoComplete="off" id="password" type="text" placeholder="Password" />
        <button> Log In </button>

        <p> Haven't registered yet? <a href="/signup"> Click here </a>  </p>
      </div>
    );
  }
}

export default SignIn;