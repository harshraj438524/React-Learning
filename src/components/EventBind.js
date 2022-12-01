import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hasrg"
      }
      this.changemessage=this.changemessage.bind(this)
    }
    changemessage(){
        this.setState({
            message:"hssgs"
        })
    }
    // }
    // changemessage=()=>{
    //     this.setState({
    //         message:'bsvdb'
    //     })
    // }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.changemessage.bind(this)}>changeMessage</button> */}
                {/* <button onClick={()=>this.changemessage()}> change</button> */}
                <button onClick={this.changemessage}>jbjczs</button>
            </div>
        )
    }
}

export default EventBind
