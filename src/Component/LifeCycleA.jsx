import React, { Component } from "react";

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.stage = {
            message : 'constructor or LifeCycleA component'
        }
        console.log('LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    render(){
        console.log('LifeCycleA render')
        return <div>LifeCycle A</div>
    }
}

export default LifeCycleA