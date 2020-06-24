import React, { Component } from 'react';

export class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
    componentDidCatch(err,info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError)
         return <h1 align='center'>Error Occured</h1>
        else
          return this.props.children
    }
}