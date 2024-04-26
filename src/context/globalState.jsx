import React ,{createContext,useReducer} from 'react';
import AppReducer from "./appreducer";
const initialState={
    transactions:[
        {
            id:1,
            text:"Flower",
            amount:"-30"
        },
        {
            id:2,
            text:"salary",
            amount:"+1000"
        },
        {
            id:3,
            text:"clothes",
            amount:"-300"
        }
    ]
}
export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children})=>{
     const [state,dispatch]=useReducer(AppReducer,initialState)
     function deleteTransaction(id){
        dispatch(
            {
                type:"Delete_Transaction",
                payload:id
            }
        )
     }
     function addTransaction(transaction){
        dispatch(
            {
                type:"Add_Transaction",
                payload:transaction
            }
        )
     }
     return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
     )
}