import react from 'react'
import './home.scss'

class GameList extends react.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
        <main>
            <GameInfo />
        </main>
    );
  }
}

class GameInfo extends react.Component {
  render() {
    return(
      <main>
        <div class="gameInfo">
          <img src="/deliberateError"/>
          <div class="content">
            <div class="line">
              <h3> PLACEHOLDER vs. PLACEHOLDER </h3>
              <h4> Ruy Lopez </h4>
            </div>
            <p class="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed eget libero placerat, semper orci eu, convallis ante.  
              Cras rutrum ipsum neque, ac maximus purus accumsan sed.
            </p>
            <p> 1.e4 e5 2.Nf3 Nc6 3.Bb5 ...</p>
          </div>
        </div>
      </main>
    );
  }
};

export default GameList;