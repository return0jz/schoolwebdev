import React from 'react';
import react from 'react';
import './signup.css';

class SignUp extends react.Component {
  constructor() {
    super();
    this.state = {
      no_error: true
    };
  }
  onSubmit(e) {
    if ((this.state.username?.length >= 3) // dank validation
        && (this.state.username?.length <= 20) 
        && (this.state.password?.length >= 4)
        && (this.state.password?.length<= 30)
        && (/\s/.test(this.state.username.trim()) == false)
        && (/\s/.test(this.state.password.trim()) == false)
        && (/^[a-zA-Z0-9_]*$/.test(this.state.username.trim()))
        && (/^[a-zA-Z0-9_]*$/.test(this.state.password.trim()))
      ) {
      this.setState({no_error: true});
    } else {
      this.setState({no_error: false});
    }
  }
  render() {
    if (this.state.no_error) {
      return (
        <div className="signUp">
          <h1> Sign up: </h1>
          <input onChange={e => this.setState({username: e.target.value})} autoComplete="off" id="username" type="text" placeholder="Username" />
          <input onChange={e => this.setState({password: e.target.value})} autoComplete="off" id="password" type="password" placeholder="Password" />
          <button onClick={e => this.onSubmit(e)}> Register  </button>
        </div>
      );
    }
    else { // gg code reuse 100
      return (
        <div className="signUp">
          <h1> Sign up: </h1>
          <input onChange={e => this.setState({username: e.target.value})} autoComplete="off" id="username" type="text" placeholder="Username" />
          <input onChange={e => this.setState({password: e.target.value})} autoComplete="off" id="password" type="password" placeholder="Password" />
          <button onClick={e => this.onSubmit(e)}> Register  </button>
          <div className="error">
            <p> Sorry, your username and password must follow these guidelines: </p>
            <ul>
              <li> Your password is minimum 4 characters and max 30 characters</li>
              <li> Your username is minimum 3 characters and max 20 characters </li>
              <li> Only letters, numbers, and underscores are accepted (no spaces) </li>
            </ul>
          </div>
        </div>
      )
    }
  }
}

export default SignUp;