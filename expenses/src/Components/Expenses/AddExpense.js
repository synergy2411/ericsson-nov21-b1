import { useState, useRef } from "react";
import { v4 } from 'uuid';

const AddExpense = (props) => {
    // const InputUsernameRef = useRef();

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = event => setEnteredAmount(event.target.value);
    const dateChangeHandler = event => setEnteredDate(event.target.value);

    const submitHandler = (event) => {
        event.preventDefault()
        const newExpense = {
            title : enteredTitle,
            amount : Number(enteredAmount),
            createdAt : new Date(enteredDate),
            id : v4()
        }
        props.onAdd(newExpense)
        // console.log("REFS : ", InputUsernameRef.current.value)
    }

    const resetHandler = (event) => {
        event.preventDefault()
        setEnteredTitle('')
        setEnteredDate('')
        setEnteredAmount('')
    }

  return (
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card">
          <div className="card-body">
              <h5 className="text-center">Add New Expense</h5>
            <form>
                {/* Using Refs */}
                {/* <input className="form-control" name="username" ref={InputUsernameRef}/> */}
                {/* Title */}
              <div className="form-group">
                <label htmlFor="title">Title :</label>
                <input type="text" name="title" 
                    className="form-control" 
                    onChange={titleChangeHandler} 
                    value={enteredTitle}/>
              </div>
              {/* Amount */}
              <div className="form-group">
                <label htmlFor="amount">Amount :</label>
                <input type="number" name="amount" 
                    className="form-control" 
                    min="0.01" step="0.01"
                    value={enteredAmount} 
                    onChange={amountChangeHandler}/>
              </div>
              {/* Date */}
              <div className="form-group">
                  <label htmlFor="createdAt">Date :</label>
                  <input type="date" name="caretedAt" 
                    min="2019-01-01" max="2021-12-31" 
                    className="form-control" 
                    onChange={dateChangeHandler}
                    value={enteredDate}/>
              </div>
              {/* Buttons */}
              <div className="form-group">
                  <div className="row">
                      <div className="col-6">
                          <button className="btn btn-primary btn-block"
                            onClick={submitHandler}>Add Item</button>
                      </div>
                      <div className="col-6">
                          <button className="btn btn-warning btn-block"
                            onClick={resetHandler}>Reset</button>
                      </div>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
