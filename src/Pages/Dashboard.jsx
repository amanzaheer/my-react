import React from "react";
import Layout from "../Components/Layout";
import Topboxes from "../Components/Flightscomponents/Topboxes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  // ===== Sample Data =====
  const lineData = [
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4780 },
    { name: "May", sales: 5890 },
    { name: "Jun", sales: 4390 },
    { name: "Jul", sales: 6490 },
  ];

  const barData = [
    { month: "Jan", revenue: 2400 },
    { month: "Feb", revenue: 1398 },
    { month: "Mar", revenue: 9800 },
    { month: "Apr", revenue: 3908 },
    { month: "May", revenue: 4800 },
    { month: "Jun", revenue: 3800 },
    { month: "Jul", revenue: 4300 },
  ];

  const pieData = [
    { name: "Technology", value: 400 },
    { name: "Finance", value: 300 },
    { name: "Healthcare", value: 300 },
    { name: "Retail", value: 200 },
  ];
  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

  const recentOrders = [
    { id: "#1001", customer: "Ali Khan", total: "$450", status: "Completed" },
    { id: "#1002", customer: "John Doe", total: "$120", status: "Pending" },
    { id: "#1003", customer: "Sara Lee", total: "$980", status: "Completed" },
    { id: "#1004", customer: "Usman Iqbal", total: "$640", status: "Cancelled" },
  ];

  return (
    <Layout>
      {/* Dashboard Header */}
      <div className="mb-8">
        <Topboxes />
      </div>

      {/* === Stat Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Users", value: "24.5K", icon: <Users />, color: "bg-indigo-100 text-indigo-600" },
          { title: "Total Revenue", value: "$87K", icon: <DollarSign />, color: "bg-green-100 text-green-600" },
          { title: "Total Orders", value: "1.2K", icon: <ShoppingCart />, color: "bg-yellow-100 text-yellow-600" },
          { title: "Growth", value: "12.5%", icon: <TrendingUp />, color: "bg-red-100 text-red-600" },
        ].map((card, i) => (
          <div key={i} className="bg-white shadow rounded-2xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm">{card.title}</h3>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${card.color}`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* === Charts Section === */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
        {/* Line Chart */}
        <div className="bg-white shadow rounded-2xl p-6 xl:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Stocks Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* === Bar Chart + Recent Orders === */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Bar Chart */}
        <div className="bg-white shadow rounded-2xl p-6 xl:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 text-left border-b">
                <th className="py-2">Order ID</th>
                <th className="py-2">Customer</th>
                <th className="py-2">Total</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="py-2 font-semibold">{order.id}</td>
                  <td className="py-2">{order.customer}</td>
                  <td className="py-2">{order.total}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
