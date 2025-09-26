import React from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Railscomponent/Table";
import Topboxes from "../Components/Flightscomponents/Topboxes";
// import Table from "../Components/Railscomponents/Table"; // ✅ adjust path to where you save the table

export default function Rails() {
  const headers = [
    "Reference#",
    "Status",
    "PNR Details",
    "Rail Names",     // ✅ Rail Names instead of Hotel Names
    "Station",        // ✅ City → Station (rename if needed)
    "Date & Time",
    "Price",
    "Commission",
    "Action",
  ];

  const rows = [
    {
      id: "RL456",
      data: [
        "RL456",
        "Refunded",
        "John Doe",
        "Green Express",
        "Lahore",
        "12-09-2025 14:30",
        "$150",
        "$10",
        "👁️",
      ],
    },
    {
      id: "RL789",
      data: [
        "RL789",
        "Confirmed",
        "Jane Smith",
        "Blue Mountain",
        "Karachi",
        "13-09-2025 10:00",
        "$200",
        "$15",
        "👁️",
      ],
    },
    {
      id: "RL321",
      data: [
        "RL321",
        "Cancelled",
        "Ali Khan",
        "City Line",
        "Islamabad",
        "14-09-2025 22:15",
        "$180",
        "$12",
        "👁️",
      ],
    },
    {
      id: "RL654",
      data: [
        "RL654",
        "OnHold",
        "Sara Ahmed",
        "Fast Track",
        "Multan",
        "15-09-2025 08:45",
        "$170",
        "$11",
        "👁️",
      ],
    },
    {
      id: "RL987",
      data: [
        "RL987",
        "Confirmed",
        "Michael Lee",
        "Eastern Express",
        "Murree",
        "16-09-2025 16:20",
        "$190",
        "$13",
        "👁️",
      ],
    },
  ];

  return (
    <Layout>
      <Topboxes/>
      <div className="p-2">
        <Table title="Rails" headers={headers} rows={rows} />
      </div>
    </Layout>
  );
}
