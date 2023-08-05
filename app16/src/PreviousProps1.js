import { useRef, useEffect } from "react";
function PreviousProps1(props){

    const lastValue = useRef();

    useEffect(()=>{
        lastValue.current = props.data;
        
    });
    const previousProp = lastValue.current;
    console.log("Previous Props is : "+previousProp);
    return <>
        <h1>Example of Previous Props</h1>
        <h1>Props Value is {props.data}</h1>
    </>
}

export default PreviousProps1;