import React, { Component } from "react";

class EventBinder2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : 'Hello'
        }

        // binding in construtor
        this.clickHandler = this.clickHandler.bind(this)
        // React documentation suggestion
    }

    clickHandler(){
        this.setState({
            message : 'Welcome to Event Binder ( using this )'
        })
    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }

}

export default EventBinder2;