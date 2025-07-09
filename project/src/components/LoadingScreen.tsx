import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 3 + 1.5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Apple Logo Style */}
        <div className="mb-16">
          <div className="w-20 h-20 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-300 rounded-2xl opacity-90"></div>
            <div className="absolute inset-1 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl font-light tracking-wider">SS</span>
            </div>
          </div>
        </div>

        {/* Apple-style Progress */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;