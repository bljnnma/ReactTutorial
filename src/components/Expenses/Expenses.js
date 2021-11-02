import React, { useState } from "react";

import ExpensesList from './ExpensesList.js';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = enteredDate => {
      setFilteredYear(enteredDate);
   };

   const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
   });

   return (
      <div>
         <Card className="expenses">
            <ExpensesFilter 
               selected={filteredYear} 
               onChangeFilter={filterChangeHandler} 
            />
            <ExpensesList items={filteredExpenses} />
         </Card>
      </div>
   );
};

export default Expenses;