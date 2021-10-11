import React ,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /*using mulltiple states to store the entered value*/
  const [enteredTitle,setEnteredTitle]= useState('');//there is a '' in useState because it converts everything into string
  const[enteredAmount,setEnteredAmount]=useState('');
  const[enteredDate,setEnteredDate]=useState('');
  function titleChangeHandler(event)//this event recives the text entered 
  {
    setEnteredTitle(event.target.value);//the value attribute is inside target atribute. so we are pointing to it
  };
  function AmountChangeHandler(event1)
  {
    setEnteredAmount(event1.target.value);
  };
  function DateChangeHandler(event)
  {
    setEnteredDate(event.target.value);
  };

  function SubmitHandler(event) //we can write event or any name
  {
    event.preventDefault();//ususally when we click submit the page gets refreshed thus the val received is lost to prevent this we use this
    const expensedata={ //storing the values in expensedata
      title:enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)//we are parsing the date since it automatically becomes string after invoking states
    };
    props.onSaveExpenseDatavinod(expensedata); //the expensedata will be received by enteredExpenseData in newexpense.js
    setEnteredTitle(''); //two way binding ie sending this value(empty sting) into the form again after submitting
    setEnteredAmount('');
    setEnteredDate('');
  };
  /*using single state to store the value:
  const [userInput,setUserInput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',
  });
  function titleChangeHandler(event)//this event recives the text entered 
  {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value, //the value attribute is inside target atribute. so we are pointing to it
    });
   
  };
  function AmountChangeHandler(event1)
  {
    setUserInput({
      ...userInput,
      enteredAmount: event1.target.value, 
    });
  };
  function DateChangeHandler(event)
  {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value, 
    });
  };*/
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} /> {/* value={} for two way binding*/}
          {/*if we dont place a value we no need to use closing tag*/}
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={AmountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" value={enteredDate} onChange={DateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Add Expense</button>
         </div>   
      </div>
      
    </form>
  );
}
export default ExpenseForm; //function name
