import { useRef, useState } from "react";

function UnControlledComponent(){
    /*
        component with form elemtns and that elements are controlled by
        reference its known as uncontrolled component in terms of react JS
    */ 

    let fnameRef = useRef();
    return <>
    <h1>unControlled component</h1>
        <input type="text" ref={fnameRef}></input>
        <button onClick={()=>alert("Welcome "+fnameRef.current.value)}>Get Name</button>
    </>
}

export default UnControlledComponent;