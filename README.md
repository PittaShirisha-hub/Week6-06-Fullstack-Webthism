# 🍽️ Restaurant Reservation System

A Full Stack Restaurant Reservation System built using **React.js**, **Node.js**, **Express.js**, and **Supabase**. Users can browse restaurants, view menus, make reservations, and manage their bookings through a user dashboard.

## 🚀 Live Repository

GitHub Repository:

https://github.com/PittaShirisha-hub/Week5-06-Fullstack-Webthism.git

---

## 📌 Features

### Restaurant Management
- View all restaurants
- Restaurant details with image, description, address, and phone number
- View restaurant-specific menu

### Menu Management
- View all menu items
- Search menu items
- Filter menu by restaurant

### Reservation System
- Book a reservation
- Select restaurant, date, time, and number of guests
- Store reservation data in Supabase database

### Dashboard
- View user profile information
- View reservation history
- Dynamic reservation count
- Dynamic restaurant count
- Dynamic menu count
- Cancel reservations

### Backend API
- Fetch restaurants
- Fetch menu items
- Fetch users
- Create reservations
- Delete reservations

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- CORS
- Dotenv

### Database
- Supabase

---

## 📂 Project Structure

```text
Restaurant-Reservation-System
│
├── backend
│   ├── server.js
│   ├── supabase.js
│   ├── .env
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── App.js
│   │   └── App.css
│   │
│   └── package.json
│
├── screenshots
│
└── README.md
```

---

## 🗄️ Database Tables

### Restaurants

| Column | Type |
|----------|----------|
| id | bigint |
| name | text |
| description | text |
| address | text |
| phone | text |
| image_url | text |

---

### Menus

| Column | Type |
|----------|----------|
| id | bigint |
| restaurant_id | bigint |
| name | text |
| description | text |
| price | numeric |
| category | text |

---

### Reservations

| Column | Type |
|----------|----------|
| id | bigint |
| user_id | bigint |
| restaurant_id | bigint |
| reservation_date | date |
| reservation_time | time |
| guests | int |
| status | text |

---

### Users

| Column | Type |
|----------|----------|
| id | bigint |
| name | text |
| email | text |
| password | text |

---

## 🔌 API Endpoints

### Restaurants

```http
GET /api/restaurants
```

### Menus

```http
GET /api/menus
```

### Users

```http
GET /api/users
```

### Reservations

```http
GET /api/reservations
```

### Create Reservation

```http
POST /api/reservations
```

Request Body:

```json
{
  "user_id": 1,
  "restaurant_id": 1,
  "reservation_date": "2026-06-08",
  "reservation_time": "12:30",
  "guests": 4,
  "status": "Confirmed"
}
```

### Delete Reservation

```http
DELETE /api/reservations/:id
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/PittaShirisha-hub/Week5-06-Fullstack-Webthism.git
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
SUPABASE_URL=https://fjhanxfvohixwdctrwvd.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaGFueGZ2b2hpeHdkY3Ryd3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNjQ3OTgsImV4cCI6MjA5NTk0MDc5OH0.DbGcX56Z47QJu6oVbUenDLQ2_UXR8mDwDGHC9-iT7Rs
PORT=5000
```

Start Backend

```bash
node server.js
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Application runs on:

```text
http://localhost:3000
```

Backend runs on:

```text
http://localhost:5000
```

---

## 📸 Screenshots

### Home Page

![Home](./screenshots/homepage1.png)

### Restaurant Page

![Restaurant](./screenshots/homepage2.png)

### Menu Page

![Menu](./screenshots/menu1.png)

### Reservation Page

![Reservation](./screenshots/reservation1.png)

### Dashboard

![Dashboard](./screenshots/dashboard.png)

---

## 🎯 Learning Outcomes

- React Components
- React Router
- State Management using Hooks
- API Integration using Axios
- Node.js and Express.js
- REST API Development
- Supabase Database Integration
- CRUD Operations
- Full Stack Application Development

---

## 👩‍💻 Author

**Shirisha Pitta**

GitHub:
https://github.com/PittaShirisha-hub

---

## 📄 License

This project is developed for educational and learning purposes.# Week5-06-Fullstack-Webthism
