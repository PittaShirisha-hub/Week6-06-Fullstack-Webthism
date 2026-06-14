require("dotenv").config();

const express = require("express");
const cors = require("cors");

const supabase = require("./supabase");

const paymentRoutes = require("./routes/paymentRoutes");

const {
  sendReservationEmail,
} = require("./services/emailService");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   PAYMENT ROUTES
========================= */

app.use("/api/payment", paymentRoutes);

/* =========================
   HOME
========================= */

app.get("/", (req, res) => {
  res.send("Restaurant Reservation API Running...");
});

/* =========================
   RESTAURANTS
========================= */

app.get("/api/restaurants", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("restaurants")
      .select("*");

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* =========================
   MENUS
========================= */

app.get("/api/menus", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("menus")
      .select("*");

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* =========================
   USERS
========================= */

app.get("/api/users", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* =========================
   GET RESERVATIONS
========================= */

app.get("/api/reservations", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("reservations")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


/* =========================
   CREATE RESERVATION
========================= */

app.post("/api/reservations", async (req, res) => {
  try {
    const {
      user_id,
      restaurant_id,
      reservation_date,
      reservation_time,
      guests,
      email,
      status,
    } = req.body;

    const { data, error } = await supabase
      .from("reservations")
      .insert([
        {
          user_id,
          restaurant_id,
          reservation_date,
          reservation_time,
          guests,
          status,
        },
      ])
      .select();

    if (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        error,
      });
    }

    let restaurantName = "Restaurant";

    if (Number(restaurant_id) === 1) {
      restaurantName = "Food Paradise";
    }

    if (Number(restaurant_id) === 2) {
      restaurantName = "Barbeque Nation";
    }

    if (Number(restaurant_id) === 3) {
      restaurantName = "Domino's Pizza";
    }

    res.json({
      success: true,
      message: "Reservation Created Successfully",
      data,
    });


    console.log("Email received:", email);

    sendReservationEmail(
      email,
      restaurantName,
      reservation_date,
      reservation_time,
      guests
    )
      .then(() => {
        console.log("Email sent successfully");
      })
      .catch((err) => {
        console.log("Email Error:", err.message);
      });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* =========================
   DELETE RESERVATION
========================= */

app.delete("/api/reservations/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("reservations")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json({
        success: false,
        error,
      });
    }

    res.json({
      success: true,
      message: "Reservation Cancelled Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});