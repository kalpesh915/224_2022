import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Printer from './Printer';

function App() {
  const data = [
    {roll:121, fname:"Nandidni", lname : "Parekh", city : "Rajkot"},
    {roll:122, fname:"Riya", lname : "Parekh", city : "Rajkot"},
    {roll:123, fname:"Falak", lname : "Parekh", city : "Rajkot"},
    {roll:124, fname:"Palak", lname : "Parekh", city : "Rajkot"},
    {roll:125, fname:"Siya", lname : "Parekh", city : "Rajkot"}
  ];
  return (
    <div className="App">
      <BrowserRouter>
        {
          data.map((student)=><Link className="link1" to={"/printer/"+student.roll+"/"+student.fname+"/"+student.lname+"/"+student.city}>{student.fname}</Link>)
        }

        <Routes>
          <Route path='/printer/:roll/:fname/:lname/:city' element={<Printer></Printer>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
