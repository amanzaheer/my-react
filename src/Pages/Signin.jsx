import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAuthData, isAuthenticated } from '../utils/auth'

export default function Signin() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard', { replace: true })
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Basic validation
    if (!formData.username.trim() || !formData.password.trim()) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('https://stingray-app-3fkqv.ondigitalocean.app/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username.trim(),
          password: formData.password
        })
      })
      console.log("response is",response)

      const data = await response.json()
      console.log("data is fetched successfully hogaya hai ",data)
      console.log("data.token",data?.token) 
      console.log("data.data.token slkdjflkdsjflkdsjflkdsjlkfjdslkfjlkdsj",data?.data?.token )

      if (response.ok) {
        // Success - store token and user data
        console.log('Signin successful:', data)
        console.log('Response data structure:', Object.keys(data))
        
        // Store authentication data using utility function
        // Handle different possible response structures
        const token = data.data.token || data.accessToken || data.access_token
        console.log("token is",token)
        const user = data.user || data.userData || data.data
        
        if (token) {
          setAuthData(token, user)
          localStorage.setItem('access_token', token)
          console.log('Token stored:', token)
        } else {
          console.log('No token found in response, creating temporary token')
          // If no token from API, create a temporary one for successful signin
          setAuthData('temp_token_' + Date.now(), user || { username: formData.username })
        }
        
        // Show success message
        setError('')
        alert('Signin successful! Redirecting to dashboard...')
        
        // Redirect to dashboard immediately
        navigate('/dashboard', { replace: true })
        
      } else {
        // Error from API
        setError(data.message || data.error || 'Signin failed. Please check your credentials.')
      }
    } catch (err) {
      // Network or other errors
      setError('Network error. Please check your connection and try again.')
      console.error('Signin error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">OggoAir</h1>
          <h2 className="text-xl">
            <span className="text-yellow-500 font-semibold">Let's</span>
            <span className="text-black font-semibold"> Sign In</span>
          </h2>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your username"
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 pr-12"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 text-gray-400 hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forget Password */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200"
            >
              Forget Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 shadow-lg ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105'
            } text-white`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing Up...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200">
              Sign Up
            </a>
          </p>
          
          {/* Debug Test Button */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                console.log('Testing auth flow...')
                setAuthData('test_token_123', { username: 'testuser' })
                console.log('Test token set, navigating to dashboard...')
                navigate('/dashboard', { replace: true })
              }}
              className="text-xs text-gray-500 hover:text-gray-700 underline"
            >
              Test Auth Flow (Debug)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
