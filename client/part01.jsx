import React from 'react';

// ---  Managing a component state ---
let quote = {message: "Elementary, my dear Watson", author: "Sherlock Holmes"};

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = quote;
    }

    render() {
        const styleText = {color: 'red'};
        return (
            <div>
                <p>My quotations:</p>
                <p style={styleText}>{this.state.message} ({this.state.author})</p>
            </div>
        );
    }
}

export default Root;
