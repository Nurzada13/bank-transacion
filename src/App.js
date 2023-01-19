import "./App.css";
import Header from "./component/header";
import AddTransaction from "./component/AddTransaction";
import { useState } from "react";
import TransactionList from "./component/transactionList";
import IncomeExpenses from "./component/incomeExpenses";
import Balance from "./component/balance";

function App() {
  const [myExpensesGlobal, setMyExpensesGlobal] = useState([]);

  console.log(myExpensesGlobal);

  return (
    <>
      <Header />
      <Balance 
      myExpensesGlobal={myExpensesGlobal}
      />
  <IncomeExpenses 
  myExpensesGlobal={myExpensesGlobal}/>

      <TransactionList
       myExpensesGlobal={myExpensesGlobal}
       setMyExpensesGlobal={setMyExpensesGlobal}
       /> 

      <AddTransaction
       myExpensesGlobal={myExpensesGlobal} 
        setMyExpensesGlobal={setMyExpensesGlobal}
        />


       
    </>

  )
}

export default App;
 
