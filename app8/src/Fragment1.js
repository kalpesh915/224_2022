import React, { Fragment } from "react";

function Fragment1(){
    // return <h1>Nandini Parekh</h1>
    // <p>From Rajkot</p>

    // div is not preferable because div is block level element it start always from new line
    // return <div>
    //     <h1>Nandini Parekh</h1>
    //     <p>From Rajkot</p>
    // </div>

    /*
        type to write a fragment 
        <></>
        <React.Fragment></React.Fragment>
        <Fragemnt></Fragemnt>
    */ 
    
    /*return <>
         <h1>Nandini Parekh</h1>
         <p>From Rajkot</p>
    </>*/

    /*return <React.Fragment>
         <h1>Nandini Parekh</h1>
         <p>From Rajkot</p>
    </React.Fragment>*/

    return <Fragment>
         <h1>Nandini Parekh</h1>
         <p>From Rajkot</p>
    </Fragment>
}

export default Fragment1;