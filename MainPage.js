import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import videoSrc from './media/AWGE.mp4'; 

function MainPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/discography');
  };

  return (
    <div className="main-page-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="content">
        <h1 onClick={handleClick}>Press to continue</h1>
      </div>
    </div>
  );
}

export default MainPage;
