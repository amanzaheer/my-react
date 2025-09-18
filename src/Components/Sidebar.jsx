import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Auto-open dropdown based on current route
  useEffect(() => {
    const currentPath = location.pathname;
    
    // Check which menu item should be active based on current route
    if (currentPath === '/flights' || currentPath === '/hotels' || currentPath === '/cars' || currentPath === '/buses' || currentPath === '/rails') {
      setActiveDropdown('orderHistory');
    } else if (currentPath === '/users') {
      setActiveDropdown('orderHistory'); // You can add a specific menu for users if needed
    } else {
      setActiveDropdown(null);
    }
  }, [location.pathname]);

  // Menu data structure
  const menuItems = [
    {
      id: "newTrip",
      title: "New Trip",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      ),
      subItems: [
        { title: "Create Trip", href: "#" },
        { title: "Trip Templates", href: "#" },
      ],
    },
    {
      id: "onlinePayment",
      title: "Online Payment",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      ),
      iconTransform: "transform rotate-12",
      subItems: [
        { title: "Payment Methods", href: "#" },
        { title: "Transaction History", href: "#" },
        { title: "Refunds", href: "#" },
        { title: "Payment Settings", href: "#" },
        { title: "Billing", href: "#" },
      ],
    },
    {
      id: "orderHistory",
      title: "Order History",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      subItems: [
        { title: "Flights", href: "/flights" },
        { title: "Hotels", href: "/hotels" },
        { title: "Cars", href: "/cars" },
        { title: "Buses", href: "buses" },
        { title: "Rails", href: "rails" },
      ],
    },
    {
      id: "support",
      title: "Support",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      ),
      subItems: [
        { title: "Help Center", href: "#" },
        { title: "Contact Us", href: "#" },
      ],
    },
    {
      id: "report",
      title: "Report",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
      subItems: [
        { title: "Analytics", href: "#" },
        { title: "Financial Reports", href: "#" },
      ],
    },
    {
      id: "pageManagement",
      title: "Page Management",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      subItems: [
        { title: "Home Page", href: "#" },
        { title: "About Page", href: "#" },
      ],
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-gray-200 z-40 pt-16">
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-4 py-3 space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="transition-all duration-300 hover:translate-x-1"
            >
              <button
                onClick={() => toggleDropdown(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group ${
                  activeDropdown === item.id
                    ? "text-black border-l-4 border-custom-green bg-custom-green"
                    : "text-gray-700 hover:bg-custom-green hover:text-black"
                }`}
              >
                <div className="flex items-center">
                  <svg
                    className={`h-5 w-5 mr-3 transition-colors duration-300 ${
                      item.iconTransform || ""
                    } ${
                      activeDropdown === item.id
                        ? "text-black"
                        : "group-hover:text-black"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {item.icon}
                  </svg>
                  <span className="font-medium">{item.title}</span>
                </div>
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === item.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeDropdown === item.id && (
                <div className="ml-8 mt-2 space-y-1 flex flex-col gap-2">
                  {item.subItems.map((subItem, index) => {
                    const isActive = location.pathname === subItem.href;
                    return (
                      <a
                        key={index}
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm transition-all duration-200 ${
                          isActive 
                            ? 'text-black bg-yellow-100 border-l-2 border-yellow-500 font-medium' 
                            : 'text-gray-500 border-l-2 border-gray-200 hover:text-black'
                        }`}
                      >
                        {subItem.title}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
