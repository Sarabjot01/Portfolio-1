import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-11"
    >
      {/* Interactive Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-10"
            style={{
              background: `linear-gradient(45deg, #3b82f6, #8b5cf6)`,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full border border-black/10 mb-8 animate-fade-in">
          <Sparkles className="text-blue-600" size={16} />
          <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
        </div>

        {/* Main Heading with Gradient */}
        <div className="space-y-6 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <span className="block text-black">Sarabjot Singh</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Creative Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Crafting exceptional digital experiences with precision, creativity, and cutting-edge technology.
            <br />
            <span className="text-blue-600 font-medium">Let's build something amazing together.</span>
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3"
          >
            <Download size={18} className="group-hover:animate-bounce" />
            Download Resume
          </button>
        </div>

        {/* Enhanced Tech Stack */}
        <div className="space-y-6">
          <p className="text-sm text-gray-500 font-medium tracking-wider">TECHNOLOGIES & EXPERTISE</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', color: 'from-blue-400 to-blue-600' },
              { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
              { name: 'Node.js', color: 'from-green-400 to-green-600' },
              { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
              { name: 'AWS', color: 'from-orange-400 to-orange-600' },
              { name: 'Figma', color: 'from-purple-400 to-purple-600' },
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full hover:border-gray-300 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-gray-700 font-medium group-hover:text-black transition-colors duration-300">
                  {tech.name}
                </span>
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;