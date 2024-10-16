import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <h2>Features</h2>
      <div className="features-list">
        <div className="feature">
          <h3>Easy Integration</h3>
          <p>Integrate with our API in just a few steps.</p>
        </div>
        <div className="feature">
          <h3>Customizable Solutions</h3>
          <p>Customize AI solutions to meet your specific needs.</p>
        </div>
        <div className="feature">
          <h3>Scalable Performance</h3>
          <p>Handle any workload with our scalable infrastructure.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;