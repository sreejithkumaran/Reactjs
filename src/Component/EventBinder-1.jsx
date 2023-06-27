import React, { Component } from "react";

class EventBinder1 extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Hello'
        }
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
                {/* <button onClick={this.clickHandler}>Click Here</button> // Throws error */}

                <button onClick={this.clickHandler.bind(this)}>Click Here 1</button>
                <button onClick={() => this.clickHandler()}>Click Here 2</button>
                
                {/* above example : binding in render method , 
                1 - Performance implication 
                2 - Can use , easy way of implementation */
                  }
            </div>
        )
    }

}

export default EventBinder1;