import React, { useEffect, useState } from 'react';
import { Code, Palette, Zap, Globe, Cpu, Database } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    icon: React.ElementType;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const icons = [Code, Palette, Zap, Globe, Cpu, Database];
    const newElements = [];

    for (let i = 0; i < 12; i++) {
      newElements.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
      });
    }

    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-1 overflow-hidden">
      {elements.map((element) => {
        const IconComponent = element.icon;
        return (
          <div
            key={element.id}
            className="absolute opacity-5 text-gray-400"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `floatUpDown ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <IconComponent size={24} />
          </div>
        );
      })}
      
      <style>{`
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
          }
          75% {
            transform: translateY(-30px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;