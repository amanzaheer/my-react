import React from "react";
import Layout from "../Components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Dashboard
        </h1>
        <p className="text-gray-600">
          Here's an overview of your oggaair dashboard
        </p>
      </div>

      {/* Stats Cards */}
    </Layout>
  );
}
