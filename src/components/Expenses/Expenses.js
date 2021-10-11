import React,{useState} from "react";

import Expenseitem from "./Expenseitem";

import "./Expenses.css";

import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  /* this part is not a pure html because in javascript we cant write html this is a jsx format where we use html tags inside js */
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {/* always start with upper case for custom components because reacts thinks that lower case is for imbuild components like h1 and upper case starting for custom components */}
     {props.items.map(expense => <Expenseitem 
     key={expense.id}//to prevent error
      tit={expense.title}
      amo={expense.amount} 
      date={expense.date}/>)}
     {/*  <Expenseitem
        tit={props.items[0].title}
        amo={props.items[0].amount}
        date={props.items[0].date}
      ></Expenseitem>
     
      <Expenseitem
        tit={props.items[1].title}
        amo={props.items[1].amount}
        date={props.items[1].date}
      ></Expenseitem>
      <Expenseitem
        tit={props.items[2].title}
        amo={props.items[2].amount}
        date={props.items[2].date}
      ></Expenseitem>
      <Expenseitem
        tit={props.items[3].title}
        amo={props.items[3].amount}
        date={props.items[3].date}
     ></Expenseitem> */}
    </div>
  );
}

export default Expenses;
