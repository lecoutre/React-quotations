import React from 'react';

// ---  exo5.1 and 5.2 ---
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
            quotations: quotations,
            currIndex: 0
        };
    }

    handleIndex(n) {
        const x = this.state.currIndex + n;
        if (x >= this.state.quotations.length) this.setState({currIndex: 0});
        else if (x <= 0) this.setState({currIndex: this.state.quotations.length - 1});
        else this.setState({currIndex: x});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!e.target.newMessage.value) return;
        this.setState({
            quotations: this.state.quotations.concat({
                message: e.target.newMessage.value,
                author: !e.target.newAuthor.value ? "anonymous" : e.target.newAuthor.value
            })
        })

    }

    render() {
        return (
            <div>
                <Quotation {...this.state.quotations[this.state.currIndex]}/>
                <hr/>
                <button onClick={() => this.handleIndex(-1)}>previous</button>
                <button onClick={() => this.handleIndex(1)}>next</button>
                <hr/>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="newMessage">new quote</label>
                    <textarea id="newMessage" name="newMessage" placeholder="enter your message"/>
                    <br/>
                    <label htmlFor="newAuthor">author</label>
                    <input id="newAuthor" name="newAuthor" placeholder="author name"/>
                    <input type={"submit"} value={"OK"}/>
                </form>
            </div>
        )
    }
}

class Quotation
    extends React
        .Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styleMessage = {color: 'red'}, styleAuthor = {color: 'green'};
        return (
            <div>
                <h3 style={styleMessage}>What I have to say: {this.props.message} </h3>
                <h4 style={styleAuthor}>{this.props.author}</h4>
            </div>
        );
    }
}

export default Root;