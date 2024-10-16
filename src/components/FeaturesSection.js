import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <h2>项目特点</h2>
      <div className="features-list">
        <div className="feature">
          <h3>自动化 CI/CD</h3>
          <p>通过 Vercel 实现持续集成与部署，代码更新后自动触发部署。</p>
        </div>
        <div className="feature">
          <h3>简单易用</h3>
          <p>无需复杂配置，快速将项目部署到云端，适合前端开发者快速迭代。</p>
        </div>
        <div className="feature">
          <h3>Git 集成</h3>
          <p>与 Git 仓库无缝集成，每次推送代码时自动构建并发布更新。</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;