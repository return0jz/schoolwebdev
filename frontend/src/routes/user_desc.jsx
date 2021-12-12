import react from 'react';
import './user_desc.scss';

class UserDesc extends react.Component {
  constructor() {
    super();
    this.state = {
      description: null
    }
  }
  onSubmit() {
    console.log("clicked");
    fetch('/api/user_desc', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: this.state.description
      })
    }).then(res => res.json())
    .then((data) => {
      console.log(data);
      setTimeout(() => {
        window.location.href = "/profile";
      }, 50)
    });
  }
  render() {
    return (
      <div id="user_desc">
        <input type='text' onChange={e => this.setState({description: e.target.value})}/>
        <div id="buttonWrap">
          <button className="submit" onClick={e => this.onSubmit() }> Submit </button>
        </div>
      </div>
    )
  }
}

export default UserDesc;