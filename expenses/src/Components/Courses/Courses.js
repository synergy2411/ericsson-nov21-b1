import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import CourseDetail from "./CourseDetail";

const Courses = (props) => {
  return (
    <div className="text-center">
      <p className="text-center display-4">Available Courses</p>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" to="/courses/angular?duration=40">Angular</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses/react?duration=24">React</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses/vue?duration=16">Vue</Link>
        </li>
      </ul>
      <Route path="/courses/:courseName">
        <CourseDetail />
      </Route>
    </div>
  );
};

export default Courses;
