function Balance({myExpensesGlobal}) {

    const myBalance=myExpensesGlobal.reduce((acumlatorBalance,object)=>
    
    {acumlatorBalance+= +object.amount
return acumlatorBalance
    },0)

  return(
    <>
      <h4>Your Balance</h4>
      <h1>{myBalance}</h1>
      
    </>
  )
}
export default Balance;
 

