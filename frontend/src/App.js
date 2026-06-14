import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";

import RestaurantsPage from "./pages/RestaurantsPage";
import MenuPage from "./pages/MenuPage";
import Dashboard from "./pages/Dashboard";
import ReservationPage from "./pages/ReservationPage";

import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import ConfirmationPage from "./pages/ConfirmationPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  useEffect(() => {
    // Wake up backend when app loads
    fetch(
      "https://week6-06-fullstack-webthism.onrender.com/api/restaurants"
    ).catch((error) => {
      console.log("Backend wake-up error:", error);
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<RestaurantsPage />}
        />

        <Route
          path="/menu"
          element={<MenuPage />}
        />

        <Route
          path="/menu/:restaurantId"
          element={<MenuPage />}
        />

        <Route
          path="/reservation"
          element={<ReservationPage />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        <Route
          path="/payment-success"
          element={<PaymentSuccess />}
        />

        <Route
          path="/confirmation"
          element={<ConfirmationPage />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;