import React from "react"
import ExpenseItem from "./ExpenseItem"
const ExpensesList=(props)=>{
    if (props.items.length==0){
        return <p>item not found</p>
    }
    return (
        <ul>
            {props.items.map((item)=>{
                return(
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        date={item.date}
                        price={item.price}
                    />
                )
            })

            }
        </ul>
    )


}
export default ExpensesList