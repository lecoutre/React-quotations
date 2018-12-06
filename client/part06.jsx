import React from 'react';

// ---  Render a list of quotes ---
let quotations = [
    {message: "Elementary, my dear Watson", author: "Sherlock Holmes"},
    {message: 'I think therefore I am', author: "Rene Descartes"},
    {message: 'Life is like riding a bicycle. To keep your balance, you must keep moving', author: "Albert Einstein"},
    {message: "You talkin' to me?", author: "Travis Bickle"}
];

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: quotations,
            newMessage: "",
            newAuthor: "",
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newMessage) return;
        this.setState({
            quotes: this.state.quotes.concat({
                message: this.state.newMessage,
                author: this.state.newAuthor === "" ? "anonymous" : this.state.newAuthor
            })
        })
    }

    handleNewQuote(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    removeQuote(index) {
        this.setState({quotes: this.state.quotes.filter((q, i) => i !== index)})
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.quotes.map(
                        (q, i) => <Quotation key={i}
                                             {...q}
                                             removeQuote={() => this.removeQuote(i)}/>)
                    }
                </ul>
                <hr/>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="newMessage">new quote</label>
                    <textarea id="newMessage" placeholder="enter your message"
                              onChange={e => this.handleNewQuote(e)}/>
                    <br/>
                    <label htmlFor="newAuthor">author</label>
                    <input id="newAuthor" placeholder="author name"
                           onChange={e => this.handleNewQuote(e)}/>
                    <input type={"submit"} value={"OK"}/>
                </form>
            </div>
        )
    }
}

class Quotation extends React.Component {
    render() {
        const styleMessage = {color: 'red'}, styleAuthor = {color: 'green'};
        return (
            <li onClick={this.props.removeQuote}>
                <span style={styleMessage}> {this.props.message} </span>
                <span style={styleAuthor}> ({this.props.author})</span>
            </li>
        );
    }
}

export default Root;