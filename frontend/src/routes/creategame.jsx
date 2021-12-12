import * as Chess from 'chess.js';
import React from 'react';
import './creategame.scss';

class CreateGame extends React.Component { // incosistent file naming
  constructor() {
    super();
    this.state = {
      title: "",
      desc: "",
      game: "",
      error: ""
    }
  }

  onSubmit() {
    let chessObj = new Chess();
    let pgnRes = chessObj.load_pgn(this.state.game);
    if ((this.state.desc.length <= 300) && (this.state.title.length <= 50) && (this.state.title.length >= 3) && (this.state.game.length <= 5000) && pgnRes) {
      this.setState({error: ""});
      fetch('/api/creategame', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: this.state.desc,
          title: this.state.title,
          game: this.state.game
        })
      }).then(re => re.json())
      .then(data => {
        setTimeout(() => {
          window.location.href = `/game/${data.id}`;
        }, 100)
      });
    } else {
      this.setState({error: "Invalid input: Description length must not exceed 300 characters, title 100 characters and more than 3, and game PGN 1000 characters. Must also be valid PGN"});
    }
  }

  render() {
    return(
      <div id="createGame">
        <h1> Post your game </h1>

        <p> Title: </p>
        <input onChange={e => this.setState({title: e.target.value})} type="text"/>

        <p> Description: </p>

        <textarea onChange={e => this.setState({desc: e.target.value})}/>

        <p> Game PGN: </p>
        <textarea onChange={e => this.setState({game: e.target.value})}/>
        <button onClick={e => this.onSubmit(e)}> Submit </button>
        <p id="createError"> {this.state.error} </p>
      </div>
    )
  }
}

export default CreateGame;