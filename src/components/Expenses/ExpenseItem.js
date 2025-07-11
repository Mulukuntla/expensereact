// Write your code at the relevant places in the code below
import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";



const ExpenseItem = (props) => {
  

  return (
    <li>
      <Card className="expense-item">
      
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

