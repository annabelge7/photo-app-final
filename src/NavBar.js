import React from 'react';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    // componentDidMount() {
    //     console.log('Invoked immediately after the component is mounted (added to the DOM');
    // }

    render() {
        return (
            <nav>
                <h1>Photo App</h1>
                <ul>
                    <li><a href="/api">API Docs</a></li>
                    <li>{this.props.username}</li>
                    <li><a href="#">Sign out</a></li>
                </ul>
            </nav>
        )
    }
}
 
export default NavBar;
