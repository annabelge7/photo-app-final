import React from 'react';
import NavBar from './NavBar';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Profile from './Profile';
import {getHeaders} from './utils';

{/* TODO: Break up the HTML below into a series of React components. */}
class App extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            currentUser: {}
        };
        console.log('Component created');
        this.getProfile();
    }

    getProfile() {
        fetch('/api/profile', {
            headers: getHeaders()
        })  .then(response => response.json())
            .then(data => {
                // console.log(data);
                this.setState({
                    currentUser: data
                })
            })
    }

    render () {
        return (
            <div>

            <nav className="main-nav">
                {/* Navigation Links */}
                <NavBar username={this.state.currentUser.username} />
            </nav>

            <aside>
                <header>
                    <Profile username={this.state.currentUser.username} thumb_url = {this.state.currentUser.thumb_url}/>
                    {/* Profile Links */}
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        <Suggestions/>
                    </div>
                </div>
            </aside>

            <main className="content">
                    <Stories/>
                    {/* Stories */}
                    <Posts/>
                    {/* Posts */}
            </main>

            </div>
        );
    }
}

export default App;