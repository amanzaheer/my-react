import React, { useState } from "react";
// import Layout from "../Components/Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Plus,
  Calendar,
  ChevronUp,
  ChevronDown,
  Edit,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Coupons() {
  const [selectedDate, setSelectedDate] = useState(null);

  const [coupons, setCoupons] = useState([
    {
      code: "SUMMER25",
      status: "Active",
      discountValue: "70% Discount",
      discountType: "Percentage",
      endDate: "2025-12-31",
      usage: 150,
    },
    {
      code: "WINTER10",
      status: "Expired",
      discountValue: "10% Discount",
      discountType: "Percentage",
      endDate: "2025-01-15",
      usage: 80,
    },
    {
      code: "FLASH50",
      status: "Active",
      discountValue: "50% Discount",
      discountType: "Percentage",
      endDate: "2025-10-10",
      usage: 200,
    },
  ]);

  const [dropdownIndex, setDropdownIndex] = useState(null);

  const toggleStatus = (index, newStatus) => {
    const updated = [...coupons];
    updated[index].status = newStatus;
    setCoupons(updated);
    setDropdownIndex(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* ---------- Top Title & Create Button ---------- */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Coupons</h1>
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          <Plus size={18} /> Create your first coupon
        </button>
      </div>

      {/* ---------- White Card ---------- */}
      <div className="bg-white shadow rounded-xl p-5">
        {/* Card Header: Title & Date Picker */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Coupon List</h2>

          {/* ✅ Calendar icon inside the date picker box */}
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select Date"
              className="bg-gray-100 pl-10 pr-3 py-2 rounded-lg text-gray-700 hover:bg-gray-200 cursor-pointer w-40"
            />
            <Calendar
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none"
            />
          </div>
        </div>

        {/* ---------- Table ---------- */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-gray-800">
                {[
                  "Coupon Code",
                  "Status",
                  "Discount Value",
                  "Discount Type",
                  "End Date",
                  "Usage Count",
                  "Action",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-4 py-2 text-left font-medium whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1">
                      {header}
                      <span className="flex flex-col">
                        <ChevronUp size={12} />
                        <ChevronDown size={12} className="-mt-1" />
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {coupons.map((item, index) => (
                <tr key={index} className="border-b border-gray-50">
                  <td className="px-4 py-3">{item.code}</td>

                  {/* ---- Status Button ---- */}
                  <td className="px-4 py-3">
                    {item.status === "Active" ? (
                      <span className="bg-green-200 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </span>
                    ) : (
                      <span className="bg-red-200 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                        Expired
                      </span>
                    )}
                  </td>

                  {/* ---- Discount Value ---- */}
                  <td className="px-4 py-3">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.discountValue}
                    </span>
                  </td>

                  <td className="px-4 py-3">{item.discountType}</td>
                  <td className="px-4 py-3">{item.endDate}</td>
                  <td className="px-4 py-3">{item.usage}</td>

                  {/* ✅ Dropdown now opens to the LEFT side */}
                  <td className="px-4 py-3 relative">
                    <button
                      onClick={() =>
                        setDropdownIndex(dropdownIndex === index ? null : index)
                      }
                      className="bg-gray-100 p-2 rounded-md hover:bg-gray-200"
                    >
                      <Edit size={18} />
                    </button>

                    {dropdownIndex === index && (
                      <div className="absolute right-full mr-2 mt-2 w-36 bg-white shadow-lg rounded-md border z-10">
                        <button
                          onClick={() => toggleStatus(index, "Active")}
                          className="flex items-center w-full gap-2 px-3 py-2 hover:bg-gray-100 text-sm"
                        >
                          <CheckCircle size={16} className="text-green-600" />
                          Active
                        </button>
                        <button
                          onClick={() => toggleStatus(index, "Expired")}
                          className="flex items-center w-full gap-2 px-3 py-2 hover:bg-gray-100 text-sm"
                        >
                          <XCircle size={16} className="text-red-600" />
                          Expired
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
