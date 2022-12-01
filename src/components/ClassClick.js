import React, { Component } from 'react'

export class ClassClick extends Component {
   myfunc() {
        console.log("buttoo clicked")
        
    }
    render() {
        return (
            <div>
                <button onClick={this.myfunc}>Click ME</button>
                
            </div>
        )
    }
}

export default ClassClick
