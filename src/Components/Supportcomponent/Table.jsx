import React, { useState } from 'react'

export default function Table() {
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Sample profiles data
  const profiles = [
    {
      id: 1,
      name: "Alice Johnson",
      lastMessage: "Thank you for your help!",
      time: "9:15 AM",
      unread: 2,
      avatar: "AJ",
      profileImage: "https://static.vecteezy.com/system/resources/previews/024/354/241/non_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg",
      online: true,
      customerType: "Customer"
    },
    {
      id: 2,
      name: "Bob Smith",
      lastMessage: "I need assistance with booking",
      time: "8:45 AM",
      unread: 0,
      avatar: "BS",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      online: false,
      customerType: "Customer"
    },
    {
      id: 3,
      name: "Carol Davis",
      lastMessage: "Can you help me with payment?",
      time: "8:30 AM",
      unread: 1,
      avatar: "CD",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      online: true,
      customerType: "Customer"
    },
    {
      id: 4,
      name: "David Wilson",
      lastMessage: "Flight booking issue",
      time: "8:15 AM",
      unread: 0,
      avatar: "DW",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      online: false,
      customerType: "Customer"
    },
    {
      id: 5,
      name: "Emma Brown",
      lastMessage: "Hotel reservation problem",
      time: "7:50 AM",
      unread: 3,
      avatar: "EB",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      online: true,
      customerType: "Customer"
    },
    {
      id: 6,
      name: "Frank Miller",
      lastMessage: "Need refund information",
      time: "7:30 AM",
      unread: 0,
      avatar: "FM",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      online: false,
      customerType: "Customer"
    },
    {
      id: 7,
      name: "Grace Lee",
      lastMessage: "Account verification",
      time: "7:15 AM",
      unread: 1,
      avatar: "GL",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      online: true,
      customerType: "Customer"
    },
    {
      id: 8,
      name: "Henry Taylor",
      lastMessage: "Booking confirmation",
      time: "6:45 AM",
      unread: 0,
      avatar: "HT",
      profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      online: false,
      customerType: "Customer"
    },
    {
      id: 9,
      name: "Ivy Chen",
      lastMessage: "Payment method issue",
      time: "6:30 AM",
      unread: 2,
      avatar: "IC",
      profileImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      online: true,
      customerType: "Customer"
    },
    {
      id: 10,
      name: "Jack Anderson",
      lastMessage: "Customer service inquiry",
      time: "6:15 AM",
      unread: 0,
      avatar: "JA",
      profileImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      online: false,
      customerType: "Customer"
    }
  ]

  // Sample chat messages for different profiles
  const profileMessages = {
    1: [ // Alice Johnson
      { id: 1, sender: "Alice Johnson", message: "Hello, I need help with my booking", time: "9:10 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Alice! I'd be happy to help you with your booking. Can you please provide your booking reference number?", time: "9:12 AM", isUser: true },
      { id: 3, sender: "Alice Johnson", message: "Sure, it's ABC123456", time: "9:13 AM", isUser: false },
      { id: 4, sender: "Support", message: "Thank you! I can see your booking. What specific issue are you facing?", time: "9:14 AM", isUser: true },
      { id: 5, sender: "Alice Johnson", message: "I want to change my flight date. Is that possible?", time: "9:15 AM", isUser: false }
    ],
    2: [ // Bob Smith
      { id: 1, sender: "Bob Smith", message: "Hi, I'm having trouble with my hotel booking", time: "8:40 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Bob! I can help you with your hotel booking. What seems to be the issue?", time: "8:42 AM", isUser: true },
      { id: 3, sender: "Bob Smith", message: "The hotel says my reservation is not confirmed", time: "8:43 AM", isUser: false },
      { id: 4, sender: "Support", message: "Let me check your reservation status. Can you provide your booking ID?", time: "8:44 AM", isUser: true },
      { id: 5, sender: "Bob Smith", message: "Yes, it's HTL789012", time: "8:45 AM", isUser: false }
    ],
    3: [ // Carol Davis
      { id: 1, sender: "Carol Davis", message: "I need help with payment processing", time: "8:25 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Carol! I'll help you with the payment issue. What payment method are you trying to use?", time: "8:27 AM", isUser: true },
      { id: 3, sender: "Carol Davis", message: "My credit card keeps getting declined", time: "8:28 AM", isUser: false },
      { id: 4, sender: "Support", message: "Let me check your payment details. Sometimes it's just a temporary issue with the bank", time: "8:29 AM", isUser: true },
      { id: 5, sender: "Carol Davis", message: "Can you try processing it again?", time: "8:30 AM", isUser: false }
    ],
    4: [ // David Wilson
      { id: 1, sender: "David Wilson", message: "My flight booking has an error", time: "8:10 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello David! I'm sorry to hear about the booking error. Can you tell me what specific error you're seeing?", time: "8:12 AM", isUser: true },
      { id: 3, sender: "David Wilson", message: "It shows the wrong departure time", time: "8:13 AM", isUser: false },
      { id: 4, sender: "Support", message: "Let me check your flight details. Can you provide your booking reference?", time: "8:14 AM", isUser: true },
      { id: 5, sender: "David Wilson", message: "FLT456789", time: "8:15 AM", isUser: false }
    ],
    5: [ // Emma Brown
      { id: 1, sender: "Emma Brown", message: "I have a problem with my hotel reservation", time: "7:45 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Emma! I'll help you resolve the hotel reservation issue. What's the problem?", time: "7:47 AM", isUser: true },
      { id: 3, sender: "Emma Brown", message: "The hotel is overbooked and they can't accommodate me", time: "7:48 AM", isUser: false },
      { id: 4, sender: "Support", message: "I understand your concern. Let me find you an alternative hotel with similar amenities", time: "7:49 AM", isUser: true },
      { id: 5, sender: "Emma Brown", message: "That would be great, thank you!", time: "7:50 AM", isUser: false }
    ],
    6: [ // Frank Miller
      { id: 1, sender: "Frank Miller", message: "I need information about refunds", time: "7:25 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Frank! I can help you with refund information. What type of refund are you looking for?", time: "7:27 AM", isUser: true },
      { id: 3, sender: "Frank Miller", message: "I cancelled my trip and want to know about the refund policy", time: "7:28 AM", isUser: false },
      { id: 4, sender: "Support", message: "Let me check your booking details and our refund policy for you", time: "7:29 AM", isUser: true },
      { id: 5, sender: "Frank Miller", message: "How long does it take to process?", time: "7:30 AM", isUser: false }
    ],
    7: [ // Grace Lee
      { id: 1, sender: "Grace Lee", message: "I need help with account verification", time: "7:10 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Grace! I'll help you with account verification. What documents do you need to submit?", time: "7:12 AM", isUser: true },
      { id: 3, sender: "Grace Lee", message: "I've uploaded my passport but it's still pending", time: "7:13 AM", isUser: false },
      { id: 4, sender: "Support", message: "Let me check the status of your verification. Sometimes it takes 24-48 hours", time: "7:14 AM", isUser: true },
      { id: 5, sender: "Grace Lee", message: "Can you expedite the process?", time: "7:15 AM", isUser: false }
    ],
    8: [ // Henry Taylor
      { id: 1, sender: "Henry Taylor", message: "I need confirmation for my booking", time: "6:40 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Henry! I can help you get your booking confirmation. What's your booking reference?", time: "6:42 AM", isUser: true },
      { id: 3, sender: "Henry Taylor", message: "I haven't received any confirmation email", time: "6:43 AM", isUser: false },
      { id: 4, sender: "Support", message: "Let me check your booking and resend the confirmation email", time: "6:44 AM", isUser: true },
      { id: 5, sender: "Henry Taylor", message: "Thank you, I'll check my email", time: "6:45 AM", isUser: false }
    ],
    9: [ // Ivy Chen
      { id: 1, sender: "Ivy Chen", message: "I'm having payment method issues", time: "6:25 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Ivy! I'll help you resolve the payment method issue. What payment method are you trying to use?", time: "6:27 AM", isUser: true },
      { id: 3, sender: "Ivy Chen", message: "My PayPal account isn't working", time: "6:28 AM", isUser: false },
      { id: 4, sender: "Support", message: "Let me check your PayPal integration. Sometimes there are temporary connection issues", time: "6:29 AM", isUser: true },
      { id: 5, sender: "Ivy Chen", message: "Can you try a different payment method?", time: "6:30 AM", isUser: false }
    ],
    10: [ // Jack Anderson
      { id: 1, sender: "Jack Anderson", message: "I have a general customer service inquiry", time: "6:10 AM", isUser: false },
      { id: 2, sender: "Support", message: "Hello Jack! I'm here to help with your inquiry. What can I assist you with today?", time: "6:12 AM", isUser: true },
      { id: 3, sender: "Jack Anderson", message: "I want to know about your loyalty program benefits", time: "6:13 AM", isUser: false },
      { id: 4, sender: "Support", message: "Great question! Let me explain our loyalty program benefits and how you can earn points", time: "6:14 AM", isUser: true },
      { id: 5, sender: "Jack Anderson", message: "That sounds interesting, tell me more", time: "6:15 AM", isUser: false }
    ]
  }

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Card - Profile List */}
      <div className="w-3/10 bg-white border border-gray-200 flex flex-col">
        {/* Search Bar */}
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search name, chat, etc..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-2.5">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute right-3 top-2.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#d4fe5b'}}>
                <svg className="w-3 h-3" style={{color: '#000'}} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Profile List */}
        <div className="flex-1 overflow-y-auto">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleProfileClick(profile)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedProfile?.id === profile.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {profile.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                        {profile.name}
                      </h3>
                       <span className="text-xs px-2 py-0.5 rounded-full" style={{backgroundColor: '#d4fe5b', color: '#000'}}>
                         {profile.customerType}
                       </span>
                    </div>
                    <span className="text-xs text-gray-500">{profile.time}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm text-gray-600 truncate">{profile.lastMessage}</p>
                     {profile.unread > 0 && (
                       <span className="text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{backgroundColor: '#d4fe5b', color: '#000'}}>
                         {profile.unread}
                       </span>
                     )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Card - Chat Messages */}
      <div className="w-1/2 bg-white border border-gray-200 flex flex-col">
        {selectedProfile ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                     src="https://static.vecteezy.com/system/resources/previews/024/354/241/non_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg"
                    alt={selectedProfile.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
    <div>
                    <h3 className="font-semibold text-gray-900">{selectedProfile.name}</h3>
                    <p className="text-sm text-gray-500">
                      {selectedProfile.online ? 'Online' : 'Last seen recently'}
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {profileMessages[selectedProfile.id]?.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.isUser
                        ? 'bg-yellow-100 text-gray-900'
                        : 'bg-green-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                  </div>
                  <p className={`text-xs mt-1 ${
                    msg.isUser ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {msg.time}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="😊 Type a message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 bg-green-400 hover:bg-green-500 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a profile from the left to start chatting</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Card - Profile Details */}
      <div className="w-1/4 bg-white border border-gray-200 flex flex-col">
        {selectedProfile ? (
          <>
            {/* Profile Header */}
            <div className="p-6 bg-gray-50 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Profile</h2>
              <div className="text-center">
                <img
                  src={selectedProfile.profileImage}
                  alt={selectedProfile.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">{selectedProfile.name}</h3>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <span className="text-sm text-gray-600">go-001231231</span>
                  <button className="p-1 hover:bg-gray-200 rounded">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 p-6 overflow-y-auto">
              {/* About Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-sm text-gray-600">
                  Customer since 2020. Frequent traveler with premium status. 
                  Prefers window seats and vegetarian meals.
                </p>
              </div>

              {/* Passport Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-yellow-100 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Passport</h3>
                  </div>
                  <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">Passport No: A12345678</p>
                  <p className="text-sm text-gray-600">Expire Date: 12/25/2028</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Documents Section */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Documents (8)</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Passport.pdf</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Visa.pdf</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">Insurance.pdf</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Links Section */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Links</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Summer Vacation Promo</span>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">www.instagram.com</span>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">www.facebook.com</span>
                    <button className="p-1 hover:bg-gray-200 rounded">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Media Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Media</h3>
                  </div>
                  <span className="text-sm text-gray-500">Show all</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop" alt="Media 1" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop" alt="Media 2" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop" alt="Media 3" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop" alt="Media 4" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop" alt="Media 5" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=100&h=100&fit=crop" alt="Media 6" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Details</h3>
              <p className="text-gray-500">Select a profile to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
