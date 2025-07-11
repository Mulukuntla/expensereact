// Write your code at relevant places in the code below:

import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing,setIsEditing]=useState(false)
  const saveExpenseData = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,id:Math.random().toString()
    }
    
    props.onExpenseDetails(newExpenseData)
    setIsEditing(false)
    
    
  }
  
  return (
    <div className="new-expense">
      {isEditing==false && (<button type="button" onClick={()=>{
    setIsEditing(true)
  }}></button>)}
      {isEditing==true && (<ExpenseForm onSaveExpenseData={saveExpenseData} onAdd={()=>{
    setIsEditing(false)}}/>)}
    </div>
  );
};

export default NewExpense;
