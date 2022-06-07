import React from 'react';
import {getHeaders} from './utils';

class LikeButton extends React.Component {  

    constructor(props) {
        super(props);
        //binding "this" --> used for all member functions
        this.toggleLike = this.toggleLike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
    }

    toggleLike(ev) {
        if (this.props.likeId) {
            console.log('unlike');
            this.unlike();
        } else {
            console.log('like');
            this.like();
        }
    }

    like() {
        const url = 'api/posts/likes/';
        console.log('create like');
        fetch(url, {
            headers: getHeaders(), 
            method: 'POST'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        
        // issue fetch request and then afterwards requery for the post:
        // this.props.requeryPost();
    }

    unlike() {
        const url = 'api/posts/likes/' + this.props.likeId;
        console.log('remove like');
        fetch(url, {
            headers: getHeaders(), 
            method: 'DELETE'
        }).then(response => response.json())
        .then(data => {
            console.log(data);
        })
        
        // issue fetch request and then afterwards requery for the post:
        // this.props.requeryPost();
    }

    render () {
        const likeId = this.props.likeId;
        return (
            <button role="switch"
                className="like" 
                aria-label="Like Button" 
                aria-checked={likeId ? true : false}
                onClick={this.toggleLike}>
                <i className={likeId ? 'fas fa-heart' : 'far fa-heart'}></i>                        
            </button>
        ) 
    }
}

export default LikeButton;