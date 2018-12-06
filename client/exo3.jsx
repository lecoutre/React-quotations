import React from 'react';

// ---  exo3 Root + Quotation ---
let quote = {message:"Elementary, my dear Watson", author:"Sherlock Holmes"}

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = quote;
    }

    //version 1 :  classical declaration of arguments
    // render() {
    //     return (
    //         <Quotation message={this.state.message} author={this.state.author}/>
    //     );
    // }

    // version 2 : arguments with spread operator
    render() {
        const buttonStyle = {marginLeft: "40px"};
        return (
            <div>
                <Quotation {...this.state}/>
                <hr/>
                <button style={buttonStyle}>previous</button>
                <button style={buttonStyle}>next</button>
            </div>
        )
    }
}

class Quotation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styleMessage = {color: 'red'}, styleAuthor={color:'green'};
        return (
            <div>
                <h3 style={styleMessage}>What I have to say: {this.props.message} </h3>
                <h4 style={styleAuthor}>{this.props.author}</h4>
            </div>
        );
    }
}

export default Root;