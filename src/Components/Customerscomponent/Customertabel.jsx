import React, { useState } from 'react'

export default function Customertabel() {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [showDropdown, setShowDropdown] = useState(null)
  const [customerStatus, setCustomerStatus] = useState({})

  const customers = [
    { id: 1, name: 'Paris Milton', website: 'Oggpair innovation ', country: 'United States', phone: '+1 233567489', email: 'info@gmail.com', status: 'Active', date: '2026-07-01' },
    { id: 2, name: 'Paris Milton', website: 'Oggpair innovation ', country: 'United States', phone: '+1 233567489', email: 'info@gmail.com', status: 'Inactive', date: '2026-07-01' },
    { id: 3, name: 'Paris Milton', website: 'Oggpair innovation ', country: 'United States', phone: '+1 233567489', email: 'info@gmail.com', status: 'Deleted', date: '2026-07-01' },
    { id: 4, name: 'Paris Milton', website: 'Oggpair innovation', country: 'United States', phone: '+1 233567489', email: 'info@gmail.com', status: 'Active', date: '2026-07-01' },
    { id: 5, name: 'Paris Milton', website: 'Oggpair innovation ', country: 'United States', phone: '+1 233567489', email: 'info@gmail.com', status: 'Active', date: '2026-07-01' },
    { id: 6, name: 'Paris Milton', website: 'Oggpair innovation ', country: 'United States', phone: '+1 233567489', email: 'info@gmail.com', status: 'Active', date: '2026-07-01' },
    { id: 7, name: 'Paris Milton', website: 'Oggpair innovation ', country: 'United States', phone: '+1 233567489', email: 'info@gmail.com', status: 'Active', date: '2026-07-01' }
  ]

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    if (!selectAll) {
      setSelectedRows(customers.map(customer => customer.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id))
    } else {
      setSelectedRows([...selectedRows, id])
    }
  }

  const handleStatusChange = (customerId, newStatus) => {
    setCustomerStatus(prev => ({
      ...prev,
      [customerId]: newStatus
    }))
    setShowDropdown(null)
  }

  const getCustomerStatus = (customerId) => {
    return customerStatus[customerId] || customers.find(c => c.id === customerId)?.status || 'Active'
  }

  return (
    <div className="p-1">
      {/* Customers Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-3">Customers</h1>
      
      {/* Main Card Container */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-none p-6 overflow-hidden">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-3">
          {/* Left Side Buttons */}
          <div className="bg-gray-200 rounded-full  p-1">
            <div className="flex gap-2">
              <button 
                className={`px-4 py-2 rounded-full font-semibold text-base ${
                  selectAll || selectedRows.length > 0 
                    ? 'text-gray-800' 
                    : 'bg-gray-200 text-gray-600'
                }`}
                style={{
                  backgroundColor: selectAll || selectedRows.length > 0 ? '#D4FE5B' : undefined
                }}
              >
                All ({selectedRows.length > 0 ? selectedRows.length : customers.length})
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-base bg-gray-200 text-gray-600 hover:bg-gray-300">
                Active
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-base bg-gray-200 text-gray-600 hover:bg-gray-300">
                Inactive
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-base bg-gray-200 text-gray-600 hover:bg-gray-300">
                +Add
              </button>
            </div>
          </div>

          {/* Right Side Search and Calendar */}
          <div className="flex gap-3 items-center">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Search name, email or phone number"
                  className="w-72 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-gray-100"
                />
              </div>
            <div className="flex items-center gap-2 px-3 py-2  rounded-lg bg-gray-100">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700 font-medium text-sm">1-8 july 2025</span>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="relative">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className={`w-5 h-5 rounded ${selectAll ? 'border-green-500' : 'border-gray-300'}`}
                      style={{
                        backgroundColor: selectAll ? '#D4FE5B' : undefined,
                        accentColor: selectAll ? '#D4FE5B' : undefined
                      }}
                    />
                    <span>Name</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Website Platform</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Customer</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Country</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Phone No</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Email</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Status</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-2 py-3 text-left text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Actions</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={selectedRows.includes(customer.id)}
                        onChange={() => handleRowSelect(customer.id)}
                        className={`w-5 h-5 rounded border-gray-300`}
                        style={{
                          backgroundColor: selectedRows.includes(customer.id) ? '#D4FE5B' : undefined,
                          accentColor: selectedRows.includes(customer.id) ? '#D4FE5B' : undefined
                        }}
                      />
                      <span className="text-base text-gray-800 truncate font-semibold">{customer.date}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-base text-gray-800">
                    <span className="truncate block font-semibold">{customer.website}</span>
                  </td>
                  <td className="px-2 py-3 text-base text-gray-800">
                    <div className="flex items-center gap-2">
                      <img 
                        src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=" 
                        alt={customer.name}
                        className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                      />
                      <span className="truncate font-semibold">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-base text-gray-800">
                    <span className="truncate block font-semibold">{customer.country}</span>
                  </td>
                  <td className="px-2 py-3 text-base text-gray-800">
                    <span className="truncate block font-semibold">{customer.phone}</span>
                  </td>
                  <td className="px-2 py-3 text-base text-gray-800">
                    <span className="truncate block font-semibold">{customer.email}</span>
                  </td>
                  <td className="px-2 py-3">
                    <button className={`px-3 py-1 rounded-xl text-xs border ${
                      getCustomerStatus(customer.id) === 'Active' 
                        ? 'bg-green-100 text-green-800 border-green-200' 
                        : getCustomerStatus(customer.id) === 'Inactive'
                        ? 'bg-gray-100 text-gray-800 border-gray-200'
                        : 'bg-red-100 text-red-800 border-red-200'
                    }`}>
                      {getCustomerStatus(customer.id)}
                    </button>
                  </td>
                  <td className="px-2 py-3 relative">
                    <button 
                      onClick={() => setShowDropdown(showDropdown === customer.id ? null : customer.id)}
                      className="p-2 bg-gray-100 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    {showDropdown === customer.id && (
                      <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        <button 
                          onClick={() => handleStatusChange(customer.id, 'Active')}
                          className="w-full px-4 py-3 text-left text-sm text-green-600 hover:bg-green-50 flex items-center gap-3 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Active
                        </button>
                        <button 
                          onClick={() => handleStatusChange(customer.id, 'Inactive')}
                          className="w-full px-4 py-3 text-left text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Inactive
                        </button>
                        <button 
                          onClick={() => handleStatusChange(customer.id, 'Deleted')}
                          className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}