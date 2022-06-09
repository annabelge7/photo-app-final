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
        fetch('https://photo-app-annabel-3.herokuapp.com/api/stories', {
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
                            <div  key={'story-' + story.id} className = "story">
                            <img className = "storypic" src={story.user.thumb_url} />
                            <p>{story.user.username}</p>
                            </div>
                        )
                    })
                }
            </div>
        );     
    }
}

export default Stories;