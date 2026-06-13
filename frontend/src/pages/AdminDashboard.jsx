import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchRestaurants();
    fetchReservations();
  }, []);

  const fetchRestaurants = async () => {
    const response = await fetch(
      "https://week6-06-fullstack-webthism.onrender.com/api/restaurants"
    );

    const data = await response.json();

    setRestaurants(data);
  };

  const fetchReservations = async () => {
    const response = await fetch(
      "https://week6-06-fullstack-webthism.onrender.com/api/reservations"
    );

    const data = await response.json();

    setReservations(data);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>👨‍💼 Admin Dashboard</h1>

        <h2>
          Restaurants ({restaurants.length})
        </h2>

        {restaurants.map((restaurant) => (
          <p key={restaurant.id}>
            {restaurant.name}
          </p>
        ))}

        <hr />

        <h2>
          Reservations ({reservations.length})
        </h2>

        {reservations.map((reservation) => (
          <p key={reservation.id}>
            Reservation #{reservation.id}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;