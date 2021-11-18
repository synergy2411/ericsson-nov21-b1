import { Fragment, useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "shopping",
    amount: 12.99,
    createdAt: new Date("Nov 19, 2021"),
  },
  {
    id: "e2",
    title: "insurance",
    amount: 10.99,
    createdAt: new Date("Dec 19, 2020"),
  },
  {
    id: "e3",
    title: "planting",
    amount: 28.89,
    createdAt: new Date("Aug 2, 2019"),
  },
  {
    id: "e4",
    title: "grocery",
    amount: 43.9,
    createdAt: new Date("Sept 11, 2019"),
  },
];

const Expenses = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showForm, setShowForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2021)

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((exp) => exp.id !== id);
    });
  };

  const onAddNewExpense = expense =>{ 
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }

  const onToggleForm = () => setShowForm(!showForm)

  const onSelectedYear = selYear => {
    setSelectedYear(selYear)
  }
  
  let filteredExpenses = expenses.filter(exp => exp.createdAt.getFullYear().toString() === selectedYear.toString())

  return (
    <Fragment>
      <div className="row">
        <div className="col-3 offset-3">
          <button className="btn btn-block btn-primary" 
            onClick={onToggleForm}>
            {showForm ? 'Hide Form' :'Add New Expense'}
          </button>
        </div>
        <div className="col-3">
          <ExpenseFilter onSelected={onSelectedYear} selectedYear={selectedYear} />
        </div>
      </div>
    {showForm && <AddExpense onAdd={onAddNewExpense} />}
    <br />
    <div className="row">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          createdAt={expense.createdAt}
          onDelete={deleteExpense}
        />
      ))}
    </div>
    </Fragment>
  );
};

export default Expenses;
