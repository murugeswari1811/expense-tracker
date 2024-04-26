import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import { FaRegTrashCan } from "react-icons/fa6";


const Transaction = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext)
    const sign=transaction.amount<0 ? '-' :'+' ;
  return (
    <li id={transaction.amount<0? 'minus' :'plus'} className="flex flex-row text-black bg-white list mt-2 text-center text-m">
        <tr class="text-center border-b border-gray-400">
            <td class="border-r border-gray-400 px-16 py-2">{transaction.text}</td>
            <td class="border-r border-gray-400 px-16 py-2">{sign} Rs. {Math.abs(transaction.amount)}</td>
            <td class="px-2 py-2"><button className="text-yellow-600 ml-28 text-center px-2 " type="button" onClick={()=>deleteTransaction(transaction.id)}><FaRegTrashCan /></button></td>

        </tr>
        
</li>
  )
}

export default Transaction
