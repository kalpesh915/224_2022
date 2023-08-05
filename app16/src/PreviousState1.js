import { useState } from "react";

function PreviousState1(){
    let [count, setCount] = useState(0);

    return <>
        <h1>Example of Previous State</h1>    
        <h1>Count is {count}</h1>
        <hr></hr>
        <button onClick={()=>setCount((previous)=>{
            console.log("Previous value is "+previous);
            return Math.ceil(Math.random() * 100);
        })}>Update</button>
    </>
}

export default PreviousState1;