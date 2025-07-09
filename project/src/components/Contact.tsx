import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    setFormStatus('success');
    
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sarabsingh676@gmail.com',
      href: 'mailto:sarabsingh676@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6239240395',
      href: 'tel:+91 6239240395',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh, Punjab',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Sarabjot01',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sarabjot-singh-413155220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk7Z5hdh1Qa2Rn114zBsi0g%3D%3D',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Apple-style Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-8 tracking-tight">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="sarabsingh676@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none bg-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black text-white font-medium text-lg rounded-2xl hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : formStatus === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Apple-style Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-8 tracking-tight">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <info.icon className="text-gray-600" size={18} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm font-medium">{info.label}</div>
                    <div className="text-black font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-6 tracking-tight">
                Follow me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all duration-200"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Apple-style Availability Status */}
            <div className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-800 font-medium text-sm">Available for new projects</span>
              </div>
              <p className="text-green-700 text-sm font-normal">
                I'm currently accepting new client work and interesting project collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;