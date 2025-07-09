import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 44);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-10 h-10 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 shadow-lg">
              <span className="text-white font-bold text-lg">JD</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-gray-900">Sarabjot Singh</div>
              <div className="text-xs text-gray-500">Full Stack Developer</div>
            </div>
          </button>

          {/* Enhanced Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: 'About', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Experience', id: 'timeline' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-all duration-200 rounded-lg hover:bg-gray-100/50 group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-6 py-2 bg-black text-white rounded-full font-medium text-sm hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <Sparkles size={14} className="group-hover:animate-spin" />
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="px-6 py-6 space-y-1">
            {[
              { name: 'About', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Experience', id: 'timeline' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-lg font-medium text-gray-600 hover:text-black transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-gray-100/50"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full px-6 py-3 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;