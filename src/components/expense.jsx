import React from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import './app.css'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import { GlobalProvider } from '../context/globalState'
const Expense = () => {
  return (
    <GlobalProvider>
        <div style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp10299246.jpg')", minHeight: '150vh' }}>

    <div className="mt-6 flex flex-row justify-between items-center bg-black text-white absolute ml-64 rounded overflow-hidden shadow-lg">
    <div className="pb-28 pl-24 pr-24 ">
      <div className="font-bold text-xl "><Header/></div>
      <p className="text-white text-base">
        <Balance/>
      </p>
      <p className="text-white text-base">
        <IncomeExpense/>
      </p>
      <p className="text-white text-base">
        <TransactionList/>
      </p>
      <p className="text-white text-base">
        <AddTransaction/>
    </p>

    </div>
  </div>
  </div>
  </GlobalProvider>
  )
}

export default Expense
