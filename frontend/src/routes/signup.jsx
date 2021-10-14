import react from 'react';
import './signup.scss';

class SignUp extends react.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: "none"
    };
  }
  onSubmit(e) {
    let self = this;
    if ((this.state.username?.length >= 3) // dank validation
        && (this.state.username?.length <= 20) 
        && (this.state.password?.length >= 4)
        && (this.state.password?.length<= 30)
        && (/\s/.test(this.state.username.trim()) === false)
        && (/\s/.test(this.state.password.trim()) === false)
        && (/^[a-zA-Z0-9_]*$/.test(this.state.username.trim()))
        && (/^[a-zA-Z0-9_]*$/.test(this.state.password.trim()))
      ) {
      fetch("/api/signup", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: self.state.username,
          password: self.state.password,
        })
      })
      .then(response => response.json())
      .then(data => self.setState({error: data.type}))
      .catch(error => {
        console.log("Failure to get response")
      });
    } else {
      self.setState({error: "clientval"});
    }
  }
  render() {
    return (
      <div className="signUp">
        <h1> Sign up: </h1>
        <input onChange={e => this.setState({username: e.target.value})} autoComplete="off" id="username" type="text" placeholder="Username" />
        <input onChange={e => this.setState({password: e.target.value})} autoComplete="off" id="password" type="password" placeholder="Password" />
        <button onClick={e => this.onSubmit(e)}> Register  </button>
        <SignUpError type={this.state.error} />
      </div>
    )
  }
}

class SignUpError extends react.Component { // TODO: Might be better to use HTTP status instead of json strings, but I guess it's okay.
  render() {
    if (this.props.type === "clientval") {
      return (
        <div className="error">
          <p> Sorry, your username and password must follow these guidelines: </p>
          <ul>
            <li> Your password is minimum 4 characters and max 30 characters</li>
            <li> Your username is minimum 3 characters and max 20 characters </li>
            <li> Only letters, numbers, and underscores are accepted (no spaces) </li>
          </ul>
        </div>
      )
    }
    else if (this.props.type === "exists") {
      return (
        <div className="error">
          <p> Sorry, that username already exists </p>
        </div>
      )
    } else if (this.props.type === "serverval") {
      return (
        <div className="error">
          <p> Server-side validation failed </p>
        </div>
      )
    } else if (this.props.type === "success") {
        setTimeout(() => window.location.href = "/signin", 1000);
        return (<p className="success"> Success! Redirecting to sign in...</p>);
    }
    else {
      return (<react.Fragment> </react.Fragment>);
    }
  }
}

export default SignUp;