// src/components/BenefitCard.jsx
"use client"; // Retained for client-side interactivity like hover effects

import React from 'react';
import '../styles/Card.css'; // Import card-specific CSS here


const BenefitsCard = ({ IconComponent, title, description }) => {
  return (
    <div className="benefit-card">




      <div className="benefit-card-text-content">
        <div className="benefit-card-title">
          <h4 >{title}</h4>
          <IconComponent />

        </div>
        <p className="benefit-card-description">{description}</p>
      </div>
    </div>


  );
};

export default BenefitsCard;