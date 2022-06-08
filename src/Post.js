import React from 'react';
import LikeButton from './LikeButton';
import AddComment from './AddComment';
import BookmarkButton from './BookmarkButton';
import {getHeaders} from './utils';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            post: props.model,
            text: null
        }
        this.focusTextinput = this.focusTextinput.bind(this);
        this.refreshPostDataFromServer = this.refreshPostDataFromServer.bind(this);
    }

    componentDidMount() {

    }

    focusTextinput(){
        this.textInput.current.focus();
    }

    refreshPostDataFromServer() {
        //re-fetch the post
        const url = '/api/posts/' + this.state.post.id;
        fetch(url, {
            headers: getHeaders () 
        }) .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                post: data
            })
        })
    }
    
    render () {
        const post = this.state.post;
        const i = post.comments.length - 1;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div className="post-icons"> 
                        <div id="left-post-icons">
                            <LikeButton 
                            likeId ={post.current_user_like_id}
                            postId = {post.id}
                            refreshPost =  {this.refreshPostDataFromServer}/>
                            <button><i className="far fa-comment" ></i></button>
                            <button><i className="far fa-paper-plane" ></i></button>
                        </div>
                        <div id="right-post-icons">
                            <BookmarkButton
                            bookmarkId ={post.current_user_bookmark_id}
                            postId = {post.id}
                            refreshPost =  {this.refreshPostDataFromServer}/>
                        </div>
                    </div>
                    <p> <strong>{post.likes.length} likes </strong></p>

                    <div id="comment-section">
                        <p> <strong>{ post.user.username }</strong> { post.caption }...<a>more</a></p>
                        <p>{ post.display_time }</p>
                        <p><a href="">View all {post.comments.length } comments</a></p>
                        <p><strong> {post.comments[i].user.username}</strong> {post.comments[i].text} </p>
                        <p>{post.comments[i].display_time }</p>

                    </div>

                    <div id = "add-comment-section">
                    <div className="comment-section-left">
                        <i className="fa-regular fa-face-smile"></i>
                        <input id= {"comment" - post.id} ref = {this.textInput} type ="text" placeholder = "Add a comment..." ></input>
                    </div>

                    <div className="comment-section-right">
                        <AddComment 
                        postId = {post.id}
                        refreshPost =  {this.refreshPostDataFromServer}
                        newText = {this.textInput} 
                        onClick = {this.focusTextinput}  />
                    </div>

                    </div>


                </div>

                
            </section> 
        );     
    }
}

export default Post;