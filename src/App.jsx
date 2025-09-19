import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Flights from './Pages/Flights'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Users from './Pages/Users'
import Customers from './Pages/Customers'
import Transactionhistory from './Pages/Transactionhistory'
import ProtectedRoute from './Components/ProtectedRoute'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/flights' element={<ProtectedRoute><Flights /></ProtectedRoute>} />
        <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path='/customers' element={<ProtectedRoute><Customers /></ProtectedRoute>} />
        <Route path='/transaction-history' element={<ProtectedRoute><Transactionhistory /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}
