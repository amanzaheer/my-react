import { StickyNoteIcon } from 'lucide-react';
import React, { useState } from 'react'

export default function Carddropdown() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (cardId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const flightCards = [
    {
      id: 1,
      airline: "SkyHigh Airlines",
      route: "IST to DSB on Friday, 4 April 2025 at 23:20",
      price: "$350/pax"
    },
    {
      id: 2,
      airline: "SkyHigh Airlines", 
      route: "DSB to IST on Saturday, 5 April 2025 at 15:30",
      price: "$350/pax"
    }
  ];

  return (
    <div className="px-6 py-4  space-y-4">
      {flightCards.map((card) => (
         <div key={card.id} className="bg-white rounded-lg  shadow-[0_0_20px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between p-4">
            {/* Left Section */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{card.airline}</h3>
                <p className="text-sm text-gray-600">{card.route}</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex items-center space-x-4">
              <div className="w-px h-8 bg-gray-400"></div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="text-base font-semibold text-gray-500">1 Checked bag</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="text-base font-semibold text-gray-500">1 Checked bag</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-blue-600">{card.price}</span>
              <button
                onClick={() => toggleDropdown(card.id)}
                className="p-2 hover:bg-gray-300 rounded-lg transition-colors"
              >
                <svg
                  className={`h-5 w-5 text-gray-600 transition-transform ${
                    openDropdowns[card.id] ? 'rotate-180' : ''
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
            </div>
          </div>

          {/* Dropdown Content */}
          {openDropdowns[card.id] && (
            <div className="mt-4 p-6 w-full h-full bg-gray-100 ">
                 {/* Departure Strip */}
                 <div className='flex gap-8 mb-4'>
                     <div className='flex flex-col gap-2 pt-2 px-15'>
                         <p className='text-sm font-medium text-gray-800'>6:00 AM</p>
                         <p className='text-sm text-gray-600'>15 July 2026</p>
                     </div>
                     <div className='flex flex-col pt-2'>
                         <p className='text-base font-medium text-gray-800'>Los Angeles</p>
                         <p className='text-sm text-gray-600'>Los Angeles International Airport</p>
                         <p className='text-sm text-gray-600'>Terminal B</p>
                     </div>
                 </div>

                 {/* Flight Duration and Main Card */}
                 <div className='flex gap-16'>
                     <div className='py-38 px-15'>
                         <p className='text-sm font-medium text-gray-800'>13 hours</p>
                     </div>
                     <div className='flex flex-col px-5 pb-5 bg-white rounded-lg p-3 w-full h-[400px] gap-3'>
                         {/* Airline Info */}
                         <div className='flex items-center gap-2'>
                             <button className='p-2 rounded-lg bg-gray-100'>
                                 <StickyNoteIcon className='h-5 w-5 text-gray-600' />
                             </button>
                             <div className='flex flex-col gap-1'>
                                 <p className='text-base font-medium text-gray-800'>SkyHigh Airlines</p>
                                 <p className='text-sm text-gray-600'>SH-ZZZZ</p>
                             </div>
                         </div>

                         {/* Model, Class, Seat Layout */}
                         <div className='flex gap-15'>
                             <div className='flex flex-col gap-0.5'>
                                 <p className='text-sm font-medium text-gray-600'>Model</p>
                                 <p className='text-sm text-gray-600'>Boeing-787-Dreamliner</p>
                             </div>
                             <div className='flex flex-col gap-0.5'>
                                 <p className='text-sm font-medium text-gray-600'>Class</p>
                                 <p className='text-sm text-gray-600'>Economy</p>
                             </div>
                             <div className='border-r border-gray-300 h-[30px] px-5'></div>
                             <div className='flex flex-col gap-0.5 px-15'>
                                 <p className='text-sm font-medium text-gray-600'>Seat Layout</p>
                                 <p className='text-sm text-gray-600'>3-3-configuration</p>
                             </div>
                         </div>

                         {/* What's Included Box */}
                         <div className='flex flex-col gap-2 bg-gray-100  h-[260px] w-full rounded-xl p-4'>
                             <div className='flex flex-col gap-2'>
                                 <p className='text-base text-black font-medium '>What's included</p>
                                 <div className='flex items-center gap-2'>
                                    <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                                 <p className='text-sm text-gray-600'>Baggage: 23 Kg</p>
                                 </div>
                                 <p className='text-sm text-gray-600 px-5'>Cabin Baggage: 7 Kg</p>
                                 <div className='flex items-center gap-2 px-7'>
                                    <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                                 <p className='text-sm text-gray-600'>Note: Available for Extra Baggage. </p>
                                 <p className='text-sm text-blue-600 cursor-pointer'>See Prices</p></div>
                             </div>
                             
                             {/* Border */}
                             <div className='border-b border-gray-300 my-2'></div>
                             
                             {/* Policies */}
                             <div className='flex items-center justify-between pr-5 gap-12'>
                                 <div className='flex flex-col gap-0.5'>
                                     <p className='text-base font-medium text-black'>Reschedule</p>
                                     <p className='text-sm text-gray-600'>Free rescheduling within 24 hours of booking</p>
                                 </div>
                                 <div className='flex flex-col gap-0.5'>
                                     <p className='text-base font-medium text-black'>Refund</p>
                                     <p className='text-sm text-gray-600'>Refunds are available 10% cancellation fee if cancelled 48 hours </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Arrival Strip */}
                 <div className='flex gap-8 mt-4'>
                     <div className='flex flex-col gap-2 pt-2 px-15'>
                         <p className='text-sm font-medium text-gray-800'>6:00 AM</p>
                         <p className='text-sm text-gray-600'>15 July 2026</p>
                     </div>
                     <div className='flex flex-col pt-2'>
                         <p className='text-base font-medium text-gray-800'>New York</p>
                         <p className='text-sm text-gray-600'>John F Kennedy International Airport (JFK)</p>
                         <p className='text-sm text-gray-600'>Terminal B</p>
                     </div>
                 </div>
             
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
