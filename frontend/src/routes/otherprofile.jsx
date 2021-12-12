import react from 'react'
import NotFoundPage from './notfound';
import './otherprofile.scss'

class OtherProfile extends react.Component {
  constructor() {
    super();
    this.state = {
        username: "",
        description: "",
        isGood: ""
    };
  }
  componentDidMount() {
     fetch("/api/otherprofile", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.props.match.params.username
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success === "false") {
            this.setState({isGood: "false"}); // lel again
        } else {
            this.setState({
                isGood: "true",
                username: data.username,
                description: data.description
            });
        }
      });
  }
  render() {
    if (this.state.isGood === "true") {
        return(
            <div id="otherProfile">
                <div className="leftColumn">
                <div className="square"> 
                    <h2>{this.state.username}</h2>
                </div>
                </div>
                <div className="rightColumn">
                <p>{this.state.description}</p>
                </div>
            </div> 
        );
    } else if (this.state.isGood === "false") {
        return (<NotFoundPage />);
    } else {
        return (<react.Fragment> </react.Fragment>)
    }
  }
}

export default OtherProfile;