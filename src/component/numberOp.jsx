import React, { Component } from "react";
import classes from "./css/c.module.css";

class NumberOp extends Component{
    constructor(props) {
        super(props);
        this.state = { number: props.start };
    }
    handleDecrement = (state) => {
        if (state.number === 0) {
            return alert("Must be > 0");
        } else {
            this.setState({ number: state.number - 1 });
        }
        
    }
    handleIncrement = (state) => {
        this.setState({ number: state.number + 1 });
    }
    render() {
        return (<div className={classes.bar}><button onClick={() => this.handleIncrement(this.state)}>Increment</button><h1>{this.state.number}</h1><button onClick={() => this.handleDecrement(this.state)}>Decrement</button></div>)
    }
}
export default NumberOp;