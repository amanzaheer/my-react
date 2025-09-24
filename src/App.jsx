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

import Hotels from './Pages/Hotels'
import Buses from './Pages/Buses'
import Cars from './Pages/Cars'
import Rails from './Pages/Rails'
import Createpaymentlink from './Pages/Createpaymentlink'
import Support from './Pages/Support'
import CreateTrip from './Pages/CreateTrip'
import TripTemplates from './Pages/TripTemplates'
import FinancialReports from './Pages/FinancialReports'
// import Analytics from './Pages/Analytics'
import Promotions from './Pages/Promotions'
import Coupons from './Pages/Coupons'
import Flightsdetail from './Pages/Flightsdetail'
import Hotelsdetail from './Pages/Hotelsdetail'
import Carsdetail from './Pages/Carsdetail'
import Busesdetail from './Pages/Busesdetail'
import Railsdetail from './Pages/Railsdetail'
import Reports from './Pages/Reports'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/flightsdetail/:flightid' element={<ProtectedRoute><Flightsdetail /></ProtectedRoute>} />
        <Route path='/flights' element={<ProtectedRoute><Flights /></ProtectedRoute>} />
        <Route path='/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path='/customers' element={<ProtectedRoute><Customers /></ProtectedRoute>} />
        <Route path='/transaction-history' element={<ProtectedRoute><Transactionhistory /></ProtectedRoute>} />
        <Route path='/hotelsdetail/:id' element={<ProtectedRoute><Hotelsdetail /></ProtectedRoute>} />
        <Route path='/hotels' element={<ProtectedRoute><Hotels /></ProtectedRoute>} />
        <Route path='/buses' element={<ProtectedRoute><Buses /></ProtectedRoute>} />
        <Route path='/busesdetail/:id' element={<ProtectedRoute><Busesdetail /></ProtectedRoute>} />
        <Route path='/cars' element={<ProtectedRoute><Cars /></ProtectedRoute>} />
        <Route path='/carsdetail/:id' element={<ProtectedRoute><Carsdetail /></ProtectedRoute>} />
        <Route path='/rails' element={<ProtectedRoute><Rails /></ProtectedRoute>} />
        <Route path='/railsdetail/:id' element={<ProtectedRoute><Railsdetail /></ProtectedRoute>} />
        <Route path='/create-payment-link' element={<ProtectedRoute><Createpaymentlink /></ProtectedRoute>} />
        <Route path='/support' element={<ProtectedRoute><Support /></ProtectedRoute>} />
        <Route path='/promotions' element={<ProtectedRoute><Promotions /></ProtectedRoute>} />
        <Route path='/coupons' element={<ProtectedRoute><Coupons /></ProtectedRoute>} />
        <Route path='/create-trip' element={<ProtectedRoute><CreateTrip /></ProtectedRoute>} />
        <Route path='/trip-templates' element={<ProtectedRoute><TripTemplates /></ProtectedRoute>} />
        <Route path='/financial-reports' element={<ProtectedRoute><FinancialReports /></ProtectedRoute>} />
        <Route path='/reports' element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        

      </Routes>
    </Router>
  )
}
