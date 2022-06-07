import React from 'react';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        console.log(props);
        // initialization code here
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

     render () {
        return (
            <div id = "profile" >
                <img className = "profile-pic" src= {this.props.thumb_url}></img>
                <h1>{this.props.username}</h1>
            </div>
        );     
    }
}

export default Profile;