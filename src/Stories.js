import React from 'react';
import {getHeaders} from './utils';

class Stories extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            stories: []
        }
        // initialization code here
        this.getStoriesFromServer()
    }

    getStoriesFromServer () {
        fetch('/api/stories', {
            headers: getHeaders()
        })  .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    stories: data
                })
            })
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <div className="stories">
                {
                    this.state.stories.map(story => {
                        return (
                            <div className = "story">
                            <p>{story.user.username}</p>
                            <img src={story.user.thumb_url} />
                            </div>
                        )
                    })
                }
            </div>
        );     
    }
}

export default Stories;