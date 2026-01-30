# 📦 Shipment Dashboard – Mock Tracking App

A simple **React-based** shipment tracking dashboard that displays mock shipment data, supports filtering, caching, and robust validation/error handling.

---

## 🚀 Getting Started

### ✅ Prerequisites
Before you begin, ensure you have the following installed:
* **Node.js** (v16+ recommended)
* **npm**

### ▶️ Steps to Run the Application

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Kalpana-Bachkar/Letsshyp_frontend_assignment.git
    ```

2.  **Navigate & Install Dependencies**
    Open your terminal in the project folder and run:
    ```bash
    cd letsshyp_assignment
    npm install
    ```

3.  **Start the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit [http://localhost:5173/](http://localhost:5173/) to view the app.

---

## 🧭 Using the Application

### 📄 Mock Data Location
The shipment data is managed via a JSON file located at:
`./letsshyp_assignment/data/shipmentData.json`

### 🏠 Home Page Features
The dashboard displays a comprehensive shipment list including:
* **Tracking ID**
* **Shipment Status**
* **Last Location**
* **Estimated Delivery**
* **View Details Button** (Navigation to individual shipment)

### 🔍 Shipment Details Page
Deep-dive into specific shipment metrics:
* **Sender/Receiver Info**
* **Detailed Status Updates**
* **Location History**

---

## 🔄 Data Management & Error Handling

### Reloading Mock Data
If you modify the source JSON file:
1.  Update `./letsshyp_assignment/data/shipmentData.json`.
2.  Click the **Reload Shipments** button in the UI.
3.  The app will bypass the cache and display the updated data.

### ⚠️ Error Handling
The application includes a validation layer. If the mock data is corrupted or incorrect:
* **Triggers:** Missing required fields, incorrect JSON structure, or invalid data formats.
* **Result:** The UI will intercept the error and display a user-friendly error message rather than crashing.

---

## ✨ Features & Tech Stack

### Key Features
* **Status-based Filtering:** Quickly sort through shipments.
* **LocalStorage Caching:** Persistent data between refreshes.
* **Loading States:** Simulated fetch delays for a realistic UX.
* **Responsive Design:** Fully mobile-friendly via Tailwind CSS.

### 🛠 Tech Stack
* **Framework:** React.js
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Storage:** Browser LocalStorage

---

## 📌 Notes
* **Mock Fetch:** Data fetching is simulated to demonstrate real-world asynchronous patterns.
* **Cache Policy:** The LocalStorage cache is cleared specifically when the "Reload" button is triggered.
* **Validation:** Ensures all mandatory shipment fields exist before rendering.