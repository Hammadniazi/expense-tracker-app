import React, {createContext, useReducer} from 'react';
import TransactionReducer from './transsReducer';


 const initialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -200, desc: "Camera"},
]

 export const TransactionContext = createContext(initialTransactions);
 export const TransactionProvider= ({children})=>{
 let [state,dispatch]= useReducer(TransactionReducer,initialTransactions)
 function addTransaction(transobj){
    dispatch({
        type: "ADD TRANSACTION",
        payload: {
            amount: transobj.amount,
            desc:transobj.desc, 
        }
    })
    
 }
 return(
    <TransactionContext.Provider value={{
        transactions : state,
        addTransaction
    }}>
        {children}

    </TransactionContext.Provider>
 )


}
