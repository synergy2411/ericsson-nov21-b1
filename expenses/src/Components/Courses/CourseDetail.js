import { useParams, useHistory, useLocation } from 'react-router-dom';

const CourseDetail = (props) => {
    const params = useParams();
    const history = useHistory();
    const location = useLocation();
    const query = new URLSearchParams(location.search)
    const duration = query.get('duration')

    const navigationHandler = () => { history.replace("/courses") }

    return (
        <div>
            <h5>Course detail for {params.courseName.toUpperCase()} program. </h5>
            <p>Program Duration : {duration} </p>
            
            <br />
            <button className="badge badge-dark" onClick={navigationHandler}>Go to Courses</button>
        </div>
    )
}

export default CourseDetail;