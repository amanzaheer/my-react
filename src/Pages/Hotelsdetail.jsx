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
import Topboxes from "../Components/Flightscomponents/Topboxes";

export default function Hotelsdetail() {
  return (
    <Layout>
      <Topboxes />

      <div className="space-y-6 p-4">

        {/* ===== Top Bar ===== */}
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">RBT-HOTEL</h1>
            <Copy className="w-5 h-5 text-gray-500 cursor-pointer hover:text-black" />
          </div>

          <div className="text-sm text-gray-600 space-x-4">
            <span>
              Booking Date: <b>12/03/2025</b>
            </span>
            <span>
              Order-ID: <b>HTL1233423787868</b>
            </span>
          </div>
        </div>

        {/* ===== Buttons Right Side ===== */}
        <div className="flex items-center gap-3 ml-auto justify-end">
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
              <p className="text-gray-400">Guest Name</p>
              <p className="text-black">Ali Khan</p>
            </div>
            <div>
              <p className="text-gray-400">Booking</p>
              <p className="text-black">#RBT-HOTEL</p>
            </div>
            <div>
              <p className="text-gray-400">Guest Email</p>
              <p className="text-black">ali.khan@example.com</p>
            </div>
            <div>
              <p className="text-gray-400">Phone Number</p>
              <p className="text-black">+92 321 1234567</p>
            </div>
          </div>
        </div>

        {/* ===== Card 2 : Hotel Information ===== */}
        <div className="bg-white shadow rounded-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Left image section */}
          <div className="md:w-1/3">
            <img
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800"
              alt="Hotel"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right content section */}
          <div className="md:w-2/3 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Grand Palace Hotel</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm mt-4">
              <div>
                <p className="text-gray-400">Check-in Date</p>
                <p className="text-black">Tue 18, Mar</p>
                <p className="text-black">From 15:00</p>
              </div>

              <div>
                <p className="text-gray-400">Check-out Date</p>
                <p className="text-black">Fri 23, Mar</p>
                <p className="text-black">Until 11:00</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-600" />
                  <span>2 Adults</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-gray-600" />
                  <span>Deluxe Suite</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <DoorOpen className="w-4 h-4 text-gray-600" />
                  <span>2 Rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-gray-600" />
                  <span>Breakfast Included</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4 text-gray-600" />
                <span>5 Star Property</span>
              </div>
            </div>

            <div className="flex gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ===== New Card : Cancellation Policy ===== */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">Cancellation Policy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {[
              {
                title: "Free Cancellation",
                text: "Cancel up to 24 hrs before check-in for a full refund",
              },
              {
                title: "Partial Refund",
                text: "50% refund if cancelled 24–48 hrs before check-in",
              },
              {
                title: "No Refund",
                text: "Less than 24 hrs before check-in • No refund",
              },
            ].map((col, i) => (
              <div key={i}>
                <button className="bg-gray-100 rounded-full text-green-600 px-4 py-2 font-semibold mb-3">
                  {col.title}
                </button>
                <p className="text-gray-600">{col.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center text-sm">
            <div>
              <p className="font-semibold">11 March 2025</p>
              <p className="text-gray-600">9:34 AM + GST</p>
            </div>
            <div>
              <p className="font-semibold">12 March 2025</p>
              <p className="text-gray-600">10:00 AM + GST</p>
            </div>
            <div>
              <p className="font-semibold">13 March 2025</p>
              <p className="text-gray-600">1:15 PM + GST</p>
            </div>
            <div>
              <p className="font-semibold">14 March 2025</p>
              <p className="text-gray-600">3:45 PM + GST</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="h-4 rounded bg-red-400 flex-1"></div>
            <div className="h-4 rounded bg-green-400 flex-1"></div>
            <div className="h-4 rounded bg-blue-400 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8 text-sm text-center">
            <div>
              <p className="font-semibold">Booking</p>
            </div>
            <div>
              <p className="font-semibold">Full refund</p>
              <p className="text-gray-600">$800</p>
            </div>
            <div>
              <p className="font-semibold">Partial refund</p>
              <p className="text-gray-600">$400</p>
            </div>
            <div>
              <p className="font-semibold">No refund</p>
            </div>
            <div>
              <p className="font-semibold">Other Conditions</p>
            </div>
          </div>
        </div>

        {/* ===== New Card : Billing & Payment ===== */}
        <div className="bg-gray-100 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* LEFT SIDE */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Billing Summary */}
              <div className="bg-white shadow rounded-2xl p-6 w-full">
                <h3 className="text-lg font-semibold mb-2">Billing Summary</h3>
                <p className="text-gray-500 mb-4">Paid on 11 Mar, 2025</p>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Hotel Stay</span>
                  <span className="font-semibold">$1200.00</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Tax</span>
                  <span className="font-semibold">$100.00</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Service Fees</span>
                  <span className="font-semibold">$50.00</span>
                </div>

                <div className="flex justify-between text-sm border-t pt-2 mt-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">$1350.00</span>
                </div>
              </div>

              {/* Extra Services */}
              <div className="bg-white shadow rounded-2xl p-6 w-full">
                <h3 className="text-lg font-semibold mb-4">Extra Services</h3>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Spa Access</span>
                  <span className="font-semibold">$80.00</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Room Service</span>
                  <span className="font-semibold">$40.00</span>
                </div>

                <div className="flex justify-between text-sm border-t pt-2 mt-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-bold">$120.00</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1">
              <div className="bg-white shadow rounded-2xl p-6 h-full">
                <h3 className="text-lg font-semibold mb-4">Payment Details</h3>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Payment Card</span>
                  <span className="text-blue-600 font-semibold">Visa</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Card Holder’s Name</span>
                  <span className="font-semibold">Ali Khan</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Card Type</span>
                  <span className="font-semibold">Credit</span>
                </div>

                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold">Card Number</span>
                  <span className="font-semibold">**** **** **** 5678</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
