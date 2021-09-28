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
          <a href="/">Browse</a>
          <a href="/profile">Profile</a>
          <a href="/mygames">My Games</a>
          <a href="/mypositions">My Positions</a>
        </nav>
      </header>
    )
  }
}

export default Titlebar;