import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-11">
          {/* Apple-style Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
              <span className="text-white font-medium text-sm">JD</span>
            </div>
          </button>

          {/* Apple-style Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'experience' ? 'timeline' : item.toLowerCase())}
                className="text-sm font-normal text-gray-600 hover:text-black transition-colors duration-200 py-2"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/50 transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="px-6 py-4 space-y-1">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'experience' ? 'timeline' : item.toLowerCase())}
                className="block w-full text-left text-sm font-normal text-gray-600 hover:text-black transition-colors duration-200 py-3"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;