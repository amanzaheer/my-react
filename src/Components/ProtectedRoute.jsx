import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isAuthenticated, isTokenValid } from '../utils/auth'

const ProtectedRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = () => {
      console.log('Checking authentication...')
      const authStatus = isAuthenticated()
      console.log('Authentication status:', authStatus)
      
      if (!authStatus) {
        console.log('Not authenticated, redirecting to signin')
        navigate('/signin', { replace: true })
      } else {
        console.log('Authenticated, allowing access')
        setIsLoading(false)
      }
    }

    // Add a small delay to ensure localStorage is updated
    const timer = setTimeout(checkAuth, 100)
    
    return () => clearTimeout(timer)
  }, [navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return children
}

export default ProtectedRoute
