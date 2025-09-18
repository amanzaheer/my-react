import React from 'react'

export default function Flightcard() {
  return (
    <div className="mb-8">
      <div className="bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow max-w-6xl mx-auto">
        <div className="flex gap-6">
          {/* Price Summary Card */}
          <div className="w-1/2">
            <div className="bg-white rounded-lg p-5 min-h-72">
              <h3 className="text-gray-800 text-2xl font-semibold mb-2 ml-4">Price Summary</h3>
              
              <div className="ml-4 space-y-3">
                {/* Flight Details */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xl font-bold text-gray-900">Flight</div>
                    <div className=" text-gray-700 text-lg font-semibold">1 x Adult</div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">$234.23</div>
                </div>
                
                {/* Taxes and Fees */}
                <div className="flex justify-between text-lg items-center">
                  <div className=" text-gray-900 tex-lg font-semibold ">Taxes,fee, charges and surcharges</div>
                  <div className="text-lg  font-semibold text-gray-900">$23.78</div>
                </div>
                
                {/* Total */}
                <div className="pt-1 mt-3">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-gray-900">Total</div>
                    <div className="text-lg font-bold text-gray-900">$257.01</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details Card */}
          <div className="w-1/2">
            <div className="bg-white rounded-lg p-5 min-h-72">
              <h3 className="text-gray-800 text-2xl font-semibold mb-2 ml-4">Payment Details</h3>
              
              <div className="ml-4 space-y-3">
                {/* Flight */}
                <div>
                  <div className="text-xl font-bold text-gray-900">Flight</div>
                </div>
                
                {/* Payment Card Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900">Payment Card</div>
                    <div className="text-lg font-semibold text-blue-600">Visa</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900">Payment Holder Name</div>
                    <div className="text-lg font-semibold text-gray-900">John Doe</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900">Card Type</div>
                    <div className="text-lg font-semibold text-gray-800">Credit Card</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-gray-900">Card Number</div>
                    <div className="text-lg font-semibold text-gray-900">**** **** **** 1234</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}