import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css"; // Import CSS file

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-container">
        <img 
          src="https://res.cloudinary.com/dbhg0qzls/image/upload/v1742562586/Frame_8830_ohy9oa.png"
          alt="landing-illustration"
          className="landing-image"
        />
        <h1 className="landing-title">Welcome to Syncthreads Computing</h1>
        <p className="landing-text">
          Experience seamless communication with our RF solutions.
        </p>
        <button onClick={() => navigate("/login")} className="landing-button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
