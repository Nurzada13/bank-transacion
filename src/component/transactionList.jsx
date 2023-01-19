import Transaction from "./transaction";

function TransactionList({ myExpensesGlobal , setMyExpensesGlobal}) {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
{myExpensesGlobal.map((transaction) => (
            <Transaction
              transaction={transaction}
              key={transaction.id}
              setMyExpensesGlobal={setMyExpensesGlobal}
            />
          ))}
      </ul>
    </>
  )
}
export default TransactionList




