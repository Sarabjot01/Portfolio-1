import React from 'react';
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react';

const Timeline: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers. Architected microservices infrastructure serving 1M+ users.',
      achievements: [
        'Led team of 8 developers',
        'Reduced load times by 60%',
        'Implemented CI/CD pipeline',
        'Mentored 5 junior developers'
      ],
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies.',
      achievements: [
        'Built 15+ client projects',
        'Improved performance by 40%',
        'Integrated payment systems',
        'Maintained 99.9% uptime'
      ],
    },
    {
      type: 'education',
      title: 'Master of Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in software engineering and human-computer interaction. Graduated with honors.',
      achievements: [
        'GPA: 3.9/4.0',
        'Dean\'s List recognition',
        'Research publication',
        'Teaching assistant'
      ],
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2017 - 2018',
      description: 'Joined early-stage startup to build user-facing features and shape product direction.',
      achievements: [
        'First frontend hire',
        'Built entire UI library',
        'Increased user engagement 3x',
        'Launched mobile app'
      ],
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            My professional journey and key milestones
          </p>
        </div>

        <div className="relative">
          {/* Apple-style Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200 rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Apple-style Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
                    {exp.type === 'work' ? (
                      <Briefcase className="text-white" size={20} />
                    ) : (
                      <Award className="text-white" size={20} />
                    )}
                  </div>
                </div>

                {/* Apple-style Experience Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-medium">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-semibold text-black mb-2 tracking-tight">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-black font-semibold mb-3 text-sm">KEY ACHIEVEMENTS</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm font-normal">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;