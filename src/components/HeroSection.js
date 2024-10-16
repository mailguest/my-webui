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
        <h1>Vercel 自动化部署测试项目</h1>
        <p>本项目旨在通过 Vercel 实现 CI/CD，测试直接部署的便捷性和稳定性。</p>
        <div className="button-group">
          <a
            href="https://apis.biubiu123.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get Started
          </a>
          <a
            href="https://github.com/mailguest/my-webui"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={images[currentImageIndex]} alt="AI illustration" />
        <div className="indicator-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;