// API Test utility for signup endpoint
export const testSignupAPI = async () => {
  const testData = {
    fullName: "Test User",
    username: "testuser123",
    email: "test@example.com",
    phone: "1234567890",
    password: "testpass123",
    role: "user"
  }

  try {
    console.log('Testing signup API with data:', testData)
    
    const response = await fetch('https://stingray-app-3fkqv.ondigitalocean.app/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    })

    const data = await response.json()
    
    console.log('API Response Status:', response.status)
    console.log('API Response Data:', data)
    
    return {
      success: response.ok,
      status: response.status,
      data: data
    }
  } catch (error) {
    console.error('API Test Error:', error)
    return {
      success: false,
      error: error.message
    }
  }
}

// Test login API
export const testLoginAPI = async () => {
  const testData = {
    username: "testuser123",
    password: "testpass123"
  }

  try {
    console.log('Testing login API with data:', testData)
    
    const response = await fetch('https://stingray-app-3fkqv.ondigitalocean.app/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    })

    const data = await response.json()
    
    console.log('Login API Response Status:', response.status)
    console.log('Login API Response Data:', data)
    
    return {
      success: response.ok,
      status: response.status,
      data: data
    }
  } catch (error) {
    console.error('Login API Test Error:', error)
    return {
      success: false,
      error: error.message
    }
  }
}
