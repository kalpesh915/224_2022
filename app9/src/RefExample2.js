import { useRef } from "react";



function RefExample2(){
    const fnameref = useRef();

    function getMessage(){
        alert(fnameref.current.value);
    }
    
    return <>
        <h1>Reference Example with Function Component </h1>
        <input type="text" ref={fnameref}></input>
        <button onClick={()=>getMessage()}>Click Me</button>
    </>
}

export default RefExample2;