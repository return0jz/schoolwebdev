import React from 'react';
import './titlebar.css'

class Titlebar extends React.Component {
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
          <a href="">Browse</a>
          <a href="">Profile</a>
          <a href="">My Games</a>
          <a href="">My Positions</a>
        </nav>
      </header>
    )
  }
}

export default Titlebar;