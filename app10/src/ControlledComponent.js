import { useState } from "react";

function ControlledComponent(){
    /*
        component with form elemtns and that elements are controlled by
        react state its known as controlled component in terms of react JS
    */ 

    let [fname, setFname] = useState("");
    return <>
    <h1>Controlled component</h1>
        <input type="text" defaultValue={fname} onChange={(event)=>setFname(event.target.value)} />
        <h1>Welcome {fname}</h1>
    </>
}

export default ControlledComponent;