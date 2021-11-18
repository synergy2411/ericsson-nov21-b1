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

export default ExpenseItem;