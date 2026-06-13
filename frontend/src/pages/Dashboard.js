import React, { useEffect, useState } from "react";
import axios from "axios";

function DashboardPage() {
  const [user, setUser] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userRes = await axios.get(
        "https://week6-06-fullstack-webthism.onrender.com/api/users"
      );

      const reservationRes = await axios.get(
        "https://week6-06-fullstack-webthism.onrender.com/api/reservations"
      );

      const restaurantRes = await axios.get(
        "https://week6-06-fullstack-webthism.onrender.com/api/restaurants"
      );

      const menuRes = await axios.get(
        "https://week6-06-fullstack-webthism.onrender.com/api/menus"
      );

      setUser(userRes.data[0]);
      setReservations(reservationRes.data);
      setRestaurants(restaurantRes.data);
      setMenus(menuRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelReservation = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this reservation?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://week6-06-fullstack-webthism.onrender.com/api/reservations/${id}`
      );

      setReservations(
        reservations.filter(
          (reservation) => reservation.id !== id
        )
      );

      alert("Reservation Cancelled Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const getRestaurantName = (id) => {
    const restaurant = restaurants.find(
      (r) => r.id === id
    );

    return restaurant ? restaurant.name : "Unknown";
  };

  return (
    <div className="container">

      <h1>User Dashboard</h1>

      {/* Profile */}

      <div className="card">
        <h2>👤 Profile Information</h2>

        {user && (
          <>
            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </>
        )}
      </div>

      {/* Stats */}

      <div className="stats-container">

        <div className="stats-card">
          <h2>{restaurants.length}</h2>
          <p>Restaurants</p>
        </div>

        <div className="stats-card">
          <h2>{menus.length}</h2>
          <p>Menu Items</p>
        </div>

        <div className="stats-card">
          <h2>{reservations.length}</h2>
          <p>Reservations</p>
        </div>

      </div>

      {/* Reservations */}

      <div className="card">
        <h2>📅 My Reservations</h2>

        <table>
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td>
                  {getRestaurantName(
                    reservation.restaurant_id
                  )}
                </td>

                <td>
                  {reservation.reservation_date}
                </td>

                <td>
                  {reservation.reservation_time}
                </td>

                <td>{reservation.guests}</td>

                <td>{reservation.status}</td>

                <td>
                  <button
                    onClick={() =>
                      cancelReservation(
                        reservation.id
                      )
                    }
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default DashboardPage;