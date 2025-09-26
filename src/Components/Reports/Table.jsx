import React, { useState } from 'react'
import { Search, ChevronRight, TrendingUp, TrendingDown, Plane, AlertCircle, CheckCircle, Clock, Timer } from 'lucide-react'

export default function Table() {
  const [searchTerm, setSearchTerm] = useState('')

  const statsCards = [
    {
      title: 'Total Reports Received',
      value: '112',
      change: '+1.35%',
      changeType: 'increase',
      icon: AlertCircle
    },
    {
      title: 'Resolved Reports',
      value: '89',
      change: '+2.1%',
      changeType: 'increase',
      icon: CheckCircle
    },
    {
      title: 'Pending Reports',
      value: '23',
      change: '-0.8%',
      changeType: 'decrease',
      icon: Clock
    },
    {
      title: 'Avg Resolution Time',
      value: '2.4h',
      change: '-12%',
      changeType: 'decrease',
      icon: Timer
    }
  ]

  const reportLogs = [
    {
      id: 'RP-1068',
      username: 'Saqib Khan',
      issueType: 'Resolved',
      status: 'Pending',
      reportOn: 'May 13, 2026'
    },
    {
      id: 'RP-1069',
      username: 'Ali Ahmed',
      issueType: 'Resolved',
      status: 'Pending',
      reportOn: 'May 12, 2026'
    },
    {
      id: 'RP-1070',
      username: 'Fatima Ali',
      issueType: 'Resolved',
      status: 'Pending',
      reportOn: 'May 11, 2026'
    },
    {
      id: 'RP-1071',
      username: 'Hassan Khan',
      issueType: 'Resolved',
      status: 'Pending',
      reportOn: 'May 10, 2026'
    }
  ]

  const issueDistribution = [
    { type: 'Booking Issue', percentage: 40, color: 'bg-blue-500' },
    { type: 'Payment Problems', percentage: 25, color: 'bg-green-500' },
    { type: 'Login Access Issue', percentage: 10, color: 'bg-yellow-500' },
    { type: 'App Bugs Crashes', percentage: 20, color: 'bg-red-500' },
    { type: 'Others', percentage: 5, color: 'bg-gray-500' }
  ]

  const trendData = [
    { week: 'Week 1', value: 10000 },
    { week: 'Week 2', value: 5000 },
    { week: 'Week 3', value: 1000 },
    { week: 'Week 4', value: 0 }
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Reports</h1>
      </div>

      {/* Statistics Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-6">
            <div className="mb-4">
            </div>
            <h3 className="text-sm font-bold text-black mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
            <div className="flex items-center gap-1 text-sm">
              <div className={`flex items-center gap-1 px-2 py-1 rounded ${
                stat.changeType === 'increase' ? 'bg-[#d4fe5b] text-black' : 'bg-[#d4fe5b] text-black'
              }`}>
                {stat.changeType === 'increase' ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {stat.change}
              </div>
              <span className="text-gray-600">from last week</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Logs Section */}
        <div className="lg:col-span-2 bg-white shadow rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Report Logs</h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search name, airline etc"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Last Month</span>
                <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  <ChevronRight size={18} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-gray-800">
                  {['Report ID', 'Username', 'Issue Type', 'Status', 'Report On'].map((header) => (
                    <th key={header} className="px-4 py-3 text-left font-medium whitespace-nowrap">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reportLogs.map((report, index) => (
                  <tr key={index} className="border-b border-gray-50">
                    <td className="px-4 py-3 font-medium text-blue-600">{report.id}</td>
                    <td className="px-4 py-3">{report.username}</td>
                    <td className="px-4 py-3">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {report.issueType}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        report.status === 'Resolved' 
                          ? 'bg-green-100 text-green-700'
                          : report.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      <div className="text-sm">{report.reportOn}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Issue Type Distribution */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-6">Issue Type Distribution</h2>
          
          {/* Circular Progress */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {issueDistribution.map((item, index) => {
                const radius = 40
                const circumference = 2 * Math.PI * radius
                const strokeDasharray = circumference
                const strokeDashoffset = circumference - (item.percentage / 100) * circumference
                const rotation = issueDistribution.slice(0, index).reduce((acc, prev) => acc + (prev.percentage / 100) * 360, 0)
                
                return (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className={`${item.color.replace('bg-', 'text-')} opacity-80`}
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      transformOrigin: '50% 50%'
                    }}
                  />
                )
              })}
            </svg>
            
            {/* Center Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="p-3 bg-blue-100 rounded-full mb-2">
                <Plane size={24} className="text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">Total Issues</span>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {issueDistribution.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-600">{item.type}</span>
                </div>
                <span className="text-sm font-medium">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Report Trend Section */}
      <div className="bg-white shadow rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Report Trend</h2>
          <span className="text-sm text-gray-600">This Month</span>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-sm text-green-600">.Solved</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <span className="text-sm text-red-600">.Unsolved</span>
          </div>
        </div>

        {/* Trend Chart */}
        <div className="h-64 relative">
          {/* Line Chart */}
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Grid Lines */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Data Points and Line */}
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              points="50,50 150,100 250,180 350,200"
            />
            
            {/* Data Points */}
            <circle cx="50" cy="50" r="4" fill="#3b82f6" />
            <circle cx="150" cy="100" r="4" fill="#3b82f6" />
            <circle cx="250" cy="180" r="4" fill="#3b82f6" />
            <circle cx="350" cy="200" r="4" fill="#3b82f6" />
            
            {/* Value Labels */}
            <text x="50" y="40" textAnchor="middle" className="text-xs fill-gray-600">10k</text>
            <text x="150" y="90" textAnchor="middle" className="text-xs fill-gray-600">5k</text>
            <text x="250" y="170" textAnchor="middle" className="text-xs fill-gray-600">1k</text>
            <text x="350" y="190" textAnchor="middle" className="text-xs fill-gray-600">0</text>
            
            {/* Week Labels */}
            <text x="50" y="220" textAnchor="middle" className="text-xs fill-gray-500">Week 1</text>
            <text x="150" y="220" textAnchor="middle" className="text-xs fill-gray-500">Week 2</text>
            <text x="250" y="220" textAnchor="middle" className="text-xs fill-gray-500">Week 3</text>
            <text x="350" y="220" textAnchor="middle" className="text-xs fill-gray-500">Week 4</text>
          </svg>
        </div>
      </div>
    </div>
  )
}
