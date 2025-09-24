import React, { useState } from 'react'
import { Search, Calendar, Plus, MoreVertical } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Table() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Flights')

  const categories = ['Flights', 'Hotels', 'Cars', 'Buses', 'Trains']
  
  const promotions = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=200&fit=crop',
      title: 'Book Economy',
      subtitle: 'Class',
      description: 'With free meal',
      price: '$200',
      discount: 'Save 30%',
      promoPeriod: '2024-01-01 to 2024-12-31',
      isActive: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=200&fit=crop',
      title: 'Book Business',
      subtitle: 'Class',
      description: 'With premium service',
      price: '$500',
      discount: 'Save 25%',
      promoPeriod: '2024-02-01 to 2024-11-30',
      isActive: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop',
      title: 'Book First',
      subtitle: 'Class',
      description: 'With luxury amenities',
      price: '$800',
      discount: 'Save 20%',
      promoPeriod: '2024-03-01 to 2024-10-31',
      isActive: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=200&fit=crop',
      title: 'Hotel Stay',
      subtitle: 'Premium',
      description: 'With breakfast included',
      price: '$150',
      discount: 'Save 35%',
      promoPeriod: '2024-01-15 to 2024-12-15',
      isActive: true
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop',
      title: 'Car Rental',
      subtitle: 'Luxury',
      description: 'With unlimited mileage',
      price: '$80',
      discount: 'Save 40%',
      promoPeriod: '2024-02-15 to 2024-11-15',
      isActive: true
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=200&fit=crop',
      title: 'Bus Journey',
      subtitle: 'Comfort',
      description: 'With AC and WiFi',
      price: '$25',
      discount: 'Save 15%',
      promoPeriod: '2024-01-20 to 2024-12-20',
      isActive: false
    }
  ]

  return (
    <div className="p-2 space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Deals</h1>
      </div>

      {/* Main Card */}
      <div className="bg-white shadow rounded-xl p-6">
        {/* Top Section - Category Buttons and Search */}
        <div className="flex items-center justify-between mb-6">
          {/* Category Buttons */}
          <div className="flex items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Side - Search, Date, Add Button */}
          <div className="flex items-center gap-2">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search promotions..."
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Date Picker */}
            <div className="relative">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select Date"
                className="bg-gray-100 pl-10 pr-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 cursor-pointer w-40"
              />
              <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none" />
            </div>

            {/* Add Promo Button */}
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Plus size={18} />
              Add Promo
            </button>
          </div>
        </div>

        {/* Promotion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Content Overlay */}
                <div className="absolute top-4 left-4 text-white">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{promo.title}</h3>
                    <p className="text-sm opacity-90">{promo.subtitle}</p>
                    <p className="text-xs opacity-80">{promo.description}</p>
                  </div>
                </div>

                {/* Visit Button */}
                <div className="absolute bottom-4 left-4">
                  <button className="bg-transparent border border-white text-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-black transition-colors">
                    Visit two cities with {promo.subtitle.toLowerCase()} for {promo.price}
                  </button>
                </div>

                {/* Discount Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#D4FE5B] text-black px-2 py-1 rounded text-xs font-medium">
                    {promo.discount}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 space-y-3">
                {/* Promo Period */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Promo Period</p>
                    <p className="text-xs text-black">{promo.promoPeriod}</p>
                  </div>
                  
                  {/* Toggle Switch */}
                  <div className="flex items-center">
                    <button
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        promo.isActive ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          promo.isActive ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Edit Button */}
                <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
