import React from "react";
class PureExampl1 extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            counter : 1
        }
    }

    render(){
        console.log("render Method Called");
        return <>
            <h1>Example of Pure Component</h1>
            <h1>Counter is {this.state.counter}</h1>
            {/* <button onClick={()=>this.setState({counter : this.state.counter + 1})}>Update Count</button> */}
            <button onClick={()=>this.setState({counter : 10})}>Update Count</button>
        </>
    }
}

export default PureExampl1;