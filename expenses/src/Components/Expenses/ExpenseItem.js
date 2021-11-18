import PropTypes from 'prop-types';

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    const onBtnDelete = () => {
        props.onDelete(props.id)
    }
    return (
        <div className="col-6">
        <div className="card">
            <div className="card-header">
                <h4 className="text-center">{props.title.toUpperCase()}</h4>
            </div>
            <div className="card-body">
                <p>Amount : ${props.amount}</p>
               <ExpenseDate date={props.createdAt} />
               <br/>
               <button className="btn btn-block btn-danger" onClick={onBtnDelete}>Delete</button>
            </div>
        </div>
    </div>
    )
}

ExpenseItem.propTypes = {
    id : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    amount : PropTypes.number.isRequired,
    createdAt : PropTypes.object.isRequired,
    onDelete : PropTypes.func.isRequired
}

export default ExpenseItem;