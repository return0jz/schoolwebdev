import react from 'react'
import './profile.scss'

class Profile extends react.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
     fetch("/api/profile", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
      .then(data => {
        this.setState({username: data.username});
      });
  }
  logout(e) {
    fetch("/api/logout", {
      method: 'post'
    }).then(() => {
      setTimeout(() => window.location.href = "/", 500);
    });
  }
  render() {
    return(
      <main>
        <div className = "left">
          <div className="square"> 
            <h2>{this.state.username}</h2>
          </div>
          <div className="butts">
            <button onClick={e => this.logout(e)}> Logout </button>
            <button> Edit description </button>
          </div>
        </div>
        <p> Description: Template </p>
      </main> 
    );
  }
}

export default Profile;