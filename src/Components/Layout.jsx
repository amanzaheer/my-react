import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="pt-25 pl-70 pr-6">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
