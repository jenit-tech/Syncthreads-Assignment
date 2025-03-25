import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useNavigate } from "react-router-dom";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import Header from "../components/Header"; 
import "../styles/MapView.css"; 

const MapView = () => {
  const [position, setPosition] = useState([20.5937, 78.9629]); // Default: India
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (!isAuthenticated) {
      alert("User not logged in");
      navigate("/login");
      return;
    }

    // Get User's Current Location
    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;
        setPosition([latitude, longitude]);
      },
      () => {
        console.log("Geolocation permission denied.");
      }
    );
  }, [isAuthenticated, navigate]);

  return (
    <div className="map-page">
      <Header />

      <div className="map-view-container">
        <div className="map-left-section">
          <img
            src="https://res.cloudinary.com/dbhg0qzls/image/upload/v1742791336/image_5_clpl2z.png"
            alt="Navigation Guide"
            className="map-left-img"
          />
          <h2 className="map-heading">
            Navigate to your destination <span className="map-icon">📍</span>
          </h2>
          <p className="map-subtext">Have a Safe Journey!</p>
        </div>

        <div className="map-container">
          <MapContainer center={position} zoom={5} className="leaflet-map">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker
              position={position}
              icon={L.icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
            >
              <Popup>You are here!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;
