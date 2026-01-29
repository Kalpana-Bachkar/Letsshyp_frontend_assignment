import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShipmentDetail from "./Components/ShipmentDetails";
import ShipmentList from "./Components/ShipmentList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShipmentList />} />
        <Route path="/shipment/:id" element={<ShipmentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
