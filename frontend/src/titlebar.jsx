import React from 'react';
import './titlebar.scss'

class Titlebar extends React.Component {
  render() {
    return (
      <header>
        <div className="title">
          <a href="/"> chessit </a>
        </div>

        <div className="search">
          <input type="text" placeholder="Search..."/>
        </div>

        <nav>
          <a href="/">BROWSE</a>
          <a href="/profile">PROFILE</a>
          <a href="/mygames">MY GAME LIST</a>
        </nav>
      </header>
    )
  }
}

export default Titlebar;