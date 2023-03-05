import React from 'react';
import '../CSS/FitnessBanner.css';
import gymImg from './gym.jpg';

const FitnesBanner = () => {
  return (
    <div className="banner" style={{backgroundImage: `url(${gymImg})`}}>
      <div className="banner-content">
        <h1>Welcome to Our Fitness Center</h1>
        <p>Join us today and start your journey to a healthier and happier you!</p>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default FitnesBanner;
