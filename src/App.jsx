import { useState } from 'react'
import Home from './components/home';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Expense from './components/expense';
import "./App.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  
  },
  {
    path: "/expense",
    element: <Expense/>
  
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
