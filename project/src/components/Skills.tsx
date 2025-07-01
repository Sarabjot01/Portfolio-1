import React, { useState } from 'react';
import { Code, Palette, Database, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    {
      title: 'Design & UX',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe Creative Suite', level: 85 },
        { name: 'Prototyping', level: 88 },
        { name: 'User Research', level: 82 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 82 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', level: 95 },
    { name: 'TypeScript', icon: '📘', level: 90 },
    { name: 'Node.js', icon: '🟢', level: 88 },
    { name: 'Python', icon: '🐍', level: 85 },
    { name: 'Docker', icon: '🐳', level: 85 },
    { name: 'AWS', icon: '☁️', level: 80 },
    { name: 'Figma', icon: '🎨', level: 90 },
    { name: 'MongoDB', icon: '🍃', level: 80 },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Apple-style Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Category Navigation */}
          <div className="space-y-3">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full p-6 rounded-2xl transition-all duration-200 text-left ${
                    activeCategory === index
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      activeCategory === index ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      <CategoryIcon 
                        className={activeCategory === index ? 'text-white' : 'text-gray-600'} 
                        size={20} 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {category.title}
                      </h3>
                      <p className={`text-sm ${
                        activeCategory === index ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Skills */}
          <div className="space-y-6">
            <div className="p-8 bg-white rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-6 tracking-tight">
                {skillCategories[activeCategory].title}
              </h3>
              
              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-black font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-black rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Apple-style Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-2xl mb-3">{tech.icon}</div>
              <h4 className="text-black font-medium text-sm mb-2 tracking-tight">{tech.name}</h4>
              
              {/* Skill Level Indicator */}
              <div className="w-full bg-gray-200 rounded-full h-1 mb-2">
                <div
                  className="h-1 bg-black rounded-full transition-all duration-1000"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
              <div className="text-gray-600 text-xs font-medium">{tech.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;