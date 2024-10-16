import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const images = [
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/501',
  'https://via.placeholder.com/502'
];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>AI-Powered Solutions for Everyone</h1>
        <p>Discover the power of AI with our cutting-edge tools and services.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={images[currentImageIndex]} alt="AI illustration" />
      </div>
    </section>
  );
}

export default HeroSection;