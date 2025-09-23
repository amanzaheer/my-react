import React from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Flightscomponents/Table";

export default function Flights() {
  const headers = [
    "Reference#",
    "Status",
    "PNR Details",
    "Hotel Names",
    "Airline",
    "Date & Time",
    "Price",
    "Commission",
    "Action",
  ];

  const rows = [
    {
      id: "QDS456",
      data: [
        "QDS456",
        "Refunded",
        "John Doe",
        "Holiday Inn",
        "✈ Nova Air",
        "12-09-2025 14:30",
        "$450",
        "$40",
        "✏️",
      ],
    },
    {
      id: "QDS789",
      data: [
        "QDS789",
        "Confirmed",
        "Jane Smith",
        "Marriott",
        "✈ PIA",
        "13-09-2025 10:00",
        "$500",
        "$50",
        "✏️",
      ],
    },
    {
      id: "QDS321",
      data: [
        "QDS321",
        "Cancelled",
        "Ali Khan",
        "Pearl Continental",
        "✈ Emirates",
        "14-09-2025 22:15",
        "$620",
        "$55",
        "✏️",
      ],
    },
    {
      id: "QDS654",
      data: [
        "QDS654",
        "OnHold",
        "Sara Ahmed",
        "Serena Hotel",
        "✈ Qatar Airways",
        "15-09-2025 08:45",
        "$700",
        "$60",
        "✏️",
      ],
    },
    {
      id: "QDS987",
      data: [
        "QDS987",
        "Confirmed",
        "Michael Lee",
        "Hilton",
        "✈ Turkish Airlines",
        "16-09-2025 16:20",
        "$550",
        "$45",
        "✏️",
      ],
    },
  ];

  return (
    <Layout>
      <div className="p-4">
        {/* ✅ now each row has id + data */}
        <Table title="Flights" headers={headers} rows={rows} />
      </div>
    </Layout>
  );
}
