

function IncomeExpenses({myExpensesGlobal}){
const myMoney= myExpensesGlobal.reduce(
    (acc,el)=>{
if(el.amount>0){
    acc.income+= +el.amount
}else{
    acc.expenses += +el.amount
}
    return acc
},

{ 
income:0,
    expenses:0
})
    return(
        <div className="inc-exp-container"> 
<div>
    <h4>Income</h4>
<p className="money plus">{myMoney.income}</p>
</div>  
<div>
<h4>Expenses</h4>

<p className="money minus">{myMoney.expenses}</p>

</div>

</div>
    )
} 

export default IncomeExpenses