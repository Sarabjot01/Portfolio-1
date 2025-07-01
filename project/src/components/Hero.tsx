import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-11"
    >
      {/* Apple-style Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Apple-style Hero Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-semibold text-black leading-tight tracking-tight">
              John Doe
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-normal leading-relaxed">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>
          
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Crafting exceptional digital experiences with precision, creativity, and cutting-edge technology.
          </p>

          {/* Apple-style CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-gray-300 text-gray-900 rounded-full font-medium text-lg hover:border-gray-400 transition-all duration-200 flex items-center gap-2"
            >
              Get In Touch
            </button>
          </div>

          {/* Apple-style Tech Stack */}
          <div className="pt-16">
            <p className="text-sm text-gray-500 mb-6 font-medium">TECHNOLOGIES</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;