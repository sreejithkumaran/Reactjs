import React,{Component} from "react";


class Counter extends Component{
    constructor(){
        super();
        this.state = {
            message : 'Counter Value',
            count : 0
        }

    }

    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count : this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <div>{this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter;