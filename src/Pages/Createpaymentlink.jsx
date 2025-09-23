import React, { useState } from "react";
import Layout from "../Components/Layout";
import { ChevronDown } from "lucide-react";

export default function CreatePaymentLink() {
  const [branch, setBranch] = useState("");
  const [description, setDescription] = useState("");
  const [dialCode, setDialCode] = useState("+92");
  const [paymentDesc, setPaymentDesc] = useState("");
  const [paymentDial, setPaymentDial] = useState("USD ($)");
  const [tax, setTax] = useState("");
  const [onPay, setOnPay] = useState("");
  const [applyTax, setApplyTax] = useState(false);
  const [note, setNote] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  // Options
  const branchOptions = ["Main Branch", "City Center Branch", "Airport Branch"];
  const descriptionOptions = ["Online Payment", "In-Person Payment", "Subscription"];
  const dialOptions = ["+1 (US)", "+44 (UK)", "+92 (PK)", "+91 (IN)"];
  const paymentDescOptions = ["Full Payment", "Installment", "Advance"];
  const paymentDialOptions = ["USD ($)", "EUR (€)", "PKR (₨)"];
  const companies = ["Apple", "Microsoft", "Google", "Amazon", "Facebook", "Tesla"];

  const toggleCompany = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  return (
    <Layout>
      <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold">Create Payment Link</h1>

        {/* ===== Business Details Card ===== */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Business Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 relative">
              <label className="text-gray-500 font-medium">Branch</label>
              <div className="relative">
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <option value="">Select Branch</option>
                  {branchOptions.map((b, i) => (
                    <option key={i} value={b}>{b}</option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="text-gray-500 font-medium">Description</label>
              <div className="relative">
                <select
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <option value="">Select Description</option>
                  {descriptionOptions.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bill To Card ===== */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Bill To</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="text-gray-500 font-medium">Dial Code</label>
              <div className="relative">
                <select
                  value={dialCode}
                  onChange={(e) => setDialCode(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  {dialOptions.map((code, i) => (
                    <option key={i} value={code}>{code}</option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>
        </div>

        {/* ===== Payment Details Card ===== */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
          <div className="bg-gray-100 rounded-2xl p-6 space-y-6">
            <div className="flex flex-col gap-2 relative">
              <label className="text-gray-500 font-medium">Payment Type</label>
              <div className="relative">
                <select
                  value={paymentDesc}
                  onChange={(e) => setPaymentDesc(e.target.value)}
                  className="w-full border bg-white border-gray-200 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <option value="">Select Payment Type</option>
                  {paymentDescOptions.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label className="text-gray-500 font-medium">Currency</label>
              <div className="relative">
                <select
                  value={paymentDial}
                  onChange={(e) => setPaymentDial(e.target.value)}
                  className="w-full border bg-white border-gray-200 rounded-lg px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  {paymentDialOptions.map((d, i) => (
                    <option key={i} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 font-medium">Tax</label>
              <input
                type="number"
                placeholder="Enter Tax %"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
                className="w-full border bg-white border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-500 font-medium">On Payment</label>
              <input
                type="number"
                placeholder="Enter Amount"
                value={onPay}
                onChange={(e) => setOnPay(e.target.value)}
                className="w-full border bg-white border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                checked={applyTax}
                onChange={(e) => setApplyTax(e.target.checked)}
                className="w-4 h-4 bg-white text-indigo-600 border-gray-300 rounded focus:ring-indigo-300"
              />
              <span className="text-gray-600">Apply and show Tax</span>
            </div>
          </div>
        </div>

        {/* ===== Due Date & Payment Terms Card ===== */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Due Date & Payment Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-2 relative">
                <label className="text-gray-500 font-medium">Due Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label className="text-gray-500 font-medium">Due Date for Final Payment</label>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-gray-500 font-medium">Payment Terms</label>
              <p className="text-gray-600 text-sm">
                Please make payment within 15 days of invoice receipt. Late payments may incur additional fees.
              </p>
              <p className="text-gray-600 text-sm">
                Ensure bank details are correct before transferring funds to avoid delays.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Add a Note Card ===== */}
        <div className="bg-white shadow rounded-2xl p-6 space-y-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Add a Note</h2>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your note here..."
            className="w-full border border-gray-200 rounded-lg px-4 py-4 h-40 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companies.map((company) => (
              <button
                key={company}
                type="button"
                onClick={() => toggleCompany(company)}
                className={`px-3 py-2 border rounded-full text-sm font-medium ${
                  selectedCompanies.includes(company)
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {company}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
