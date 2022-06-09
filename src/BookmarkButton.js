import React from 'react';
import {getHeaders} from './utils';

class BookmarkButton extends React.Component {  

    constructor(props) {
        super(props);
        //binding "this" --> used for all member functions
        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
    }

    toggleBookmark(ev) {
        if (this.props.bookmarkId) {
            console.log('unbookmark');
            this.unbookmark();
        } else {
            console.log('bookmark');
            this.bookmark();
        }
    }

    bookmark() {
        const url = 'https://photo-app-annabel-3.herokuapp.com/api/bookmarks';
        const postData = {
            post_id: this.props.postId
        }
        console.log('create bookmark');
        fetch(url, {
            headers: getHeaders(), 
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            //this needs to trigger post redraw
            console.log(data);
            this.props.refreshPost();
        })
        
    }

    unbookmark() {
        const url = 'api/bookmarks/' + this.props.bookmarkId;
        const postData = {
            post_id: this.props.postId
        }
        console.log('remove bookmark');
        fetch(url, {
            headers: getHeaders(), 
            method: 'DELETE',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            //this needs to trigger post redraw
            console.log(data);
            this.props.refreshPost();
        })
        // issue fetch request and then afterwards requery for the post:
    }

    render () {
        const bookmarkId = this.props.bookmarkId;
        return (
            <button role="switch"
                className="bookmark" 
                aria-label="Bookmark Button" 
                aria-checked={bookmarkId ? true : false}
                onClick={this.toggleBookmark}>
                <i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i>                        
            </button>
        ) 
    }
}

export default BookmarkButton;