import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  // const [showComp, setShowComp ] = useState(true)
  // const [title, setTitle] = useState("My Expenses App")

  // const onToggleShowComp = () => {
  //   setShowComp(!showComp)
  //   setTitle("Hello JavaScript")
  // }

  return(
  <div className="container">
    <p className="display-4 text-center">My Expenses App</p>
    <Expenses />
    {/* <hr />
    <button onClick={onToggleShowComp}>Toggle Component</button>
    { showComp && <ClassBasedComp /> } */}
  </div>
  )
}

export default App;
