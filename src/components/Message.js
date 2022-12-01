import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()
        this.state={
            Message:"welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            Message:"thks"
        })
    } 
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
               <button onClick={() => this.changeMessage()}>subcribe</button>
              
                
            </div>
        )
    }
}

export default Message
