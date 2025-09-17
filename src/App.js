
import './App.css';
import Util from './Util';
// import ClassObjects from './ClassObjects';
import ExpenseItem from './Components/Expenses/ExpenseItem';
import ExpenseFormHandler from './Components/Expenses/ExpenseFormHandler';
import FilterItem from './Components/Expenses/FilterItem';
import Todo from './Components/Todo';
import StudentAttendance from './Components/Expenses/StudentAttendance';

function App() {
const expenses = [
 {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
]

  return (
    <div className="App">
      <header className="App-header">
       
          Learn React
       {/* <Util/> */}
       {/* <ClassObjects/> */}
      {/* {expenses.map(expense => 
        <ExpenseItem 
        key = {expense.id} 
        title ={expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />
      )} */}
      
      </header>
        {/* <ExpenseFormHandler/> */} 
        {/* <FilterItem/> */}

        
        {/* <Todo/> */}
     <StudentAttendance/>
    
    </div>
  );
}

export default App;
