import React from 'react';
import LikeButton from './LikeButton';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model
        }
    }
    
    render () {
        const post = this.state.post;
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
                            <LikeButton likeId ={post.current_user_like_id} />
                            <button><i className="far fa-comment" ></i></button>
                            <button><i className="far fa-paper-plane" ></i></button>
                        </div>
                        <div id="right-post-icons">
                            <button><i className="far fa-bookmark"></i></button>
                        </div>
                    </div>
                    <p> <strong>{post.likes.length} likes </strong></p>

                    <div id="comment-section">
                        <p> <strong>{ post.user.username }</strong> { post.caption }...<a>more</a></p>
                        <p>{ post.display_time }</p>
                        <p><a href="">View all {post.comments.length } comments</a></p>
                        <p><strong> {post.comments[0].user.username}</strong> {post.comments[0].text} </p>
                        <p>{post.comments[0].display_time }</p>

                    </div>

                    <div id = "add-comment-section">
                    <div className="comment-section-left">
                        <i className="fa-regular fa-face-smile"></i>
                        <button><p>Add a comment...</p></button>
                    </div>

                    <div className="comment-section-right">
                        <a href="">Post</a>
                    </div>

                    </div>


                </div>

                
            </section> 
        );     
    }
}

export default Post;