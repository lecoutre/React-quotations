import React from 'react';

// ---  exo4 array of messages ---
let quotes = [
    {message: "Elementary, my dear Watson", author: "Sherlock Holmes"},
    {message: 'I think therefore I am', author: "Rene Descartes"},
    {message: 'Life is like riding a bicycle. To keep your balance, you must keep moving', author: "Albert Einstein"},
    {message: "You talkin' to me?", author: "Travis Bickle"}
];

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: quotes,
            currIndex: 0
        };
    }

    handleNext() {
        if (this.state.currIndex === this.state.quotes.length - 1) {
            this.setState({currIndex: 0})
        } else {
            this.setState({currIndex: this.state.currIndex + 1})
        }
    }

    handlePrevious() {
        if (this.state.currIndex === 0) {
            this.setState({currIndex: this.state.quotes.length - 1})
        } else {
            this.setState({currIndex: this.state.currIndex - 1})
        }
    }

    render() {
        const buttonStyle = {marginLeft: "40px"};
        return (
            <div>
                <Quotation {...this.state.quotes[this.state.currIndex]}/>
                <hr/>
                <button style={buttonStyle} onClick={() => this.handlePrevious()}>previous</button>
                <button style={buttonStyle} onClick={() => this.handleNext()}>next</button>
            </div>
        )
    }
}

class Quotation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styleMessage = {color: 'red'}, styleAuthor = {color: 'green'};
        return (
            <div>
                <p>My quotations:</p>
                <p style={styleMessage}>{this.props.message} <span style={styleAuthor}>({this.props.author})</span></p>
            </div>
        );
    }
}

export default Root;