# 🍽️ Restaurant Reservation System – Week 6

## 📌 Project Overview

The Restaurant Reservation System is a full-stack web application that allows users to browse restaurants, view menus, make reservations, complete payments, receive email confirmations, and manage bookings through a dashboard.

This project was developed as part of the Full Stack Development Week 6 assignment.

---

## 🚀 Features

### 👤 User Features

* Browse Restaurants
* View Restaurant Menus
* Book Table Reservations
* Secure Reservation Payment
* Payment Success Screen
* Reservation Confirmation Screen
* Email Reservation Confirmation
* User Dashboard
* Cancel Reservations

### 👩‍💼 Admin Features

* View All Restaurants
* View Reservations
* Admin Dashboard

### 💳 Payment Features

* Razorpay Integration
* Order Creation API
* Reservation Fee Payment

### 📧 Email Features

* Gmail SMTP Integration
* Automatic Reservation Confirmation Email

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* CSS

### Backend

* Node.js
* Express.js

### Database

* Supabase

### Payment Gateway

* Razorpay

### Email Service

* Nodemailer
* Gmail App Password

---

## 📂 Project Structure

```text
restaurant-reservation-system
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── server.js
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.js
│
├── screenshots
│
└── README.md
```

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](screenshots/home.png)

---

### 🍽️ Menu Page

![Menu Page](screenshots/menu.png)

---

### 📅 Reservation Page

![Reservation Page](screenshots/reservation.png)

---

### 💳 Payment Page

![Payment Page](screenshots/payment.png)

---

### ✅ Payment Success Page

![Payment Success](screenshots/payment-success1.png)

---

### 🎉 Reservation Confirmation

![Confirmation](screenshots/confirmation.png)

---

### 📊 User Dashboard

![Dashboard](screenshots/dashboard.png)

---

### 👩‍💼 Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

---

### 📧 Email Notification

![Email Notification](screenshots/email.png)

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/PittaShirisha-hub/Week6-06-Fullstack-Webthism.git
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔑 Environment Variables

Create a `.env` file inside backend:

```env
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_KEY=YOUR_SUPABASE_KEY

RAZORPAY_KEY_ID=YOUR_RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET=YOUR_RAZORPAY_KEY_SECRET

EMAIL_USER=YOUR_EMAIL
EMAIL_PASS=YOUR_APP_PASSWORD

PORT=5000
```

---

## 📡 API Endpoints

### Restaurants

```http
GET /api/restaurants
```

### Menus

```http
GET /api/menus
```

### Reservations

```http
GET /api/reservations
POST /api/reservations
DELETE /api/reservations/:id
```

### Payments

```http
POST /api/payment/create-order
```

---

## ✅ Week 6 Deliverables Completed

* Complete Working Application
* Menu Browsing
* Reservation System
* Razorpay Payment Integration
* Email Notifications
* User Dashboard
* Admin Dashboard
* Supabase Database Integration
* Backend APIs
* GitHub Repository

---

## 👩‍💻 Developer

**Shirisha Pitta**

GitHub:
https://github.com/PittaShirisha-hub

---

## ⭐ Project Status

Completed Successfully ✅
# Week6-06-Fullstack-Webthism
# Week6-06-Fullstack-Webthism
# Week6-06-Fullstack-Webthism
# Week6-06-Fullstack-Webthism
# Week6-06-Fullstack-Webthism
