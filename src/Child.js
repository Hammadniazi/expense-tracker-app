import React, {useContext,useState} from 'react';
import {TransactionContext}from './transsContext.js';

function Child() {
    let {transactions,addTransaction } = useContext(TransactionContext);
    let[newDesc, setDesc]=useState("");
    let[newAmount,setAmount]=useState(0);



    const handleAddition =(event )=>{
        event.preventDefault();
        if(Number(newAmount)===0){
            alert("Please Enter the correct value");
            return false;
            
        }
        
        addTransaction({
            amount:Number(newAmount),
            desc:newDesc,
        })
        setDesc('');
        setAmount(0)

    }

    const getIncome = () =>{
        let income = 0;
        for(var i =0; i<transactions.length; i++){
            if(transactions[i].amount>0)
            income +=transactions[i].amount
        }
        return income;
    }

    const getExpense = () =>{
        let expense = 0;
        for(var i = 0; i<transactions.length; i++){
            if(transactions[i].amount<0)
            expense += transactions[i].amount

        }
        return expense; 
    }


  return (
    <div className="Container">
    <h1 className="text-center" >Expense Tracker</h1>

    <h3 >YOUR BALANCE <br/> ${getIncome()+getExpense()}</h3>
    <div className="expense-tracker ">
    <h3>INCOME<br/> ${getIncome()}</h3>
    <h3>EXPENSE <br/> ${getExpense()}</h3>

    </div>
    <h3>History</h3>
    <hr />
    <ul className='transaction-list'>
        {transactions.map((transobj, ind)=>{
        return(<li key={ind}>
            <span>{transobj.desc}</span>
            <span>{transobj.amount}</span>
        </li>
        )
        })}
       
       
    </ul>

    <h3>Add new transactions</h3>
    <hr />

    <form className="transaction-form" onSubmit={handleAddition}>
        <lable>
            Enter Discription <br/>
            <input type="text" 
            value={newDesc}
            placeholder= "Discription"
            onChange={(ev)=>setDesc(ev.target.value)}required/>
        </lable>
        <br/>
        <lable>
            Enter Amount <br/>
            <input type= "number"
            value={newAmount}
            placeholder= "Amount" 
            onChange={(ev)=>setAmount(ev.target.value)} required/>

        </lable>
        <br/>
        <br/>

        <input type="Submit" value= "Add Transactions"/>

    </form>


    </div>
  );
}

export default Child;
