import React from 'react';
import ReactDOM from 'react-dom';
import Titlebar from './titlebar.jsx';

import './index.css';

class App extends React.Component {
  render() {
    return (
      <Titlebar />
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

