import React from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Busescomponent/Table";
import Topboxes from "../Components/Flightscomponents/Topboxes";
// import Table from "../Components/Busescomponent/Table";

export default function Buses() {
  const headers = [
    "Reference#",
    "Status",
    "PNR Details",
    "Bus Name",      // 🔹 Car Name ➜ Bus Name
    "Pick Date",     // 🔹 same as Cars
    "Date & Time",
    "Price",
    "Commission",
    "Action",
  ];

  const rows = [
    {
      id: "BUS456",
      data: [
        "BUS456",
        "Refunded",
        "John Doe",
        "Daewoo Express",
        "2025-09-30",
        "12-09-2025 14:30",
        "$40",
        "$5",
        "👁️",
      ],
    },
    {
      id: "BUS789",
      data: [
        "BUS789",
        "Confirmed",
        "Jane Smith",
        "Faisal Movers",
        "2025-10-01",
        "13-09-2025 10:00",
        "$35",
        "$4",
        "👁️",
      ],
    },
    {
      id: "BUS321",
      data: [
        "BUS321",
        "Cancelled",
        "Ali Khan",
        "Skyways",
        "2025-10-05",
        "14-09-2025 22:15",
        "$50",
        "$6",
        "👁️",
      ],
    },
    {
      id: "BUS654",
      data: [
        "BUS654",
        "OnHold",
        "Sara Ahmed",
        "Bilal Travels",
        "2025-10-10",
        "15-09-2025 08:45",
        "$45",
        "$5",
        "👁️",
      ],
    },
    {
      id: "BUS987",
      data: [
        "BUS987",
        "Confirmed",
        "Michael Lee",
        "Kohistan Express",
        "2025-10-12",
        "16-09-2025 16:20",
        "$55",
        "$7",
        "👁️",
      ],
    },
  ];

  return (
    <Layout>
      <Topboxes/>
      <div className="p-2">
        <Table title="Buses" headers={headers} rows={rows} />
      </div>
    </Layout>
  );
}
