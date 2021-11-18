import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import UseEffectDemo from './Components/practice/UseEffectDemo';

function App() {
  // const [showComp, setShowComp ] = useState(true)
  // const [title, setTitle] = useState("My Expenses App")

  // const onToggleShowComp = () => {
  //   setShowComp(!showComp)
  //   setTitle(prevState => {return "Hello World"})
  // }

  return(
  <div className="container">
    <p className="display-4 text-center">My Expenses App</p>
    <UseEffectDemo />
    {/* <Expenses /> */}
    {/* <hr />
    <button onClick={onToggleShowComp}>Toggle Component</button>
    { showComp && <ClassBasedComp /> } */}
  </div>
  )
}

export default App;
