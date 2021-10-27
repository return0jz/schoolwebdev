import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Titlebar from './titlebar.jsx';
import './index.scss';
import NotFoundPage from './routes/notfound.jsx';
import SignIn from './routes/signin.jsx';
import SignUp from './routes/signup.jsx';
import Profile from './routes/profile.jsx';
import GameList from './routes/home.jsx';
import GameForum from './routes/gameforum.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isValidated: false,
    }
  }
  render() {
    let self = this;
    fetch("/api/validate", {
      method: 'post',
    }).then(res => res.json())
      .then(data => {
        if (data) {
          self.state.isValidated = data.validateFailed === false;
        }
      });

    if (this.state.isValidated) {
      console.log("User is validated!"); // Debug
      return (
        <Router>
          <Titlebar />
          <Switch>
            <Route exact path="/" component={GameList} /> 
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/mygames" component={GameList} />
            <Route exact path="/gameforumtemplate" component={GameForum} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      )
    } else {
      console.log("User isn't validated!");
      return (
        <Router>
          <Titlebar />
          <Switch>
            <Route exact path="/" component={SignIn} /> 
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={SignIn} />
            <Route exact path="/mygames" component={SignIn} />
            <Route exact path="/gameforumtemplate" component={SignIn} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      )
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

