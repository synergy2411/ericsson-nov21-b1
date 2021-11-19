import { useParams, useHistory } from 'react-router-dom';

const CourseDetail = props => {
    const params = useParams();
    const history = useHistory();
    
    const navigationHandler = () => { history.replace("/courses") }

    return (
        <div>
            Course detail for {params.courseName.toUpperCase()} program. 
            <br />
            <button className="badge badge-dark" onClick={navigationHandler}>Go to Courses</button>
        </div>
    )
}

export default CourseDetail;