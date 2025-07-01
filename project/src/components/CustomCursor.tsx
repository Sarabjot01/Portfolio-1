import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className={`w-5 h-5 rounded-full border-2 border-cyan-400 transition-all duration-300 ${
            isHovering ? 'scale-150 border-purple-400' : 'scale-100'
          }`}
        ></div>
      </div>

      {/* Trailing cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div
          className={`w-1 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
            isHovering ? 'scale-200' : 'scale-100'
          }`}
        ></div>
      </div>
    </>
  );
};

export default CustomCursor;