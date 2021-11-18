import PropTypes from 'prop-types';

const ExpenseDate = props => {
    const month = props.date.toLocaleString('en-US', {month : 'long'})
    const day = props.date.toLocaleString('en-US', {day : 'numeric'})
    const year = props.date.getFullYear();

    return (
        <p className="lead">Created At : {month} {day}, {year}</p>
    )
}

ExpenseDate.propTypes = {
    date : PropTypes.object.isRequired
}
export default ExpenseDate;