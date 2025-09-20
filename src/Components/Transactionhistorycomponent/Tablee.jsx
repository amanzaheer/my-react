import React, { useState } from 'react'

export default function Tablee() {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState([])
  const [showDropdown, setShowDropdown] = useState(null)
  const [transactionStatus, setTransactionStatus] = useState({})
  const [dateRange, setDateRange] = useState('Jan 1-31, 2025')
  const [showDatePicker, setShowDatePicker] = useState(false)

  const transactions = [
    { 
      id: 1, 
      transactionId: 'TXN-001', 
      name: 'John Doe', 
      amount: '$123', 
      date: 'Jan 27, 2025',
      paymentMethod: 'Visa Card',
      cardNumber: '****4848',
      paymentType: 'Card Payment',
      status: 'Approved'
    },
    { 
      id: 2, 
      transactionId: 'TXN-002', 
      name: 'Jane Smith', 
      amount: '$456', 
      date: 'Jan 26, 2025',
      paymentMethod: 'Master Card',
      cardNumber: '****1234',
      paymentType: 'Card Payment',
      status: 'Pending'
    },
    { 
      id: 3, 
      transactionId: 'TXN-003', 
      name: 'Mike John', 
      amount: '$789', 
      date: 'Jan 25, 2025',
      paymentMethod: 'Visa Card',
      cardNumber: '****5678',
      paymentType: 'Card Payment',
      status: 'Declined'
    }
  ]

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    if (!selectAll) {
      setSelectedRows(transactions.map(transaction => transaction.id))
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

  const handleStatusChange = (transactionId, newStatus) => {
    setTransactionStatus(prev => ({
      ...prev,
      [transactionId]: newStatus
    }))
    setShowDropdown(null)
  }

  const getTransactionStatus = (transactionId) => {
    return transactionStatus[transactionId] || transactions.find(t => t.id === transactionId)?.status || 'Approved'
  }

  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange)
    setShowDatePicker(false)
  }

  const getCurrentDateRange = () => {
    const now = new Date()
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1)
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
    
    return `${formatDate(firstDay)}-${formatDate(lastDay)}, ${now.getFullYear()}`
  }

  return (
    <div className="p-6">
      {/* Transaction History Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Transaction History</h1>
      
      {/* Main Card Container */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-none p-6 overflow-hidden">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Left Side Status Buttons */}
          <div className="bg-gray-200 rounded-full p-1">
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
                All ({selectedRows.length > 0 ? selectedRows.length : transactions.length})
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-base bg-gray-200 text-gray-600 hover:bg-gray-300">
                Approved
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-base bg-gray-200 text-gray-600 hover:bg-gray-300">
                Declined
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-base bg-gray-200 text-gray-600 hover:bg-gray-300">
                Pending
              </button>
            </div>
          </div>

          {/* Right Side Search and Date */}
          <div className="flex gap-3 items-center">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search transactions..."
                className="w-72 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base bg-gray-100"
              />
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700 font-medium text-sm">{dateRange}</span>
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Date Picker Dropdown */}
              {showDatePicker && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  <div className="p-2">
                    <button 
                      onClick={() => handleDateChange('Today')}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Today
                    </button>
                    <button 
                      onClick={() => handleDateChange('Yesterday')}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Yesterday
                    </button>
                    <button 
                      onClick={() => handleDateChange('Last 7 days')}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Last 7 days
                    </button>
                    <button 
                      onClick={() => handleDateChange('Last 30 days')}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Last 30 days
                    </button>
                    <button 
                      onClick={() => handleDateChange(getCurrentDateRange())}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      This month
                    </button>
                    <button 
                      onClick={() => handleDateChange('Custom range')}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      Custom range
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="relative">
          <table className="w-full">
            <thead className="">
              <tr>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className={`w-4 h-4 rounded ${selectAll ? 'border-green-500' : 'border-gray-300'}`}
                      style={{
                        backgroundColor: selectAll ? '#D4FE5B' : undefined,
                        accentColor: selectAll ? '#D4FE5B' : undefined
                      }}
                    />
                    <span>Description</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Transaction</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Date</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Payment Method</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Payment Complete</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Status</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
                <th className="px-3 py-3 text-left text-sm font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <span>Actions</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        checked={selectedRows.includes(transaction.id)}
                        onChange={() => handleRowSelect(transaction.id)}
                        className={`w-4 h-4 rounded border-gray-300`}
                        style={{
                          backgroundColor: selectedRows.includes(transaction.id) ? '#D4FE5B' : undefined,
                          accentColor: selectedRows.includes(transaction.id) ? '#D4FE5B' : undefined
                        }}
                      />
                      <span className="text-base text-gray-800 truncate font-semibold">{transaction.date}</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-800">
                    <div>
                      <div className="font-semibold text-gray-900 truncate">{transaction.transactionId}</div>
                      <div className="text-gray-600 truncate">{transaction.name}</div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-base text-gray-800">
                    <span className="truncate block font-semibold">{transaction.date}</span>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-800">
                    <div>
                      <div className="font-semibold text-gray-900 truncate">{transaction.paymentMethod}</div>
                      <div className="text-gray-500 truncate">{transaction.cardNumber}</div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-sm text-gray-800">
                    <div>
                      <div className="font-semibold text-gray-900 truncate">{transaction.amount}</div>
                      <div className="text-gray-500 truncate font-semibold">{transaction.date}</div>
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <span className={`px-2 py-1 rounded-xl text-xs font-semibold ${
                      getTransactionStatus(transaction.id) === 'Approved' 
                        ? 'bg-green-100 text-green-800' 
                        : getTransactionStatus(transaction.id) === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {getTransactionStatus(transaction.id)}
                    </span>
                  </td>
                  <td className="px-3 py-3 relative">
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => setShowDropdown(showDropdown === transaction.id ? null : transaction.id)}
                        className="p-2 bg-gray-100 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-100 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-200 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Dropdown Menu */}
                    {showDropdown === transaction.id && (
                      <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <button 
                          onClick={() => handleStatusChange(transaction.id, 'Approved')}
                          className="w-full px-4 py-3 text-left text-base text-green-600 hover:bg-green-50 flex items-center gap-3 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Approved
                        </button>
                        <button 
                          onClick={() => handleStatusChange(transaction.id, 'Cancelled')}
                          className="w-full px-4 py-3 text-left text-base text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Cancelled
                        </button>
                        <button 
                          onClick={() => handleStatusChange(transaction.id, 'Pending')}
                          className="w-full px-4 py-3 text-left text-base text-yellow-600 hover:bg-yellow-50 flex items-center gap-3 transition-colors duration-200"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Pending
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
