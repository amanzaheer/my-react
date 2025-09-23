import React from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Hotelscomponent/Table";
// import Table from "../Components/Hotelscomponents/Table";

export default function Hotels() {
  const headers = [
    "Reference#",
    "Status",
    "PNR Details",
    "Hotel Names",
    "City",          // ✅ City instead of Airline
    "Date & Time",
    "Price",
    "Commission",
    "Action",
  ];

  const rows = [
    {
      id: "HTL456",
      data: [
        "HTL456",
        "Refunded",
        "John Doe",
        "Holiday Inn",
        "Lahore",
        "12-09-2025 14:30",
        "$450",
        "$40",
        "👁️",
      ],
    },
    {
      id: "HTL789",
      data: [
        "HTL789",
        "Confirmed",
        "Jane Smith",
        "Marriott",
        "Karachi",
        "13-09-2025 10:00",
        "$500",
        "$50",
        "👁️",
      ],
    },
    {
      id: "HTL321",
      data: [
        "HTL321",
        "Cancelled",
        "Ali Khan",
        "Pearl Continental",
        "Islamabad",
        "14-09-2025 22:15",
        "$620",
        "$55",
        "👁️",
      ],
    },
    {
      id: "HTL654",
      data: [
        "HTL654",
        "OnHold",
        "Sara Ahmed",
        "Serena Hotel",
        "Murree",
        "15-09-2025 08:45",
        "$700",
        "$60",
        "👁️",
      ],
    },
    {
      id: "HTL987",
      data: [
        "HTL987",
        "Confirmed",
        "Michael Lee",
        "Hilton",
        "Multan",
        "16-09-2025 16:20",
        "$550",
        "$45",
        "👁️",
      ],
    },
  ];

  return (
    <Layout>
      <div className="p-4">
        <Table title="Hotels" headers={headers} rows={rows} />
      </div>
    </Layout>
  );
}
