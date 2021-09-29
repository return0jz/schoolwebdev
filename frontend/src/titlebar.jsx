import React from 'react';
import './titlebar.css'

class Titlebar extends React.Component {
  render() {
    return (
      <header>
        <div className="title">
          <h1> chessit </h1>
        </div>

        <div className="search">
          <input type="text" placeholder="Search..."/>
        </div>

        <nav>
          <a href="/">BROWSE</a>
          <a href="/profile">PROFILE</a>
          <a href="/mygames">MY GAMES</a>
          <a href="/signin">SIGN IN</a>
        </nav>
      </header>
    )
  }
}

export default Titlebar;