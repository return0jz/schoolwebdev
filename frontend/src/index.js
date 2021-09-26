import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <header>
        <div class="title">
          <h1> chessit </h1>
        </div>

        <div class="search">
          <input type="text" placeholder="Search..."/>
        </div>

        <nav>
          <a class="curr" href="index.html">Browse</a>
          <a href="profile.html">Profile</a>
          <a href="#">My Games</a>
          <a href="#">My Positions</a>
        </nav>
      </header>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

