import ChildComponent from "./ChildComponent";

function ParentComponent(){
    function Greetings(username){
        alert("Welcome "+username);
    }

    return <>
        <ChildComponent data={Greetings}></ChildComponent>
    </>
}

export default ParentComponent;