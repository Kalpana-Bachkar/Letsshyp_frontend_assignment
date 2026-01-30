import React from 'react'
import { Link } from 'react-router-dom'

function ShipmentCard({shipment,status}) {
  return (
    <div className=" bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg">

        {/* Header */}
        <div className="mb-6 ">
          <h2 className="text-2xl font-bold text-blue-600">
            {shipment.trackingNumber}
          </h2>

          <span
            className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${status}`}
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
          

          <Link
              to={`/shipment/${shipment.id}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </Link>
        </div>

      </div>
    </div>
  )
}

export default ShipmentCard
