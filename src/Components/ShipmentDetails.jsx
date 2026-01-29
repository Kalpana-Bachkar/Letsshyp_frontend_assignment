import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShipmentDetail() {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    fetch("/shipment.json")
      .then(res => res.json())
      .then(data => {
        const s = data.find(item => item.id ==id);
        setShipment(s);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!shipment) return <h2 className="p-6">Shipment not found</h2>;

  return (
    <div className="min-h-screen w-full bg-gray-200 p-6  justify-center items-center">
      <Link to="/" className="
      bg-green-400 text-black-500 hover:underline mb-4 inline-block">← Back to List</Link>
      
      <div className="bg-white p-6 rounded-lg shadow border max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-3">{shipment.trackingNumber}</h2>
        <p><span className="font-semibold">Status:</span> <span
        className={shipment.status === "Delivered"
                    ? "bg-green-500"
                    : shipment.status === "In Transit"
                    ? "bg-orange-500"
                    : shipment.status==="Pending"
                    ? "bg-red-400"
                    :shipment.status==="Out for Delivery"
                    ?"bg-blue-300"
                    :"bg-gray-400"
                    
                }>{shipment.status} </span></p>
        <p><span className="font-bold">Sender:</span> {shipment.sender}</p>
        <p><span className="font-bold">Receiver:</span> {shipment.receiver}</p>
        <p><span className="font-bold">Last Location:</span> {shipment.lastLocation}</p>
        <p><span className="font-bold">Estimated Delivery:</span> {shipment.estimatedDelivery}</p>
      </div>
    </div>
  );
}
