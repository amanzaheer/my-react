import React, { useState } from "react";
import { Search, Eye, CheckCircle, XCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function Table({ title, headers, rows: initialRows }) {
  const [checked, setChecked] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(null);
  const [rows, setRows] = useState(initialRows);
  const [selectedDate, setSelectedDate] = useState("");

  const handleCheckAll = () => {
    if (checkAll) setChecked([]);
    else setChecked(rows.map((_, i) => i));
    setCheckAll(!checkAll);
  };

  const handleCheck = (i) => {
    setChecked((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const changeStatus = (rowIndex, newStatus) => {
    const updated = rows.map((r, i) =>
      i === rowIndex
        ? {
            ...r,
            data: r.data.map((cell, ci) =>
              headers[ci] === "Status" ? newStatus : cell
            ),
          }
        : r
    );
    setRows(updated);
    setStatusDropdown(null);
  };

  const statusClasses = (status) => {
    switch (status) {
      case "Refunded":
        return "bg-[#D4FE5B] text-black";
      case "Cancelled":
        return "bg-red-200 text-red-600";
      case "Confirmed":
        return "bg-gray-100 text-green-500";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  const dropdownOptions = [
    { label: "Refunded", icon: <RefreshCw className="w-4 h-4" />, bg: "bg-[#D4FE5B]" },
    { label: "Cancelled", icon: <XCircle className="w-4 h-4 text-white" />, bg: "bg-red-500 text-white" },
    { label: "Confirmed", icon: <CheckCircle className="w-4 h-4 text-green-500" />, bg: "bg-gray-100 text-green-500" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{title}</h1>

      <div className="bg-white shadow p-4 rounded-2xl space-y-4">
        {/* ---- Top Filters ---- */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <div className="flex items-center bg-gray-100 rounded-lg px-2 w-82">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                placeholder="Search name,email or phone number"
                className="bg-gray-100 px-2 py-1 outline-none w-full"
              />
            </div>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-gray-100 px-3 py-1 rounded-lg outline-none"
            />
          </div>

          <div className="flex gap-2">
            <button className="bg-gray-100 px-3 py-1 rounded-lg">Import</button>
            <button className="bg-gray-100 px-3 py-1 rounded-lg">Export</button>
          </div>
        </div>

        {/* ---- Status Strip ---- */}
        <div className="bg-gray-100 w-4/5 rounded-full p-2 flex flex-wrap items-center gap-5 text-base font-medium">
          <span
            className={`px-2 py-1 rounded ${
              checked.length > 0 ? "bg-[#D4FE5B]" : ""
            }`}
          >
            All {checked.length > 0 && `(${checked.length})`}
          </span>
          <span>OnHold</span>
          <span>Ticketed</span>
          <span>Void</span>
          <span>Refund</span>
          <span>Confirmed</span>
          <span>Reissue</span>
          <span>Expired</span>
          <span>Cancelled</span>
          <button className="px-2 py-1 rounded">+ Add</button>
        </div>

        {/* ---- Table ---- */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-black text-base">
            <thead className="text-sm text-gray-400">
              <tr className="border-b border-gray-200">
                <th className="p-4">
                  <input
                    type="checkbox"
                    checked={checkAll}
                    onChange={handleCheckAll}
                  />
                </th>
                {headers.map((h, i) => (
                  <th key={i} className="p-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={checked.includes(i)}
                      onChange={() => handleCheck(i)}
                    />
                  </td>

                  {row.data.map((cell, cIndex) => {
                    const header = headers[cIndex];

                    if (header === "Reference#") {
                      return (
                        <td key={cIndex} className="p-4 text-black">
                          <Link to={`/railsdetail/${row.id}`}>{cell}</Link>
                        </td>
                      );
                    }

                    if (header === "Status") {
                      return (
                        <td key={cIndex} className="p-4">
                          <span className={`px-2 py-1 rounded ${statusClasses(cell)}`}>
                            {cell}
                          </span>
                        </td>
                      );
                    }

                    if (header === "Action") {
                      return (
                        <td key={cIndex} className="p-4 relative">
                          {/* ✅ Eye icon click se dropdown toggle karega */}
                          <button
                            type="button"
                            onClick={() =>
                              setStatusDropdown(statusDropdown === i ? null : i)
                            }
                            className="bg-gray-100 p-1 rounded inline-flex items-center justify-center"
                          >
                            <Eye className="w-4 h-4 text-gray-700" />
                          </button>

                          {statusDropdown === i && (
                            <div className="absolute right-full mr-2 mt-1 bg-white shadow-lg rounded-xl border text-sm z-10 p-2 w-40">
                              {dropdownOptions.map((opt) => (
                                <div
                                  key={opt.label}
                                  onClick={() => changeStatus(i, opt.label)}
                                  className={`flex items-center gap-2 px-2 py-2 mb-1 rounded cursor-pointer hover:opacity-90 ${opt.bg}`}
                                >
                                  {opt.icon}
                                  <span>{opt.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>
                      );
                    }

                    return (
                      <td key={cIndex} className="p-4">
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
