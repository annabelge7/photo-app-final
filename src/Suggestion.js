import React from 'react';

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            suggestion: this.props.model
        }
    }
    
    render () {
        const suggestion = this.state.suggestion;
        if (!suggestion) {
            return (
                <div></div>  
            );
        }
        return (
        <div className="suggestion-item">
            
            <div className="suggestion-text">
            <img src={suggestion.thumb_url} className="small-profile-pic" alt = ""/>
                <div>
                    <p>{suggestion.username}</p>
                    <p>suggested for you</p>
                </div >

            </div>
            <div className="follow">
                    <a href="">follow</a>
             </div>
        

        </div>
        );     
    }
}

export default Suggestion;