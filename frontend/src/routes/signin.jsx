import React from 'react';
import "./signin.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    fetch('/api/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then(response => response.json())
      .then(data => {
        this.setState({error: data?.error})
      })
      .catch(err => {
        console.log(`Failure to post request: ${err}`);
      })
  }

  render() {
    return (
      <div className="signIn">
        <h1> Log In: </h1>
        <input onChange={e => this.setState({username: e.target.value})} autoComplete="off" id="username" type="text" placeholder="Username" />
        <input onChange={e => this.setState({password: e.target.value})} autoComplete="off" id="password" type="password" placeholder="Password" />
        <button onClick={this.onSubmit}> Log In </button>
        <SignInError error={this.state.error}/> 

        <p> Haven't registered yet? <a href="/signup"> Click here </a>  </p>
      </div>
    );
  }
}

class SignInError extends React.Component {
  render() {
    if (this.props.error === "true") {
      return(
        <div className = 'signInError'>
          <p> Failed to log in successfully. Check your username or password again. </p>
        </div>
      )
    } else if (this.props.error === "false") {
      setTimeout(() => window.location.href = "/profile", 1000);
      return(
        <div className='signInError'>
          <p class="success"> Successfully logged in! Redirecting to profile...</p>
        </div>
      )
    }
    else {
      return (<React.Fragment></React.Fragment>);
    }
  }
}

export default SignIn;