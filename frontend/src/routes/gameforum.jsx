import React from 'react';
import react from 'react';
import './gameforum.scss';
import { Chessboard } from 'react-chessboard';

class GameForum extends react.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
    <React.Fragment >
    <main>
        <div class="left">
        <h2> PLACEHOLDER vs PLACEHOLDER</h2>
        <h3> PLACEHOLDER: LOCATION </h3>
        <Chessboard id="game" /> 
        <div class="buttons"> 
            <div class="leftB">
              <button id="b1"> {'<'}- </button>
              <button id="b2"> -{'>'} </button>
            </div>
            <div class="rightB"> 
            <button> Get PGN </button>
            <button> Get FEN </button>
            </div>
        </div>
        <p> Description: TEMPLATE
        </p>
        </div>
        <div class="right">

        <div class="comment lvl0">
            <div class="square"> </div>
            <div class="karma">
            <button> ↑ </button>
            <p> 50 </p>
            <button> ↓ </button>
            </div>
            <p class="user"> PLACEHOLDER USER: </p>
            <p class="content"> PLACEHOLDER COMMENT </p>
        </div>

        <div class="comment lvl1">
            <div class="square"> </div>
            <div class="karma">
            <button> ↑ </button>
            <p> 50 </p>
            <button> ↓ </button>
            </div>
            <p class="user"> PLACEHOLDER USER: </p>
            <p class="content"> PLACEHOLDER COMMENT: </p>
        </div>

        <div class="comment lvl1">
            <div class="square"> </div>
            <div class="karma">
            <button> ↑ </button>
            <p> 50 </p>
            <button> ↓ </button>
            </div>
            <p class="user"> PLACEHOLDER USER </p>
            <p class="content"> PLACEHOLDER COMMENT: </p>
        </div>

        <div class="comment lvl2">
            <div class="square"> </div>
            <div class="karma">
            <button> ↑ </button>
            <p> 50 </p>
            <button> ↓ </button>
            </div>
            <p class="user"> PLACEHOLDER USER </p>
            <p class="content"> PLACEHOLDER COMMENT </p>
        </div>

        <div class="comment lvl2">
            <div class="square"> </div>
            <div class="karma">
            <button> ↑ </button>
            <p> 50 </p>
            <button> ↓ </button>
            </div>
            <p class="user"> PLACEHOLDER USER </p>
            <p class="content"> PLACEHOLDER COMMENT </p>
        </div>

        <div class="comment lvl2">
            <div class="square"> </div>
            <div class="karma">
            <button> ↑ </button>
            <p> 50 </p>
            <button> ↓ </button>
            </div>
            <p class="user"> PLACEHOLDER USER </p>
            <p class="content"> PLACEHOLDER COMMENT </p>
        </div>
        </div>
    </main>
    </React.Fragment>
   
    );
  }
}

export default GameForum;