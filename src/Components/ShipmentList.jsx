import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShipmentList() {
  const [shipments, setShipments] = useState([]);
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedData = localStorage.getItem("shipments");

    if (cachedData) {
      setShipments(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetch("/shipment.json")
        .then((res) => res.json())
        .then((data) =>
          setTimeout(() => {
            setShipments(data);
            localStorage.setItem("shipments", JSON.stringify(data));
            setLoading(false);
          }, 2000)
        );
    }
  }, []);

  const clearCache = () => {
    localStorage.removeItem("shipments");
    window.location.reload();
  };

  const filteredShipment =
    status === "All"
      ? shipments
      : shipments.filter((s) => s.status === status);

  if (loading)
    return (
      <h1 className="min-h-screen flex justify-center items-center text-3xl font-mono">
        Fetching data...
      </h1>
    );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-200 text-green-700";
      case "In Transit":
        return "bg-yellow-200 text-yellow-700";
      case "Pending":
        return "bg-red-200 text-red-700";
      case "Out for Delivery":
        return "bg-blue-200 text-blue-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Shipment Dashboard
      </h1>

      {/* Filter + Clear Cache */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <label className="font-semibold mr-2">Filter by Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 rounded border"
          >
            <option>All</option>
            <option>Pending</option>
            <option>In Transit</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>

        <button
          onClick={clearCache}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Clear Cache
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShipment.map((shipment) => (
          <div
            key={shipment.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <h2 className="font-bold text-blue-600 text-xl ">
              {shipment.trackingNumber}
            </h2>

            <div className="mt-2 flex justify-between items-center">
              <span className="font-semibold">Status</span>
              <span
                className={`px-3 py-1 text-sm rounded-full ${getStatusStyle(
                  shipment.status
                )}`}
              >
                {shipment.status}
              </span>
            </div>

            <p className="mt-2">
              <span className="font-semibold">Last Location:</span>{" "}
              {shipment.lastLocation}
            </p>

            <p>
              <span className="font-semibold">ETA:</span>{" "}
              {shipment.estimatedDelivery}
            </p>

            <Link
              to={`/shipment/${shipment.id}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
