import React from 'react';
import {getHeaders} from './utils';

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            suggestion: this.props.model,
            followingId: null
        }

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
        const suggestion = this.state.suggestion;
        const url = 'https://photo-app-annabel-3.herokuapp.com/api/following/';
        const postData = {
            user_id : suggestion.id
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
        const suggestion = this.state.suggestion;
        const followClass = this.state.followingId ? "unfollow": "follow";
        const ariachecked = this.state.followingId ? true : false;
        if (!suggestion) {
            return (
                <div></div>  
            );
        }
        return (
        <div className="suggestion-item">
            
            <div className="suggestion-text">
            <img src={suggestion.thumb_url} className="small-profile-pic" alt = ""/>
                <div className = "small-text-suggestion">
                    <p>{suggestion.username}</p>
                    <p>suggested for you</p>
                </div >

            </div>
            <div className="follow">
            <button role="switch"
                className="unfollow" 
                aria-label="follow Button" 
                aria-checked={ariachecked}
                onClick={this.toggleFollow}>
                    {followClass}
            </button>
             </div>
        

        </div>
        );     
    }
}

export default Suggestion;