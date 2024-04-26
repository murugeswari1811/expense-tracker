import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => parseFloat(transaction.amount));
    const filteredAmounts = amounts.filter(amount => !isNaN(amount));
   
        const income = filteredAmounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        filteredAmounts
            .filter(amount => amount < 0)
            .reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);

    return (
        <div className="ml-20 flex flex-col">
            <div className="mt-8 flex">
                <button type="button" className="mr-2 bg-yellow-300 text-black p-4 rounded leading-none flex items-center">
                    Income
                </button>
                <button type="button" className="bg-white text-black p-4 rounded leading-none flex items-center">
                    {income}
                </button>
                <button type="button" className="ml-12 mr-2 bg-yellow-300 text-black p-4 rounded leading-none flex items-center">
                    Expense
                </button>
                <button type="button" className="bg-white text-black p-4 rounded leading-none flex items-center">
                    - Rs. {expense}
                </button>
            </div>
        </div>
    );
};

export default IncomeExpense;
