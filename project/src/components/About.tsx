import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable applications with modern technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that delight users.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Ensuring fast, efficient, and responsive applications across all devices.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams to deliver exceptional results.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-black tracking-tight">
                Crafting Digital Excellence
              </h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-normal">
                <p>
                  With over 1 years of experience in full-stack development, I specialize in creating 
                  scalable web applications and intuitive user interfaces that solve real-world problems.
                </p>
                <p>
                  My approach combines technical expertise with design thinking to deliver products 
                  that not only meet business objectives but also provide exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Apple-style Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '5+', label: 'Projects' },
                { value: '1+', label: 'Years' },
                { value: '10+', label: 'Technologies' },
                { value: '100%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                  <div className="text-3xl font-semibold text-black mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Apple-style Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-1 shadow-2xl">
              <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.ibb.co/vn5DmFJ/cv-photo.jpg"
                  alt="cv-photo"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Apple-style Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                <feature.icon className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-black mb-3 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;