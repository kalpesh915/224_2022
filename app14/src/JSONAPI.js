function JSONAPI(){

    const APIURL = "http://localhost:3000/students";

    function getAllData(){
        // following is code for get all of the data from JSON API
        //alert("Called");
        fetch(APIURL).then((response)=>{
            response.json().then(result=>{
                console.log("Result is "+JSON.stringify(result));
            })
        });
    }

    function addNewData(){
        // POST Method
        let fname = prompt("Enter First Name");
        let lname = prompt("Enter Last Name");

        fetch(APIURL, {
            method : "POST",
            headers : {
                "content-type" : "Application/json",
                "Accept" : "Application/json"
            },
            body : JSON.stringify({fname, lname})
        }).then((response)=>{
            response.json().then((result)=>{
                alert("New Data Inserted with "+result.id);
            })
        })
    }

    function updateData(){
        const id = prompt("Enter ID to updte data");
        const fname = prompt("Enter First Name");
        const lname = prompt("Enter Last Name");

        fetch(APIURL+"/"+id,{
            method : "PUT",
            headers : {
                "content-type" : "Application/json",
                "Accept" : "Application/json"
            },
            body : JSON.stringify({fname, lname})
        }).then((response)=>{
            response.json().then((result)=>{
                alert("Data Updated");
            })
        })
    }

    function deleteData(){
        const id = prompt("Enter ID to Delete Data");

        fetch(APIURL+"/"+id,{
            method : "DELETE"
        }).then((response)=>{
            response.json().then((result)=>{
                alert("Data Deleted");
            });
        })
    }

    return <>
        <h1>Example of JSON With REst APO</h1>
        <button onClick={()=>addNewData()}>Add New Data</button>
        <button onClick={()=>getAllData()}>Get All Data</button>
        <button onClick={()=>updateData()}>Update Data</button>
        <button onClick={()=>deleteData()}>Delete Data</button>
    </>
}

export default JSONAPI;