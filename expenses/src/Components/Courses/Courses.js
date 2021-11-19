import { Link } from 'react-router-dom';

const Courses = props => {
    return (
        <div>
            Courses Component Loaded
            <ul>
                <li><Link to="/courses/angular?duration=40">Angular</Link></li>
                <li><Link to="/courses/react?duration=24">React</Link></li>
                <li><Link to="/courses/vue?duration=16">Vue</Link></li>
            </ul>
        </div>
    )
}

export default Courses;