import React from "react";
import Layout from "../Components/Layout";
import Topboxes from "../Components/Flightscomponents/Topboxes";

export default function Dashboard() {
  return (
    <Layout>
      {/* Dashboard Header */}
      <div className="mb-8">
       <Topboxes/>
      </div>


      {/* Stats Cards */}
    </Layout>
  );
}
