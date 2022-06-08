import React from 'react';
import {getHeaders} from './utils';

class AddComment extends React.Component {  

    constructor(props) {
        super(props);
        //binding "this" --> used for all member functions
        this.addComment = this.addComment.bind(this);
    }

    addComment() {
        const url = 'api/comments';
        console.log(this.props.postId)
        console.log(this.props.newText.current.value)
        const postData = {
            post_id: this.props.postId,
            text: this.props.newText.current.value
        }
        console.log('create ');
        fetch(url, {
            headers: getHeaders(), 
            method: 'POST',
            body: JSON.stringify(postData)
        }).then(response => response.json())
        .then(data => {
            //this needs to trigger post redraw
            console.log(data);
            this.props.newText.current.value = '';
            this.props.refreshPost();
        })
        
    }
    render () {
        return (
            <button
                className="addComment" 
                onClick={this.addComment}>
                    Post                      
            </button>
        ) 
    }
}

export default AddComment;