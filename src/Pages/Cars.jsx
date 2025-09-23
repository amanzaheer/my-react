import React from "react";
import Layout from "../Components/Layout";
import Table from "../Components/Carscomponent/Table";

export default function Cars() {
  const headers = [
    "Reference#",
    "Status",
    "PNR Details",
    "Car Name",      // 🔹 changed from Hotel Names
    "Pick Date",     // 🔹 changed from City
    "Date & Time",
    "Price",
    "Commission",
    "Action",
  ];

  const rows = [
    {
      id: "CAR456",
      data: [
        "CAR456",
        "Refunded",
        "John Doe",
        "Toyota Corolla",
        "2025-09-30",
        "12-09-2025 14:30",
        "$250",
        "$20",
        "👁️",
      ],
    },
    {
      id: "CAR789",
      data: [
        "CAR789",
        "Confirmed",
        "Jane Smith",
        "Honda Civic",
        "2025-10-01",
        "13-09-2025 10:00",
        "$300",
        "$25",
        "👁️",
      ],
    },
    {
      id: "CAR321",
      data: [
        "CAR321",
        "Cancelled",
        "Ali Khan",
        "Kia Sportage",
        "2025-10-05",
        "14-09-2025 22:15",
        "$400",
        "$30",
        "👁️",
      ],
    },
    {
      id: "CAR654",
      data: [
        "CAR654",
        "OnHold",
        "Sara Ahmed",
        "Suzuki Swift",
        "2025-10-10",
        "15-09-2025 08:45",
        "$280",
        "$22",
        "👁️",
      ],
    },
    {
      id: "CAR987",
      data: [
        "CAR987",
        "Confirmed",
        "Michael Lee",
        "Hyundai Tucson",
        "2025-10-12",
        "16-09-2025 16:20",
        "$350",
        "$27",
        "👁️",
      ],
    },
  ];

  return (
    <Layout>
      <div className="p-4">
        <Table title="Cars" headers={headers} rows={rows} />
      </div>
    </Layout>
  );
}
