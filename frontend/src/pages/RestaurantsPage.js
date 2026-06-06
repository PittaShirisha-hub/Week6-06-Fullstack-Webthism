import React, { useEffect, useState } from "react";
import axios from "axios";

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [menus, setMenus] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const restaurantRes = await axios.get(
        "http://localhost:5000/api/restaurants"
      );

      const menuRes = await axios.get(
        "http://localhost:5000/api/menus"
      );

      const reservationRes = await axios.get(
        "http://localhost:5000/api/reservations"
      );

      setRestaurants(restaurantRes.data);
      setMenus(menuRes.data);
      setReservations(reservationRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

      <div
        style={{
          background: "#7c3aed",
          color: "white",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Welcome to Restaurant Reservation System</h1>

        <p>
          Browse restaurants, explore menus and manage reservations.
        </p>

        <button
          onClick={() => (window.location.href = "/menu")}
          style={{
            background: "white",
            color: "#7c3aed",
            fontWeight: "bold",
          }}
        >
          Explore Menu
        </button>
      </div>

      {/* Stats */}

      <div className="stats-container">

        <div className="stats-card">
          <h2>🍽️ {restaurants.length}</h2>
          <p>Restaurants</p>
        </div>

        <div className="stats-card">
          <h2>📋 {menus.length}</h2>
          <p>Menu Items</p>
        </div>

        <div className="stats-card">
          <h2>📅 {reservations.length}</h2>
          <p>Reservations</p>
        </div>

      </div>

      <h1>Featured Restaurants ({restaurants.length})</h1>

      {restaurants.map((restaurant) => (
        <div className="card" key={restaurant.id}>
          <img
            src={restaurant.image_ur}
            alt={restaurant.name}
          />

          <h2>{restaurant.name}</h2>

          <p>{restaurant.description}</p>

          <p>
            <strong>Address:</strong> {restaurant.address}
          </p>

          <p>
            <strong>Phone:</strong> {restaurant.phone}
          </p>

          <button
            onClick={() =>
              (window.location.href = `/menu/${restaurant.id}`)
            }
          >
            View Menu
          </button>
        </div>
      ))}

      <footer>
        <p>Restaurant Reservation System © 2026</p>
      </footer>

    </div>
  );
}

export default RestaurantsPage;