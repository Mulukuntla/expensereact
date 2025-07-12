import React from "react"
import Chart from "../Chart/chart"
const ExpensesChart=(props)=>{
    
    return (
        <div>
            <Chart chartExpenses={props.filteredExpensesForChart}></Chart>
        </div>
    )

}




export default ExpensesChart