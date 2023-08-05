import { useState } from "react";
import PreviousProps1 from "./PreviousProps1";
import PreviousState1 from "./PreviousState1";

function App() {
  let [myState, setMyState] = useState(0);
  return (
    <div className="App">
      {/* <PreviousState1></PreviousState1> */}
      <PreviousProps1 data={myState}></PreviousProps1>
      <button onClick={()=>setMyState(Math.ceil(Math.random() * 100))}>Update State</button>
    </div>
  );
}

export default App;
