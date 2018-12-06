import React from 'react';

// ---  exo5.3 to 5.5 ---
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
            currIndex: 0,
            newMessage: "",
            newAuthor: "",
            intervalId: null
        };
    }

    componentDidMount() {
        this.setState({intervalId: setInterval(() => this.handleIndex(1), 500)})
    }

    handleIndex(n) {
        const x = this.state.currIndex + n;
        if (x >= this.state.quotes.length) this.setState({currIndex: 0});
        else if (x <= 0) this.setState({currIndex: this.state.quotes.length - 1});
        else this.setState({currIndex: x});
    }

    handleSwitchInterval() {
        if (!!this.state.intervalId) {
            clearInterval(this.state.intervalId);
            this.setState({intervalId: null})
        } else {
            this.setState({intervalId: setInterval(() => this.handleIndex(1), 500)})
        }
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

    render() {
        return (
            <div>
                <Quotation {...this.state.quotes[this.state.currIndex]}/>
                <hr/>
                <button onClick={() => this.handleSwitchInterval()}>switch</button>
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