import { Link } from 'react-router-dom';

const Courses = props => {
    return (
        <div>
            Courses Component Loaded
            <ul>
                <li><Link to="/courses/angular">Angular</Link></li>
                <li><Link to="/courses/react">React</Link></li>
                <li><Link to="/courses/vue">Vue</Link></li>
            </ul>
        </div>
    )
}

export default Courses;