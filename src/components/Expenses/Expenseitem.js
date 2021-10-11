import React,{useState} from 'react'; //for using states function
import ExpenseDate from "./ExpenseDate";

import "./Expenseitem.css"; //importing the expenseitem css file
function Expenseitem(props) {
  //golden rule: you can always return only one thing in jsx sao put everything in a single div and then return
 //this is a react hooks. these hooks cant be called outside the function or inside the nested function. They must be directly called just inside the main function
  //the useState returns 2 obj which is in the form of array. the first variable represents what we give in the useState and the second variable is a function which we can later call to setTitle in this case

  
  return (
    <div className="expense-item">
      {/*in html we use class="" but in jsx we use className=""*/}
      <ExpenseDate date={props.date}></ExpenseDate>
      {/*since date is a date obj we need to convert into string else it will break. but for others there is no problem*/}
      <div className="expense-item__description">
        <h2>{props.tit}</h2>
        {/*inside the curly brasis we can execute javascript expressions*/}
        <div className="expense-item__price">${props.amo}</div>
      </div>
     
    </div>
  );
}
export default Expenseitem;
