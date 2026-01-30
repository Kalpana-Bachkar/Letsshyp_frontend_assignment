📦 Shipment Dashboard – Mock Tracking App

A simple React-based shipment tracking dashboard that displays mock shipment data, supports filtering, caching, and basic validation/error handling.

🚀 Getting Started
✅ Prerequisites

Make sure you have installed:

Node.js (v16+ recommended)

npm

▶️ Steps to Run the Application

Clone the repository

git clone <repo-name>


Open the project in Visual Studio Code

Install dependencies

Open terminal in the project folder and run:

cd letsshyp_assignment
npm install


Start the development server

npm run dev


Open in browser

http://localhost:5173/

🧭 Using the Application
📄 Mock Data Location

Shipment mock data is stored at:

./letsshyp_assignment/data/shipmentData.json

🏠 Home Page Features

Displays shipment list with:

Tracking ID

Shipment Status

Last Location

Estimated Delivery

View Details button

🔍 Shipment Details Page

Click View Details to see:

Tracking ID

Shipment Status

Sender Info

Receiver Info

Last Location

Estimated Delivery

🔄 Reloading Mock Data

If you update the mock JSON:

Modify:

./letsshyp_assignment/data/shipmentData.json


Click Reload Shipments button

✅ Updated data will be displayed

⚠️ Error Handling

If mock data is incorrect (e.g., missing required fields):

Modify JSON with invalid structure

Click Reload Shipments

❌ App will show an error message

Example cases:

Missing fields

Incorrect structure

Invalid data format

✨ Features

Shipment listing dashboard

Status-based filtering

LocalStorage caching

Loading state simulation

Basic data validation

Error handling for invalid data

Responsive UI (Tailwind CSS)

🛠 Tech Stack

React.js

Vite

Tailwind CSS

LocalStorage for caching

📌 Notes

Mock fetch is simulated for demo purposes

Cache clears on reload button click

Validation ensures required shipment fields exist
