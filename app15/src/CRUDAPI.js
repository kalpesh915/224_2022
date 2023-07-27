import { useEffect, useState } from "react";
import './cdn.css';


function CRUDAPI(){
    // define or create required variables and states
    const APIURL = "http://localhost:3000/students";

    let [uid, setUid] = useState(0);
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setphone] = useState("");
    let [city, setCity] = useState("");
    let [status, setStatus] = useState(true);
    let [studentData, setStudentData] = useState([]);


    // function for handling form submit event
    function formHandling(event){
        event.preventDefault();

        if(status){
            // code for add new data
            fetch(APIURL,{
                method : "POST",
                headers : {
                    "Content-type" : "Application/json",
                    "Accept" : "Application/json"
                },
                body : JSON.stringify({fname, lname, email, phone, city})
            }).then((result)=>{
                result.json().then((response)=>{
                    alert("New Data Inserted with "+response.id+" id");
                    resetForm();
                    loadData();
                });
            })
        }else{
            // code for update data

            fetch(APIURL+"/"+uid, {
                method:"PUT",
                headers : {
                    "content-type" : "Application/json",
                    "accept" : "Application/json"
                },body : JSON.stringify({fname, lname, email, phone, city})
            }).then((result)=>{
                result.json().then((response)=>{
                    alert("Data Updated with ID "+uid);
                    resetForm();
                    loadData();
                });
            });
        }
    }

    // function for reset form
    function resetForm(){
        setStatus(true);
        setFname("");
        setLname("");
        setEmail("");
        setphone("");
        setCity("");
        setUid(0);
        setStatus(true);
    }

    function loadData(){
        fetch(APIURL).then((result)=>{
            result.json().then((response)=>{
                setStudentData(response);
                //console.log(response);
            })
        })
    }

    // use Effect for get inital data
    useEffect(()=>{
        loadData()
    }, []);


    // function for delete data
    function deleteData(id){
        if(window.confirm("Are you sure to delete data ???")){
            fetch(APIURL+"/"+id,{
                method : "delete"
            }).then((result)=>{
                result.json().then((response)=>{
                    alert("Data Deleted With "+id+ " ID");
                    loadData();
                })
            })
        }
    }

    // function  get data for edit
    function getDataforEdit(id){
        //alert(id);
        fetch(APIURL+"/"+id).then((result)=>{
            result.json().then((response)=>{
                setUid(id);
                setFname(response.fname);
                setLname(response.lname);
                setEmail(response.email);
                setphone(response.phone);
                setCity(response.city);
                setStatus(false);
            })
        });
    }

    return <>
        <div className="container-fluid">
            <h1 className="bg-primary text-white p-4 text-center">API CRUD Application</h1>

            <div className="row g-3">
                <div className="col-md-3">
                    <form onSubmit={formHandling}>
                        <div className="my-2 form-floating">
                            <input type="text" name="fname" id="fname" required className="form-control" placeholder="Entet First Name" value={fname} onChange={(event)=>setFname(event.target.value)}></input>
                            <label htmlFor="fname" className="form-label">Enter First Name</label>
                        </div>
                        <div className="my-2 form-floating">
                            <input type="text" name="lname" id="lname" required className="form-control" placeholder="Entet Last Name" value={lname} onChange={(event)=>setLname(event.target.value)}></input>
                            <label htmlFor="lname" className="form-label">Enter Last Name</label>
                        </div>
                        <div className="my-2 form-floating">
                            <input type="email" name="email" id="email" required className="form-control" placeholder="Entet Email Address" value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                            <label htmlFor="email" className="form-label">Enter Email Address</label>
                        </div>
                        <div className="my-2 form-floating">
                            <input type="text" name="phonr" id="phone" required className="form-control" placeholder="Entet Phone Number" pattern="\d{10,12}" value={phone} onChange={(event)=>setphone(event.target.value)}></input>
                            <label htmlFor="phone" className="form-label">Enter Phone Number</label>
                        </div>
                        <div className="my-2 form-floating">
                            <input type="text" name="city" id="city" required className="form-control" placeholder="Entet City" value={city} onChange={(event)=>setCity(event.target.value)}></input>
                            <label htmlFor="fname" className="form-label">Enter City</label>
                        </div>
                        <div className="my-2 form-floating">
                            {
                                status ? <div>
                                <input type="submit" value="Add New Data" className="btn btn-primary"></input>
                                <input type="reset" value="Reset" className="btn btn-danger"></input></div>
                                :
                                <div><input type="submit" value="Save Data" className="btn btn-primary"></input>
                            <input type="button" value="Cancel" className="btn        btn-danger" onClick={()=>resetForm()}></input></div>

                            }
                            
                        </div>
                    </form>
                </div>

                <div className="col-md-9">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    studentData.map((student)=><tr>
                                        <td>{student.id}</td>
                                        <td>{student.fname}</td>
                                        <td>{student.lname}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.city}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary mx-2" onClick={()=>getDataforEdit(student.id)}>
                                                <i className="fa fa-pen"></i>
                                            </button>
                                            <button type="button" className="btn btn-danger" onClick={()=>deleteData(student.id)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CRUDAPI;