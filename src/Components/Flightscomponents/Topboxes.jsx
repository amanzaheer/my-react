import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Topboxes() {
  const navigate = useNavigate()

  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      id: "users",
      title: "Users",
      path: "/users",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      ),
    },
    {
      id: "adminFund",
      title: "Admin Fund",
      path: "/admin-fund",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      ),
    },
    {
      id: "markup",
      title: "Markup",
      path: "/markup",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      ),
    },
    {
      id: "customers",
      title: "Customers",
      path: "/customers",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
  ];

  const handleItemClick = (path) => {
    navigate(path)
  }

  return (
    <div className="px-6">
      {/* Top Small Rounded Boxes */}
      <div className="flex flex-wrap gap-3 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.path)}
            className="bg-white rounded-full border-2 border-[#d4FE5B] px-4 py-3 flex items-center space-x-2 hover:bg-yellow-50 hover:border-yellow-400 transition-all duration-200 cursor-pointer"
          >
            <svg
              className="h-4 w-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {item.icon}
            </svg>
            <span className="font-medium text-gray-800 text-base">{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
