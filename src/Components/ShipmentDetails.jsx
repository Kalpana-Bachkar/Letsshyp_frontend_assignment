import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShipmentDetail() {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    fetch("/shipment.json")
      .then(res => res.json())
      .then(data => {
        const s = data.find(item => item.id == id);
        setShipment(s);
      });
  }, [id]);

  if (!shipment)
    return <h2 className="p-6 text-center">Shipment not found</h2>;

  const statusColor =
    shipment.status === "Delivered"
      ? "bg-green-100 text-green-700"
      : shipment.status === "In Transit"
      ? "bg-yellow-100 text-yellow-700"
      : shipment.status === "Pending"
      ? "bg-red-100 text-red-700"
      : shipment.status === "Out for Delivery"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      {/* Back Button */}
      <Link
        to="/"
        className="self-start mb-4 text-black-600 hover:underline bg-blue-300 rounded-md p-2"
      >
        ← Back to List
      </Link>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-blue-600">
            {shipment.trackingNumber}
          </h2>

          <span
            className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${statusColor}`}
          >
            {shipment.status}
          </span>
        </div>

        {/* Details */}
        <div className="space-y-3 text-gray-700">

          <div className="flex justify-between">
            <span className="font-semibold">Sender</span>
            <span>{shipment.sender}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Receiver</span>
            <span>{shipment.receiver}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Last Location</span>
            <span>{shipment.lastLocation}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-semibold">Estimated Delivery</span>
            <span>{shipment.estimatedDelivery}</span>
          </div>

        </div>

      </div>
    </div>
  );
}
