import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Flights from './Pages/Flights'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Users from './Pages/Users'
import Customers from './Pages/Customers'
import Transactionhistory from './Pages/Transactionhistory'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/flights' element={<Flights />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/users' element={<Users />} />
        <Route path='/customers' element={<Customers />} />
        {/* <Route path='/admin-fund' element={ />} /> */}
        <Route path='/transaction-history' element={<Transactionhistory />} />
      </Routes>
    </Router>
  )
}
