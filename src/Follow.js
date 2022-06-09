import React from 'react';
import {getHeaders} from './utils';

class Follow extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            followingId: null
        }
        //binding "this" --> used for all member functions
        this.toggleFollow = this.toggleFollow.bind(this);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
    }

    toggleFollow(ev) {
        if (this.state.followingId) {
            console.log('unfollow');
            this.unfollow();
        } else {
            console.log('follow');
            this.follow();
        }
    }

    follow() {
        const url = 'https://photo-app-annabel-3.herokuapp.com/api/following/';
        const postData = {
            user_id: this.props.userId,
        }
        console.log('create following');
        fetch(url, {
            headers: getHeaders(), 
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            //this needs to trigger post redraw
            console.log(data);
            this.setState({
                followingId: data.id
            })
        })
        
    }

    unfollow() {
        const url = 'https://photo-app-annabel-3.herokuapp.com/api/following/' + this.state.followingId;
   
        console.log('remove follow');
        fetch(url, {
            headers: getHeaders(), 
            method: 'DELETE',
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                followingId: null
            })
        })
    }

    render () {
        const followClass = this.state.followingId ? "unfollow": "follow";
        const ariachecked = this.state.followingId ? true : false;
        return (
            <button role="switch"
                className="follow" 
                aria-label="follow Button" 
                aria-checked={ariachecked}
                onClick={this.toggleFollow}>
                    {followClass}
            </button>
        ) 
    }
}

export default Follow;