import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dbhg0qzls/image/upload/v1742725285/westminster-abbey-img_a2nrnn.png",
      label: "Westminster Abbey",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dbhg0qzls/image/upload/v1742725285/scotland_k1vybm.png",
      label: "Scotland",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dbhg0qzls/image/upload/v1742725285/westminster-abbey-img_a2nrnn.png",
      label: "Westminster Abbey",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dbhg0qzls/image/upload/v1742725285/scotland_k1vybm.png",
      label: "Scotland",
    },
  ];

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="dashboard-container">
      <div className="heading">
        <h2>Choose a Beautiful Destination for Vacation</h2>
        <SearchBar placeholder="Search" onSearch={handleSearch} />
      </div>

      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className="card" onClick={() => navigate("/map")}>
            <img src={card.img} alt={card.label} />
            <p>{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;