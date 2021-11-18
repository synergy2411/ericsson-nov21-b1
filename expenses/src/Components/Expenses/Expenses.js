import { Fragment, useState } from "react";
import AddExpense from "./AddExpense";
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

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((exp) => exp.id !== id);
    });
  };

  return (
    <Fragment>
    <AddExpense />
    <br />
    <div className="row">
      {expenses.map((expense) => (
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
