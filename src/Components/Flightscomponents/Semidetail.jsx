import React from 'react'

export default function Semidetail() {
  return (
    <div className="px-6 py-1">
      <div className="flex justify-between items-start">
        {/* Left Side */}
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <h2 className="text-2xl font-bold text-gray-800">VWjLL6</h2>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-600">Flight information</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-end space-y-4">
          {/* Booking Date and Order ID */}
          <div className="flex space-x-6">
            <div>
              <span className="text-base text-gray-600">Booking date:</span>
              <span className="text-base font-medium text-gray-800 ml-1">05/05/2025</span>
            </div>
            <div>
              <span className="text-base text-gray-600">Order Id:</span>
              <span className="text-base font-medium text-gray-800 ml-1">ord_000123456</span>
            </div>
          </div>

          {/* All Icons and Buttons in One Line */}
          <div className="flex items-center space-x-3">
            {/* Printer Icon */}
            <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
              <svg
                className="h-5 w-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>

            {/* Share Icon */}
            <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
              <svg
                className="h-5 w-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </button>

            {/* Ticket Numbers */}
            <div className="px-2 py-2 rounded bg-gray-100">
              <span className="text-xs font-medium text-gray-800 whitespace-nowrap">Ticket Numbers</span>
            </div>

            {/* Export Itinerary */}
            <div className="px-2 py-2 rounded bg-gray-100">
              <span className="text-xs font-medium text-gray-800 whitespace-nowrap">Export Itinerary</span>
            </div>

            {/* Manage Order Button */}
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-medium">Manage this order</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
