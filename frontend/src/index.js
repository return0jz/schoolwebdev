import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Titlebar from './titlebar.jsx';
import './index.css';
import Home from './routes/home.jsx';
import Profile from './routes/profile.jsx'
import NotFoundPage from './routes/notfound.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Titlebar />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} /> 
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

