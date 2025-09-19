import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Table() {
  const [searchTerm, setSearchTerm] = useState('')
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [addUserLoading, setAddUserLoading] = useState(false)
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    role: 'User'
  })

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('authToken')
      const response = await axios.get(
        'https://stingray-app-3fkqv.ondigitalocean.app/api/users',
        {
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` })
          }
        }
      )

      // ✅ Transform response to match the new header requirements
      const apiUsers = response.data?.data?.users || []
      const transformed = apiUsers.map((u, i) => ({
        id: u.id || i + 1,
        fullName: u.fullName || u.name || u.username || 'N/A',
        username: u.username || 'N/A',
        email: u.email || 'N/A',
        role: u.role || 'User'
      }))

      setTeamMembers(transformed)
    } catch (err) {
      console.error('Error fetching users:', err)
      setError('Error fetching users. Please try again.')
      setTeamMembers([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleAddUser = async (e) => {
    e.preventDefault()
    setAddUserLoading(true)
    setError('')
    try {
      const token = localStorage.getItem('authToken')
      const response = await fetch(
        'https://stingray-app-3fkqv.ondigitalocean.app/api/users/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` })
          },
          body: JSON.stringify({
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            role: newUser.role
          })
        }
      )

      if (response.ok) {
        const data = await response.json()
        const newUserData = {
          id: data.id || teamMembers.length + 1,
          fullName: data.fullName || newUser.username,
          username: data.username || newUser.username,
          email: data.email || newUser.email,
          role: data.role || newUser.role
        }
        setTeamMembers([...teamMembers, newUserData])
        setNewUser({ username: '', email: '', password: '', role: 'User' })
        setShowAddModal(false)
        alert('User added successfully!')
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Failed to add user. Please try again.')
      }
    } catch (err) {
      console.error('Error adding user:', err)
      setError('Network error. Please check your connection.')
    } finally {
      setAddUserLoading(false)
    }
  }

  const handleNewUserChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const filteredMembers = teamMembers.filter((m) =>
    [m.fullName, m.username, m.email, m.role]
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <div className="px-6 py-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Team members</h1>

          {/* Search + Add */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search full name, username, email, role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
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

            <button
              onClick={() => setShowAddModal(true)}
              className="bg-[#D4FE5B] text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-[#C4EE4B]"
            >
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

        {/* ✅ Updated Column Headers */}
        <div className="h-16 bg-[#EEFFBD] rounded-lg mb-4 px-6 flex items-center">
          <div className="flex w-full">
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">Full name</span>
            </div>
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">Username</span>
            </div>
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">Email</span>
            </div>
            <div className="flex-1 flex items-center">
              <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">Role</span>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500 mb-2"></div>
            <p className="text-gray-600">Loading users...</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`h-16 flex items-center px-6 ${
                    index !== teamMembers.length - 1
                      ? 'border-b border-gray-200'
                      : ''
                  }`}
                >
                  <div className="flex w-full">
                    <div className="flex-1">
                      <span className="text-base font-semibold text-gray-800">{member.fullName}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-semibold text-gray-900">{member.username}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-semibold text-gray-900">{member.email}</span>
                    </div>
                    <div className="flex-1">
                      <span className="text-base font-semibold text-gray-900">{member.role}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  {searchTerm
                    ? 'No users found matching your search.'
                    : 'No users found in the system.'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add Member Modal remains unchanged */}
      {showAddModal && (
        /* … same modal code as before … */
        <div>…</div>
      )}
    </div>
  )
}
