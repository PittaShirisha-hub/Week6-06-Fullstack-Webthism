import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MenuPage() {
  const [menus, setMenus] = useState([]);
  const [search, setSearch] = useState("");

  const { restaurantId } = useParams();

  const restaurants = {
    1: {
      name: "Food Paradise",
      address: "Hyderabad",
      phone: "9876543210",
    },
    2: {
      name: "Barbeque Nation",
      address: "Hyderabad",
      phone: "9876500000",
    },
    3: {
      name: "Absolute Barbecues",
      address: "Hyderabad",
      phone: "9876511111",
    },
    4: {
      name: "Paradise Biryani",
      address: "Hyderabad",
      phone: "9876522222",
    },
    5: {
      name: "KFC",
      address: "Hyderabad",
      phone: "9876533333",
    },
    6: {
      name: "Domino's Pizza",
      address: "Hyderabad",
      phone: "9876544444",
    },
  };

  useEffect(() => {
    axios
      .get("https://week6-06-fullstack-webthism.onrender.com/api/menus")
      .then((res) => {
        if (restaurantId) {
          setMenus(
            res.data.filter(
              (menu) =>
                menu.restaurant_id === Number(restaurantId)
            )
          );
        } else {
          setMenus(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [restaurantId]);

  return (
    <div className="container">
      <button
        onClick={() => (window.location.href = "/")}
        style={{ marginBottom: "20px" }}
      >
        ← Back to Restaurants
      </button>

      {restaurantId && restaurants[restaurantId] && (
        <div className="card">
          <h1>{restaurants[restaurantId].name} Menu</h1>

          <p>
            <strong>📍 Address:</strong>{" "}
            {restaurants[restaurantId].address}
          </p>

          <p>
            <strong>📞 Phone:</strong>{" "}
            {restaurants[restaurantId].phone}
          </p>
        </div>
      )}

      {!restaurantId && (
        <h1>Restaurant Menu ({menus.length})</h1>
      )}

      <input
        type="text"
        placeholder="Search menu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {menus
        .filter((menu) =>
          menu.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((menu) => (
          <div className="card" key={menu.id}>
            <img
              src={menu.image_url}
              alt={menu.name}
            />

            <h2>{menu.name}</h2>

            <p>{menu.description}</p>

            <h3>₹{menu.price}</h3>

            <p>{menu.category}</p>
          </div>
        ))}
    </div>
  );
}

export default MenuPage;