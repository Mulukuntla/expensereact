// Write your code at relevant places in the code below:
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/card";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString()===filteredYear
  })
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
    <ExpensesChart filteredExpensesForChart={filteredExpenses}></ExpensesChart>
    <ExpensesList items={filteredExpenses}></ExpensesList>
      
      
    </Card>
  );
};

export default Expenses;
