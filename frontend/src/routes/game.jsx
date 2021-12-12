import React from 'react';
import './game.scss';
import NotFound from './notfound';
import { Chessboard } from 'react-chessboard';
import * as Chess from 'chess.js';
import ReactTooltip from 'react-tooltip';
import Clipboard from 'react-clipboard.js';

class Game extends React.Component { // incosistent file naming
  constructor() {
    super();
    this.state = {
      title: "",
      birth: "",
      desc: "",
      game: "",
      username: "",
      isGood: "",
      fenMoves: [],
      moveIndex: 0,
    }
  }
  componentDidMount() {
    fetch("/api/game", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.props.match.params.id
      })
    }).then(response => response.json())
      .then(data => {
        if (data?.success === false) {
          this.setState({isGood: "false"});
          console.log("dead");
        } else {
          console.log(data);
          this.setState({
            isGood: "true",
            birth: data.birth,
            desc: data.description,
            game: data.game,
            username: data.username,
            title: data.title
          }); // shit solution

          // Yeet stackoverflow
          // Chess.js doesn't support converting PGN to list of FENS (shit library)
          // Converts PGN -> game representation -> internal rep of moves -> loop through moves to convert FEN
          let fens = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"];
          let chessObj = new Chess();
          var newGame = new Chess();
          chessObj.load_pgn(this.state.game);
          let moves = chessObj.history();
          for (let i = 0; i < moves.length; i++) {
            newGame.move(moves[i]);
            fens.push(newGame.fen());
          }
          console.log(fens);
          this.setState({fenMoves: fens});
        }
    });
  }
  render() {
    if (this.state.isGood === "true") {
      return (
        <div id="game">
          <h1 id="title"> {this.state.title} </h1>
          <p id="createdBy">Created on {this.state.birth} by <a href={`/otherprofiles/${this.state.username}`}> {this.state.username} </a> </p>
          <p id="desc"> {this.state.desc} </p>
          <Chessboard position={this.state.fenMoves[this.state.moveIndex]} boardWidth={400} arePiecesDraggable={false} id="board"/>
          <div id="moveButtons">
            <button onClick={e => this.setState({moveIndex: 0})}><i className="arrow left"></i><i className="arrow left"></i></button>
            <button onClick={e => {
              if (this.state.moveIndex > 0) {
                this.setState({moveIndex: this.state.moveIndex-1})
              }
            }}><i className="arrow left"></i></button>
            <button onClick={e => {
              if (this.state.moveIndex < (this.state.fenMoves.length - 1)) {
                this.setState({moveIndex: this.state.moveIndex+1})
              }
            }}><i className="arrow right"></i></button>
            <button onClick={e => this.setState({moveIndex: this.state.fenMoves.length-1})}><i className="arrow right"></i><i className="arrow right"></i></button>
          </div>
          <div id="otherButtons">
            <Clipboard data-clipboard-text={this.state.game}>
              Copy PGN
            </Clipboard>
            <Clipboard data-clipboard-text={this.state.fenMoves[this.state.moveIndex]}>
              Copy FEN
            </Clipboard>
          </div>
          <div id="final">
            <button onClick={e => {
              fetch('https://lichess.org/api/import', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `pgn=${this.state.game}`
              }).then(response => response.json())
              .then(data => {
                window.setTimeout(() => {
                  window.location.href = data["url"];
                }, 50)
              });
            }}>Open in Lichess</button>
          </div>
        </div>

      )
    } else if (this.state.isGood === "false") {
        return <NotFound />
    } else {
        return (<React.Fragment> </React.Fragment>);
    }
  }
}

export default Game;