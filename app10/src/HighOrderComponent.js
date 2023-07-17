import { useState } from "react";

function HighOrderComponent(){
    return <>
        <RedComponent data={Counter}></RedComponent>
        <GreenComponent data={Counter}></GreenComponent>
        <BlueComponent data={Counter}></BlueComponent>
    </>
}

function Counter(){
    let [count, setCount] = useState(0);
    return <>
        <h1>Count is {count}</h1>
        <button onClick={()=>setCount(count + 1)}>Update Count</button>
    </>
}

function RedComponent(props){
    return <>
        <div style={{backgroundColor:"Red"}}>
            <props.data></props.data>
        </div>
    </>
}

function GreenComponent(props){
    return <>
        <div style={{backgroundColor:"Green"}}>
            <props.data></props.data>
        </div>
    </>
}

function BlueComponent(props){
    return <>
        <div style={{backgroundColor:"Blue"}}>
            <props.data></props.data>
        </div>
    </>
}

export default HighOrderComponent;