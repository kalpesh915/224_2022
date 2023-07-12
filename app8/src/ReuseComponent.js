import './style1.css'
function ReuseComponent(){
    const students = [
        {roll : 123, fname : "Nandini", lname : "Parekh", city : "Rajkot", email:"nandini@gmail.com"},
        {roll : 124, fname : "riya", lname : "Parekh", city : "Rajkot", email:"riya@gmail.com"},
        {roll : 125, fname : "falak", lname : "Parekh", city : "Rajkot", email:"falak@gmail.com"},
        {roll : 126, fname : "sohil", lname : "Parekh", city : "Rajkot", email:"sohil@gmail.com"}
    ];
    return <>
        {
            students.map((student)=>
                <Printer data={student}></Printer>
            )
        }
    </>
}

export default ReuseComponent;

function Printer(props){
    return <>
        <div className='container'>
            <h1 className='header'>
                {props.data.fname} {props.data.lname}
            </h1>
            <p>Welcome to {props.data.city} your Roll No. is {props.data.roll} and Email is {props.data.email}</p>
        </div>
    </>
}