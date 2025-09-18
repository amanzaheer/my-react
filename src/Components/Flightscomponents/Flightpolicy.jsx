import React from 'react'

export default function Flightpolicy() {
  return (
    <div className="p-8 my-8">
      <div className="flex justify-between items-start gap-2 max-w-6xl mx-auto">
        {/* First Box - Order Change Policy */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex-1 mr-4 w-full">
          <h3 className="text-gray-800 text-xl font-semibold mb-2 ml-4">Order Change Policy</h3>
          <p className="text-gray-500 leading-relaxed text-base ml-4 m-0">
            Make changes to this order up to the initial departure date penalty unknown. 
     
          </p>
        </div>

        {/* Second Box - Order Refund Policy */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow flex-1 mr-4 wfull">
          <h3 className="text-gray-800 text-xl font-semibold mb-2 ml-4">Order Refund Policy</h3>
          <p className="text-gray-500 leading-relaxed text-base ml-4 m-0">
           the order is refundable up untill the initial departure date penalty unknown.
             </p>
        </div>
      </div>
    </div>
  )
}