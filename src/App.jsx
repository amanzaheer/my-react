import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Flights from './Pages/Flights'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Users from './Pages/Users'

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
      </Routes>
    </Router>
  )
}
