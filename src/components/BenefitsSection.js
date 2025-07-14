"use client";

import React from "react";
import BenefitCard from "./BenefitsCard";
import "../styles/Benefits.css";

// Importing icons from MUI
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const benefitsData = [
  {
    IconComponent: LightbulbIcon,
    title: "Easy AI",
    description: "We simplify complex AI tools into clear guides and tutorials for faster understanding and use."
  },
  {
    IconComponent: SearchIcon,
    title: "Best Tools",
    description: "Find the top AI tools for writing, design, coding, and more — handpicked and reviewed."
  },
  {
    IconComponent: TrendingUpIcon,
    title: "Stay Ahead",
    description: "Get updates on new AI trends, tools, and features so you're always up-to-date and ready."
  },
  {
    IconComponent: CheckCircleIcon,
    title: "Smart Picks",
    description: "Avoid hype. Choose tools with honest reviews and use-case-focused insights to work smarter."
  }
];


const BenefitsSection = () => {
  return (
    <section className="benefits-section" aria-labelledby="benefits-main-heading">
      <div className="container">
        <h2 id="benefits-main-heading" className="benefits-heading">Empowering Your AI Journey</h2>

      

        <div className="benefit-grid">
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              IconComponent={benefit.IconComponent}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
