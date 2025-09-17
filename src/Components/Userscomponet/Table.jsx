import React, { useState } from 'react'

export default function Table() {
  const [searchTerm, setSearchTerm] = useState('')

  // Sample team members data
  const [teamMembers] = useState([
    {
      id: 1,
      admin: "NaveedAbbas",
      member: "John Doe",
      email: "naveedabbas344@gmail.com",
      role: "Agent"
    },
    {
      id: 2,
      admin: "Ann Smith",
      member: "John Doe",
      email: "info@gmail.com",
      role: "Owner"
    }
  ])

  // Filter members based on search term
  const filteredMembers = teamMembers.filter(member =>
    member.admin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.member.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="px-6 py-4">
      {/* Main Container with white background and shadow */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          {/* Left Side - Team Members Title */}
          <div>
            <h1 className="text-2xl font-bold text-black">Team members</h1>
          </div>

          {/* Right Side - Search Bar and Add Member Button */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search name, Airline, etc."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-100 rounded-lg "
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Add Team Member Button */}
            <button className="bg-[#D4FE5B]  text-black px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Add team member</span>
            </button>
          </div>
        </div>

        {/* Header Strip Card */}
        <div className="h-16 bg-[#EEFFBD] rounded-lg mb-4 px-6 flex items-center">
          <div className="flex w-full">
            {/* Admin Column */}
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">Admin</span>
              <svg className="ml-2 h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>

            {/* Member Column */}
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">Member</span>
              <svg className="ml-2 h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>

            {/* Email Column */}
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">Email</span>
              <svg className="ml-2 h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>

            {/* Role Column */}
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold
               text-gray-600 uppercase tracking-wider">Role</span>
              <svg className="ml-2 h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Data Rows */}
        <div className="space-y-2">
          {filteredMembers.map((member, index) => (
            <div key={member.id} className={`h-16 flex items-center px-6 ${index !== filteredMembers.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <div className="flex w-full">
                {/* Admin Data */}
                <div className="flex-1">
                  <span className="text-base font-semibold text-gray-800">{member.admin}</span>
                </div>

                {/* Member Data */}
                <div className="flex-1">
                  <span className="text-base font-semibold text-gray-900">{member.member}</span>
                </div>

                {/* Email Data */}
                <div className="flex-1">
                  <span className="text-base font-semibold text-gray-900">{member.email}</span>
                </div>

                {/* Role Data */}
                <div className="flex-1">
                  <span className="text-base font-semibold text-gray-900">{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
