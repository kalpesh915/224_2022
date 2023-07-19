import { useParams } from "react-router-dom";

function Printer(){
    const {roll} = useParams("roll");
    const {fname} = useParams("fname");
    const {lname} = useParams("lname");
    const {city} = useParams("city");

    return <>
        <h1>Welcome {fname} {lname} to {city} your roll no.is {roll}</h1>
    </>
}

export default Printer;