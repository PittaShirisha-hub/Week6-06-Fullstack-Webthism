import React, { useState } from "react";

function ReservationPage() {
  const [form, setForm] = useState({
    restaurant: "",
    date: "",
    time: "",
    guests: "",
  });

  const restaurantMap = {
    "Food Paradise": 1,
    "Barbeque Nation": 2,
    "Domino's Pizza": 3,
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://week6-06-fullstack-webthism.onrender.com/api/reservations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: 1,
            restaurant_id: restaurantMap[form.restaurant],
            reservation_date: form.date,
            reservation_time: form.time,
            guests: Number(form.guests),
            status: "Confirmed",
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        alert("Failed to save reservation");
        return;
      }

      localStorage.setItem(
        "reservation",
        JSON.stringify({
          restaurant: form.restaurant,
          date: form.date,
          time: form.time,
          guests: form.guests,
        })
      );

      alert("Reservation Saved Successfully!");

      setForm({
        restaurant: "",
        date: "",
        time: "",
        guests: "",
      });

      window.location.href = "/payment";
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🍽️ Book a Reservation</h1>

        <form onSubmit={handleSubmit}>
          <p>Restaurant</p>

          <select
            name="restaurant"
            value={form.restaurant}
            onChange={handleChange}
            required
          >
            <option value="">Select Restaurant</option>
            <option>Food Paradise</option>
            <option>Barbeque Nation</option>
            <option>Domino's Pizza</option>
          </select>

          <p>Date</p>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <p>Time</p>

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />

          <p>Guests</p>

          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
            required
          />

          <br />
          <br />

          <button type="submit">
            Book Reservation
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservationPage;