import logo from './logo.svg';
import './App.css';
import ReuseComponent from './ReuseComponent';
import Fragment1 from './Fragment1';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      	{/* <ReuseComponent></ReuseComponent> */}
        {/* <Fragment1></Fragment1> */}
        <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
