import React,{useState} from 'react'

function HooksCounter2() {
    const date=new Date();
    const x=date.getFullYear()
    console.log(x)
    const [count, setcount] = useState(x)
    
    

  return (
    <div>
        
        <h1>count {count}</h1>
        <button onClick={()=>setcount(prevcount=>prevcount+1)}>increment</button>
        <button onClick={()=>setcount(prevcount=>prevcount-1)}>decrement</button>
        <button onClick={()=>setcount(0)}>reset</button>
    </div>
  )
}

export default HooksCounter2