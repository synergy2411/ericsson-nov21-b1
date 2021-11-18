import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenses = [
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

  return (
    <div className="row">
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        createdAt={expenses[0].createdAt}
      />
      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        createdAt={expenses[1].createdAt}
      />
      <ExpenseItem
        id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        createdAt={expenses[2].createdAt}
      />
      <ExpenseItem
        id={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        createdAt={expenses[3].createdAt}
      />
    </div>
  );
};

export default Expenses;
