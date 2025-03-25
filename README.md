# Syncthreads Map Integration Project
## 🚀 Overview
This is a **React + Node.js** project integrating **OpenStreetMap (Leaflet)** with JWT-based authentication. The application includes a login system, dashboard, and interactive map functionality.

## 🎨 Figma Design
[View UI/UX Design on Figma] [https://www.figma.com/design/C2V01BTBc0oBNTLEWiY5E5/Syncthreads-Computing-Pvt-Ltd?node-id=0-1&p=f&t=BLShJoZWdILhgZRP-0]

## Home Page
 ![Home Page](https://res.cloudinary.com/dbhg0qzls/image/upload/v1742818151/Screenshot_12_buyysc.png)

## Login Page
 ![Login Page](https://res.cloudinary.com/dbhg0qzls/image/upload/v1742725285/Login_Page_by0eu0.png)

## Dash Board Page
![Login Page](https://res.cloudinary.com/dbhg0qzls/image/upload/v1742795087/Screenshot_10_ghixr4.png)

## Map View Page

![Login Page](https://res.cloudinary.com/dbhg0qzls/image/upload/v1742795086/Screenshot_11_pfh3bv.png)

## 📌 Features
- **Secure Authentication:** JWT-based login system.
- **Dashboard:** Displays cards with unique IDs.
- **Map View:** Opens a map of India centered on the user's current location.
- **Zoom In/Out:** Smooth zooming functionality.
- **Conditional Routing:** Redirects to Dashboard if logged in; otherwise, it shows an authentication error.

## 🛠️ Tech Stack
### Frontend:
- **React.js** (with React Router)
- **Leaflet.js** (for OpenStreetMap integration)
- **Styled Components / Tailwind CSS** (for UI design)

### Backend:
- **Node.js + Express.js** (API handling)
- **JWT (JSON Web Token)** (for authentication)

### Database:
- **MongoDB / PostgreSQL** (based on preference)

## 📌 API Endpoints
### 1️⃣ Authentication
```http
POST /api/login
```
- **Request:** `{ "username": "admin", "password": "password123" }`
- **Response:** `{ "token": "717c14c6dcad409596f0ca97d913dfcd" }`

### 2️⃣ Dashboard
```http
GET /api/dashboard
```
- **Response:** `{ "cards": [{ "id": 1, "title": "Card 1" }, { "id": 2, "title": "Card 2" }] }`

### 3️⃣ Map View
```http
GET /api/map
```
- **Response:** If logged in, returns `{ "location": "India", "zoom": 5 }`
- If not logged in: `{ "error": "User not logged in" }`

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repo/syncthreads-map.git
cd syncthreads-map
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Frontend
```sh
npm start
```

### 4️⃣ Run the Backend
```sh
cd backend
npm install
node server.js
```

## 🎯 Future Improvements
- Add **user role management**
- Enhance UI/UX with **animations**
- Optimize **API performance**



