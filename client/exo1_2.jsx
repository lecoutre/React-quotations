import React from 'react';

// ---  exos 1 et 2 Root ---
let quote = {message:"Elementary, my dear Watson", author:"Sherlock Holmes"}

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = quote;
    }

    render() {
        const styleText = {color: 'red'};
        return (
            <div style={styleText}>
                <h1>What I have to say: {this.state.message} ({this.state.author})</h1>
            </div>
        );
    }
}

export default Root;
