import React, { Component } from "react";

class EventBinder3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            message : 'Hello'
        }

    /*     // binding in construtor
         this.clickHandler = this.clickHandler.bind(this)   */
     } 

/*    clickHandler(){
        this.setState({
            message : 'Welcome to Event Binder ( using this )'
        })
    }
*/

// React documentation suggestion
    clickHandler = () => {
        this.setState({
            message : 'This is Approach - 4'
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

export default EventBinder3;