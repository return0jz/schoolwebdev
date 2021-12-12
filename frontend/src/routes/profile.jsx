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
        console.log(data);
        this.setState(
          {
            username: data.username,
            description: data.description
          }
        );
      });
  }
  logout(e) {
    fetch("/api/logout", {
      method: 'post'
    }).then(() => {
      setTimeout(() => window.location.href = '/', 500);
    });
  }
  render() {
    return(
      <main>
        <div className="leftColumn">
          <div className="square"> 
            <h2>{this.state.username}</h2>
          </div>
          <div className="butts">
            <button onClick={e => this.logout(e)}> Logout </button>
            <button onClick={e => window.location.href = '/user_desc'}> Edit description </button>
          </div>
        </div>
        <div className="rightColumn">
          <p>{this.state.description}</p>
        </div>
      </main> 
    );
  }
}

export default Profile;