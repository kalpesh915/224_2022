import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Feedback from './Feedback';
import Login from './Login';
import Error404 from './Error404';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Link to="/" className='navlink'>Home</Link>
      <Link to="/about" className='navlink'>About</Link>
      <Link to="/contact" className='navlink'>Contact</Link>
      <Link to="/feedback" className='navlink'>Feedback</Link>
      <Link to="/login" className='navlink'>Login</Link>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/feedback' element={<Feedback></Feedback>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
