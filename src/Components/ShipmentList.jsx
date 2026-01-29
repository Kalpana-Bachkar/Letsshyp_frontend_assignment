import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShipmentList() {
  const [shipments, setShipments] = useState([]);
  const [status,setStatus]=useState("All")
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    fetch("/shipment.json")
      .then((res) => res.json())
      .then((data) => 
        setTimeout(()=>{
      setShipments(data)
      setLoading(true)

        },1000))
      .catch((err) => console.log(err));
  }, []);
  
      const filteredShipment=
      status==="All"?
      shipments:
      shipments.filter(s=>s.status===status)
  if(!loading) return(<h1 className=" min-h-screen w-full bg-gray-200 flex justify-center items-center text-3xl font-mono">...Fetching data</h1>)


  return (
    
    <div className="min-h-screen bg-gray-300 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Shipment List</h1>
        <label>Status Filter </label>  {'  '}
         <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mb-6 p-2 rounded"
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="In Transit">In Transit</option>
        <option value="Out for Delivery">Out for Delivery</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredShipment.map((shipment) => (
          <div
            key={shipment.id}
            className="bg-white p-5 rounded-lg shadow border hover:shadow-lg transition"
          >
            <h2 className="font-bold text-blue-600 text-lg">
              {shipment.trackingNumber}
            </h2>
            <p className="mt-1">
              <span className="font-semibold">Status:   </span>
              <span
                className={
                  shipment.status === "Delivered"
                    ? "bg-green-500"
                    : shipment.status === "In Transit"
                    ? "bg-orange-500"
                    : shipment.status==="Pending"
                    ? "bg-red-500"
                    :shipment.status==="Out for Delivery"
                    ?"bg-blue-300"
                    :"bg-gray-400"
                    
                }
              >
                {shipment.status}
              </span>
            </p>
            <p>
              <span className="font-semibold">Last Location:</span>{" "}
              {shipment.lastLocation}
            </p>
            <p>
              <span className="font-semibold">ETA:</span>{" "}
              {shipment.estimatedDelivery}
            </p>
            

            <Link
              to={`/shipment/${shipment.id}`}
              className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
