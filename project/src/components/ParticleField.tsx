import React, { useEffect, useRef } from 'react';

const ParticleField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating quantum orbs
    const createOrb = () => {
      const orb = document.createElement('div');
      orb.className = 'quantum-orb';
      
      const size = Math.random() * 20 + 10;
      const colors = ['#00FFFF', '#FF00FF', '#00FF8C', '#FFFF00', '#FF6B6B'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      orb.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, ${color}80 0%, ${color}20 50%, transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: quantumFloat ${8 + Math.random() * 12}s linear infinite;
        filter: blur(${Math.random() * 2}px);
        box-shadow: 0 0 ${size * 2}px ${color}40;
      `;

      container.appendChild(orb);

      // Remove orb after animation
      setTimeout(() => {
        if (orb.parentNode) {
          orb.parentNode.removeChild(orb);
        }
      }, 20000);
    };

    // Create orbs periodically
    const orbInterval = setInterval(createOrb, 2000);

    // Initial orbs
    for (let i = 0; i < 15; i++) {
      setTimeout(createOrb, i * 200);
    }

    return () => {
      clearInterval(orbInterval);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-1" />;
};

export default ParticleField;