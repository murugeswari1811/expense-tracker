import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'
import Transaction from './transaction'

const TransactionList = () => {
    const {transactions}=useContext(GlobalContext)
    // console.log(context.transactions);
  return (
    <div>
      <h2 className="mt-8 bg-yellow-300 text-black text-center text-lg">History</h2>
        <ul>
            {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>
            ))}
        </ul>
      
    </div>
  )
}

export default TransactionList
