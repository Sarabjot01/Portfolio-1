import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration, and advanced project tracking.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Mobile App',
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with detailed forecasts, interactive maps, and personalized weather insights.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['Vue.js', 'Chart.js', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'AI Chatbot Interface',
      description: 'Intelligent chatbot interface with natural language processing and machine learning capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'AI/ML',
      technologies: ['Python', 'TensorFlow', 'Flask', 'OpenAI'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design, smooth animations, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Design',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Crypto Trading Platform',
      description: 'Secure cryptocurrency trading platform with real-time market data and advanced trading tools.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web App',
      technologies: ['React', 'Web3', 'Solidity', 'MetaMask'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'AI/ML', 'Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Apple-style Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Apple-style Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Apple-style Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed font-normal text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;