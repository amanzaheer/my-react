import React from 'react'

export default function Flightpolicy2() {
  return (
    <div className="mt-2 mb-8">
      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        {/* Passenger 1 (Adult) */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow w-full">
          <h3 className="text-gray-800 text-2xl font-bold mb-4 ml-4">Passenger 1 (Adult)</h3>
          
          {/* All Field Labels in One Row */}
          <div className="grid grid-cols-8 gap-2 ml-4 mb-2">
            <div className="text-xs font-semibold medium text-gray-700">Name</div>
            <div className="text-xs font-medium text-gray-600">Date of Birth</div>
            <div className="text-xs font-medium text-gray-600">Gender</div>
            <div className="text-xs font-medium text-gray-600">Email</div>
            <div className="text-xs font-medium text-gray-600">Contact Number</div>
            <div className="text-xs font-medium text-gray-600">Nationality</div>
            <div className="text-xs font-medium text-gray-600">Passport Number</div>
            <div className="text-xs font-medium text-gray-600">Passport Expiry</div>
          </div>
          
          {/* All Field Answers in One Row */}
          <div className="grid grid-cols-8 gap-2 ml-4">
            <div className="text-lg font-semibold text-gray-800">John Doe</div>
            <div className="text-lg font-semibold text-gray-800">1990-05-15</div>
            <div className="text-lg font-semibold text-gray-800">Male</div>
            <div className="text-lg font-semibold text-gray-800">john@email.com</div>
            <div className="text-lg font-semibold text-gray-800">+1234567890</div>
            <div className="text-lg font-semibold text-gray-800">American</div>
            <div className="text-lg font-semibold text-gray-800">A1234567</div>
            <div className="text-lg font-semibold text-gray-800">2025-12-31</div>
          </div>
        </div>

        {/* Passenger 2 (Child) */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow w-full">
          <h3 className="text-gray-800 text-2xl font-bold mb-4 ml-4">Passenger 2 (Child)</h3>
          
          {/* All Field Labels in One Row */}
          <div className="grid grid-cols-8 gap-2 ml-4 mb-2">
            <div className="text-xs font-medium text-gray-600">Name</div>
            <div className="text-xs font-medium text-gray-600">Date of Birth</div>
            <div className="text-xs font-medium text-gray-600">Gender</div>
            <div className="text-xs font-medium text-gray-600">Email</div>
            <div className="text-xs font-medium text-gray-600">Contact Number</div>
            <div className="text-xs font-medium text-gray-600">Nationality</div>
            <div className="text-xs font-medium text-gray-600">Passport Number</div>
            <div className="text-xs font-medium text-gray-600">Passport Expiry</div>
          </div>
          
          {/* All Field Answers in One Row */}
          <div className="grid grid-cols-8 gap-2 ml-4">
            <div className="text-lg font-semibold text-gray-800">John Doe</div>
            <div className="text-lg font-semibold text-gray-800">1990-05-15</div>
            <div className="text-lg font-semibold text-gray-800">Male</div>
            <div className="text-lg font-semibold text-gray-800">john@email.com</div>
            <div className="text-lg font-semibold text-gray-800">+1234567890</div>
            <div className="text-lg font-semibold text-gray-800">American</div>
            <div className="text-lg font-semibold text-gray-800">A1234567</div>
            <div className="text-lg font-semibold text-gray-800">2025-12-31</div>
          </div>
        </div>

        {/* Passenger 3 (Infant) */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow w-full">
          <h3 className="text-gray-800 text-2xl font-bold mb-4 ml-4">Passenger 3 (Infant)</h3>
          
          {/* All Field Labels in One Row */}
          <div className="grid grid-cols-8 gap-2 ml-4 mb-2">
            <div className="text-xs font-medium text-gray-600">Name</div>
            <div className="text-xs font-medium text-gray-600">Date of Birth</div>
            <div className="text-xs font-medium text-gray-600">Gender</div>
            <div className="text-xs font-medium text-gray-600">Email</div>
            <div className="text-xs font-medium text-gray-600">Contact Number</div>
            <div className="text-xs font-medium text-gray-600">Nationality</div>
            <div className="text-xs font-medium text-gray-600">Passport Number</div>
            <div className="text-xs font-medium text-gray-600">Passport Expiry</div>
          </div>
          
          {/* All Field Answers in One Row */}
          <div className="grid grid-cols-8 gap-2 ml-4">
            <div className="text-lg font-semibold text-gray-800">John Doe</div>
            <div className="text-lg font-semibold text-gray-800">1990-05-15</div>
            <div className="text-lg font-semibold text-gray-800">Male</div>
            <div className="text-lg font-semibold text-gray-800">john@email.com</div>
            <div className="text-lg font-semibold text-gray-800">+1234567890</div>
            <div className="text-lg font-semibold text-gray-800">American</div>
            <div className="text-lg font-semibold text-gray-800">A1234567</div>
            <div className="text-lg font-semibold text-gray-800">2025-12-31</div>
          </div>
        </div>
      </div>
    </div>
  )
}
