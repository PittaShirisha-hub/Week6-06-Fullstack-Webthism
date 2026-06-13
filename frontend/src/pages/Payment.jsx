import React from "react";

function Payment() {
  const reservation =
    JSON.parse(localStorage.getItem("reservation")) || {};

  const handlePayment = async () => {
    try {
      const response = await fetch(
        "https://week6-06-fullstack-webthism.onrender.com/api/payment/create-order",
        {
          method: "POST",
        }
      );

      const order = await response.json();

      console.log(order);

      alert("Reservation Payment Successful!");

      window.location.href = "/payment-success";
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }
  };

  return (
    <div className="container">
      <div
        className="card"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "30px",
        }}
      >
        <h1>💳 Reservation Payment</h1>

        <hr />

        <p>
          <strong>Restaurant:</strong>{" "}
          {reservation.restaurant}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {reservation.date}
        </p>

        <p>
          <strong>Time:</strong>{" "}
          {reservation.time}
        </p>

        <p>
          <strong>Guests:</strong>{" "}
          {reservation.guests}
        </p>

        <hr />

        <h2>Reservation Fee: ₹500</h2>

        <p>
          Secure your table reservation by
          completing the payment.
        </p>

        <button
          onClick={handlePayment}
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;