import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function newExpense(props)
{
    function saveExpenseDataHandler(enteredExpenseData)
    {
            const expenseData={
                ...enteredExpenseData,
                id: Math.random().toString()
            };
            props.onAddExpensevinod(expenseData);
    };
    //now sending it to app js
 
   return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDatavinod={saveExpenseDataHandler}/>
        </div>

   ) ;
}
export default newExpense;