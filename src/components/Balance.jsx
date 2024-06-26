import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'


const Balance = () => {
    const {transactions}=useContext(GlobalContext)
    const amounts = transactions.map(transaction => parseFloat(transaction.amount));

    const filteredAmounts = amounts.filter(amount => !isNaN(amount));
    // if (filteredAmounts.length === 0) {
    //     return <div></div>;
    // }

    const total = filteredAmounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  return (
    <div>
      <p className="mt-8 text-lg text-center">Your Balance</p>
      <p className="text-green-200 text-m text-center ">Rs {total}</p>

    </div>
  )
}

export default Balance
