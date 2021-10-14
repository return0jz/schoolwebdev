import react from 'react'
import './profile.scss'

class Profile extends react.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return(
      <main>
        <div class="square"> 
          <h2> Username and Karma </h2>
        </div>
        <p> Description: Template
        </p>

      </main> 
    );
  }
}

export default Profile;