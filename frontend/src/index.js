import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './index.scss';
import Titlebar from './titlebar.jsx';
import NotFoundPage from './routes/notfound.jsx';
import SignIn from './routes/signin.jsx';
import SignUp from './routes/signup.jsx';
import Profile from './routes/profile.jsx';
import GameList from './routes/home.jsx';
import UserDesc from './routes/user_desc.jsx';
import CreateGame from './routes/creategame';
import Game from './routes/game';
import OtherProfile from './routes/otherprofile';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isValidated: null,
    }
  }
  componentDidMount() {
    fetch("/api/validate", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(data => {
        if (data?.validateFailed === true) {
          this.setState({validateFailed: true});
        } else {
          this.setState({validateFailed: false});
        }
      });
  }
  render() {
    console.log("Website rendered.");
    if (this.state.validateFailed === false) {
      return (
        <Router>
          <Titlebar />
          <Switch>
            <Route exact path="/" component={GameList} /> 
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/user_desc" component={UserDesc} /> 
            <Route exact path="/postgame" component={CreateGame} />
            <Route exact path="/game/:id" component={Game} />
            <Route exact path="/otherprofiles/:username" component={OtherProfile} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      )
    } else if (this.state.validateFailed === true) {
        return (
          <Router>
            <Titlebar />
            <Switch>
              <Route exact path="/" component={SignIn} /> 
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/profile" component={SignIn} />
              <Route exact path="/user_desc" component={SignIn} /> 
              <Route exact path="/postgame" component={SignIn} />
              <Route exact path="/game/:id" component={SignIn} />
              <Route exact path="/otherprofiles/:username" component={SignIn} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
      )
    } else {
        return (
          <React.Fragment>
            <Titlebar /> 
            <p style={{textAlign: "center"}}> Loading... :D </p>
          </React.Fragment>
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

