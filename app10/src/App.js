import logo from './logo.svg';
import './App.css';
import ControlledComponent from './ControlledComponent';
import UnControlledComponent from './UnControlledComponent';
import HighOrderComponent from './HighOrderComponent';

function App() {
  return (
    <div className="App">
        {/* <ControlledComponent></ControlledComponent> */}
        {/* <UnControlledComponent></UnControlledComponent> */}
        <HighOrderComponent></HighOrderComponent>
    </div>
  );
}

export default App;
