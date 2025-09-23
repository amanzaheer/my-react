import React from "react";
import Layout from "../Components/Layout";
import {
  Copy,
  Printer,
  Share2,
  Users,
  Settings,
  DoorOpen,
  Fuel,
  Gauge,
  Star,
} from "lucide-react";

export default function Carsdetail() {
  return (
    <Layout>
      <div className="space-y-6 p-4">

        {/* ===== Top Bar ===== */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Left: Title + copy icon */}
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">RBCTWF</h1>
            <Copy className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black" />
          </div>

          {/* Right: Booking info */}
          <div className="text-sm text-gray-600 space-x-4">
            <span>Booking Date: <b>12/03/2025</b></span>
            <span>Order-ID: <b>1233423787868</b></span>
          </div>
        </div>

        {/* ===== Buttons ===== */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-lg">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-lg">
            <Share2 className="w-4 h-4" /> Share
          </button>
          <button className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-lg">
            + Manage this Order
          </button>
        </div>

        {/* ===== Card 1 : Booking Information ===== */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Booking Information</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 text-sm">
            <div>
              <p className="text-gray-400">Customer Name</p>
              <p className="text-black">John Doe</p>
            </div>
            <div>
              <p className="text-gray-400">Booking</p>
              <p className="text-black">#RBCTWF</p>
            </div>
            <div>
              <p className="text-gray-400">Customer Email</p>
              <p className="text-black">john@example.com</p>
            </div>
            <div>
              <p className="text-gray-400">Phone Number</p>
              <p className="text-black">+92 300 1234567</p>
            </div>
          </div>
        </div>

        {/* ===== Card 2 : Car Information ===== */}
        <div className="bg-white shadow rounded-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left image section */}
          <div className="md:w-1/3">
            <img
              src="https://via.placeholder.com/400x250?text=Toyota+Corolla"
              alt="Car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right content section */}
          <div className="md:w-2/3 p-6 space-y-4">
            <h2 className="text-xl font-semibold">2022 Toyota Corolla</h2>

            {/* Start Date */}
            <div>
              <p className="text-gray-400">Start Date</p>
              <p className="text-black">Tue 18, Mar</p>
              <p className="text-black">From 15:00</p>
            </div>

            {/* End Date */}
            <div>
              <p className="text-gray-400">End Date</p>
              <p className="text-black">Fri 23, 2025</p>
              <p className="text-black">Until 16:00</p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-600" />
                <span>5 seats</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-gray-600" />
                <span>Automatic</span>
              </div>
              <div className="flex items-center gap-2">
                <DoorOpen className="w-4 h-4 text-gray-600" />
                <span>5 doors</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel className="w-4 h-4 text-gray-600" />
                <span>Premium gas</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-gray-600" />
                <span>7.5 liter</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
