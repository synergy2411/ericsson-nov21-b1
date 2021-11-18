import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className="col-6">
        <div className="card">
            <div className="card-header">
                <h4 className="text-center">{props.title.toUpperCase()}</h4>
            </div>
            <div className="card-body">
                <p>Amount : ${props.amount}</p>
                {/* <p>Created At : {props.createdAt.toString()}</p> */}
               <ExpenseDate date={props.createdAt} />
            </div>
        </div>
    </div>
    )
}

export default ExpenseItem;