
function Transaction({ transaction, setMyExpensesGlobal }) {
  const sign = transaction.amount > 0 ? "plus" : "minus";

  return (
    <li className={sign}>
      {transaction.amount}
      <button
        className="delete-btn"
        onClick={() => {
          setMyExpensesGlobal((prev) => {
            const newState = prev.filter((el) => el.id !== transaction.id);
            return newState
          });
        }}
      >
        x
      </button>
    </li>
  )
}
export default Transaction
