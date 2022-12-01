import React from 'react'

function FunctionClick() {
   function  myfunc(){
        console.log("cld")
    }
  return (
    <div>
        <button onClick={myfunc}>click</button>
    </div>
  )
}

export default FunctionClick