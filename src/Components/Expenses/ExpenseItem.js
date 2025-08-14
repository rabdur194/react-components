import React from 'react'
import './ExpenseItem.css'

function ExpenseItem(props) {
    console.log(props);

  return (
    <div>ExpenseItem
       < h1> {props.title} </h1>
       <p>${props.amount}</p>
       <p>{props.date.toDateString()}</p>
    </div>
  )
}

export default ExpenseItem