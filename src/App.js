import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const dummy_expenses = [
  { id: 1, title: "Expense 1", amount: 300, date: new Date(2021, 2, 24) },
  { id: 2, title: "Expense 2", amount: 300, date: new Date(2022, 2, 24) },
  { id: 3, title: "Expense 3", amount: 300, date: new Date(2020, 2, 24) },
  { id: 4, title: "Expense 4", amount: 300, date: new Date(2020, 2, 24) },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;