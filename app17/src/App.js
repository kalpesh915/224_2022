import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import { CommonData } from './Components/CommonContext';
import { useState } from 'react';

function App() {
  let [themeColor, setThemeColor] = useState({fg : "white", bg : "Blue"});
  return (
    <div>
      <h1>Example of Common Context</h1>  
      <CommonData.Provider value={themeColor}>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        <button onClick={()=>setThemeColor({fg: "white", bg:"brown"})}>Theme 1 </button>
        <button onClick={()=>setThemeColor({fg: "white", bg:"red"})}>Theme 2 </button>
        <button onClick={()=>setThemeColor({fg: "red", bg:"yellow"})}>Theme 3 </button>
        <button onClick={()=>setThemeColor({fg: "white", bg:"blue"})}>Theme 1 </button>
      </CommonData.Provider>
    </div>
    
  );
}

export default App;
