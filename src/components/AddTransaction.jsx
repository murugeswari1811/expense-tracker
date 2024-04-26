import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalState';

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState();
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount 
        };
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    };

    return (
        <div>
            <h3 className="mt-8 bg-yellow-300 text-black text-center text-lg">Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="mt-2 form-control text-center">
                    <label htmlFor="text" className="text-yellow-300">Text</label><br />
                    <input className="text-black px-32 py-2 rounded-full" type="text" placeholder='Enter Text...' value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control text-center">
                    <label className="text-yellow-300" htmlFor="amount">Amount<br /><span class="text-xs text-white">Expenses (-) Eg:-30  Income (+) Eg: 30 </span></label><br />
                    <input className="text-black px-32 py-2 rounded-full" type="number" placeholder='Enter Amount...' value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button type="submit" className='text-black ml-40 text-center mt-4 px-16 py-2 bg-yellow-300 rounded-2xl'>Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;
