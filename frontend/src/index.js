import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Titlebar from './titlebar.jsx';
import './index.css';
import NotFoundPage from './routes/notfound.jsx';
import SignIn from './routes/signin.jsx';
import SignUp from './routes/signup.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Titlebar />
        <Switch>
          <Route exact path="/" component={SignIn} /> 
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

