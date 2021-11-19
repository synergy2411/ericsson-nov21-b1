import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CourseDetail from "./Components/Courses/CourseDetail";
import Courses from "./Components/Courses/Courses";
import Expenses from "./Components/Expenses/Expenses";
import Header from "./Components/Header/Header";
import UseEffectDemo from "./Components/practice/UseEffectDemo";

function App() {
  // const [showComp, setShowComp ] = useState(true)
  // const [title, setTitle] = useState("My Expenses App")

  // const onToggleShowComp = () => {
  //   setShowComp(!showComp)
  //   setTitle(prevState => {return "Hello World"})
  // }

  return (
    <div className="container">
      <Header />
      <p className="display-4 text-center">My Expenses App</p>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/expenses" />
        </Route>
        <Route path="/hooks">
          <UseEffectDemo />
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/courses/:courseName">
          <CourseDetail />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
