import React from "react";
import { useNavigate } from 'react-router-dom';

const VideoAd = () => {
    const navigate = useNavigate();
    
  return (
    <div className="video-ad-container">
      <audio autoPlay loop>
        <source src="./Cosmic Koala, Lucid Keys and Paul Indigo - The Player 🎷🎶 (Live Performance).m4a" />
        Your browser does not support the audio element.
      </audio>
      <video autoPlay muted loop className="background-video">
        <source src="./WhatsApp Video 2024-08-15 at 17.01.49 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay">
        <h1 className="headline">Welcome to Fooders.com</h1>
        <p className="subheadline">Experience the taste of delight!</p>

      </div>
    </div>
  );
};

export default VideoAd;
