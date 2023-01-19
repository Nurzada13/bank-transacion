import {useState } from "react";
import { v4 as uuidv4 } from "uuid";


function AddTransaction({setMyExpensesGlobal, myExpensesGlobal}){
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  

  function onSubmit(event) {
    event.preventDefault()
    const newExpenses = {
      id: uuidv4(),
      text,
      amount
    }
    setMyExpensesGlobal([newExpenses, ...myExpensesGlobal])
    setAmount(0)
    setText("")
  }



  return (
    <>
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type={text}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter Text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="text">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}
export default AddTransaction;
