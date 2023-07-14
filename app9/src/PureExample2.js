import { useMemo } from "react";
import { useState } from "react";

function PureExample2(){
    let [count, setCount] = useState(0);
    
    useMemo(()=>{

    }, [count])

    
    return <>
        <h1>Example of Pure Component in Function</h1>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(10)}>Update Count</button>
    </>
}

export default PureExample2;