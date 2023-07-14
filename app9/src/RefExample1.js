import React from "react";
import { createRef } from "react";
class RefExample1 extends React.Component{
    constructor(){
        super();
        this.fnameRef = createRef();
    }

    getMessage(){
        alert(this.fnameRef.current.value);
        this.fnameRef.current.style.backgroundColor = "brown";
        this.fnameRef.current.style.color = "white";
    }

    render(){
        return <>
            <h1>Example of Reference with Class Component</h1>
            <hr></hr>
            <input type="text" name="fname" ref={this.fnameRef}></input>
            <button onClick={()=>this.getMessage()}>Click Me</button>
        </>
    }
}

export default RefExample1;