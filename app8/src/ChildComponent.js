import { useState } from "react";

function ChildComponent(props){
    let [username, setUsername] = useState("Nandini Parekh");

    return <>
        <button onClick={()=>props.data(username)}>Click Me</button>
    </>
}

export default ChildComponent;