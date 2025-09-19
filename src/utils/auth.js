// Authentication utility functions

export const getAuthToken = () => {
  return localStorage.getItem('authToken')
}

export const getUserData = () => {
  const userData = localStorage.getItem('userData')
  return userData ? JSON.parse(userData) : null
}

export const isAuthenticated = () => {
  const token = getAuthToken()
  console.log('Auth check - Token:', token)
  const isAuth = !!token
  console.log('Auth check - Is authenticated:', isAuth)
  console.log('Auth check - Token length:', token ? token.length : 0)
  return isAuth
}

// Validate token format and expiration (simplified)
export const isTokenValid = () => {
  const token = getAuthToken()
  if (!token) return false
  
  // For now, just check if token exists and is not empty
  // This prevents issues with temporary tokens or non-JWT tokens
  return token.length > 0
}

export const logout = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userData')
  // Use window.location for logout to ensure complete page reload
  window.location.href = '/signin'
}

export const setAuthData = (token, userData) => {
  console.log('Setting auth data - Token:', token)
  console.log('Setting auth data - User:', userData)
  
  if (token) {
    localStorage.setItem('authToken', token)
    console.log('Token stored in localStorage')
  }
  if (userData) {
    localStorage.setItem('userData', JSON.stringify(userData))
    console.log('User data stored in localStorage')
  }
  
  // Verify storage
  console.log('Verification - Stored token:', localStorage.getItem('authToken'))
  console.log('Verification - Stored user:', localStorage.getItem('userData'))
}

// API request helper with authentication
export const apiRequest = async (url, options = {}) => {
  const token = getAuthToken()
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...options.headers,
    },
  }

  const response = await fetch(url, {
    ...defaultOptions,
    ...options,
  })

  // Don't automatically logout on 401 - let the calling component handle it
  // This prevents unwanted redirects when API calls fail
  console.log('API Response status:', response.status)
  
  return response
}
