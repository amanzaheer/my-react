import React, { useState } from "react";
import { Bell, Globe, Power, ChevronDown, LogOut } from "lucide-react";
import { logout, getUserData } from "../utils/auth";

export default function Navbar() {
  const [isPowerOn, setIsPowerOn] = useState(false);
  const userData = getUserData();

  const togglePower = () => {
    setIsPowerOn(!isPowerOn);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-black tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 bg-clip-text text-transparent relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-400 after:rounded-sm">
                oggaair
              </h1>
              {/* <img src="/img.1 (3).jpeg" alt="logo" className="w-10 h-10" /> */}
            </div>

            {/* Dashboard Heading - More space after sidebar */}
            <div className="hidden pl-35 md:block">
              <h2 className="text-2xl font-semibold text-gray-800">
                Dashboard
              </h2>
            </div>
          </div>

          {/* Right Side - Search Bar and Icons */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="w-64">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                  <svg
                    className="h-7 w-7 text-gray-400 hover:text-gray-600 transition-colors duration-200"
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
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2  bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 focus:-translate-y-0.5 focus:shadow-lg focus:shadow-blue-500/15"
                />
              </div>
            </div>
            {/* Notification Bell Icon */}
            <div className="relative">
              <button className="p-3 text-gray-500 hover:text-gray-800 bg-gray-100 rounded-full transition-colors duration-200">
                <Bell className="h-5 w-5" />
              </button>
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </div>

            {/* Global World Icon */}
            <button className="p-3 text-gray-500 hover:text-gray-800  bg-gray-100 rounded-full transition-colors duration-200">
              <Globe className="h-5 w-5" />
            </button>

            {/* Admin Profile */}
            <div className="flex items-center space-x-3 rounded-lg p-2 transition-all duration-300 ">
              {/* Profile Image */}
              <div className="relative">
                <img
                  src="/img.1 .jpeg"
                  alt="Admin"
                  className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                {/* Online Status */}
                <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>

              {/* Name and Email */}
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-800">Raja Usama</p>
                <p className="text-xs text-gray-500">Raja palo khan</p>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>

            {/* Power On/Off Toggle Switch */}
            <div className="flex items-center">
              <div
                onClick={togglePower}
                className={`w-12 h-6 px-1 rounded-full flex items-center cursor-pointer transition-all duration-300 ${
                  isPowerOn ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    isPowerOn ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>

            {/* Logout Icon */}
            <button
              onClick={handleLogout}
              className="p-3 text-gray-500 hover:text-red-600 bg-gray-100 hover:bg-red-50 rounded-full transition-colors duration-200"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
