import React,{Component, useState} from "react";
import axios from 'axios'
import { response } from "express";

class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts:[]
        }

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({post : response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const {posts} = this.state
        return(
            <div>
               {
                posts.length ?
                posts.map(post => <div 
                    key={post.id}> {post.title}
                </div>) : null
               }
            </div>
        )
    }
}
