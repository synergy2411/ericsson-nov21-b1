import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import ClassBasedComp from "./Components/practice/ClassBasedComp";

function App() {
  return(
  <div>
    <p>My Expesnes</p>
    <Expenses />
    <hr />
    <ClassBasedComp />
  </div>
  )
}

export default App;
