import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter]=useState(0);
  return (
    <div style={{color: "red",display:'flex',
    justifyContent:'center',
    flexDirection:'column'}
    }>
        <div style={{fontSize:'large'}}>{counter}</div>
        <div><button onClick={()=>setCounter(counter+1)}>Increment</button></div>
        <div> <button onClick={()=>setCounter(counter-1)}>Decrement</button>
</div>
       
    </div>
  )
}

export default Counter