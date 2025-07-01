import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;