import React from 'react';
import {getHeaders} from './utils';

class Profile extends React.Component {
  
    constructor(props) {
        super(props);
        // this.state = {
        // }
        // initialization code here
        // this.getProfileFromServer()
    }

    // getProfileFromServer () {
    //     fetch('/api/profile', {
    //         headers: getHeaders()
    //     })  .then(response => response.json())
    //         .then(data => {
    //             // console.log(data);
    //             this.setState({
    //                 profile: data
    //             })
    //         })
    // }

    componentDidMount() {
        // fetch posts and then set the state...
    }

     render () {
        return (
            <div id = "profile" >
                <img className ="profile-pic" src= {this.props.thumb_url}></img>
                <h1 className ="profile-text"> {this.props.username}</h1>
            </div>
        );     
    }
}

export default Profile;