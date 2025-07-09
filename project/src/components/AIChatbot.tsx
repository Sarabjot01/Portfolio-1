import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm sarabjot's AI assistant. I can help you learn more about his experience, skills, and projects and other relevant things. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What's sarab's experience?",
    "Tell me about his skills",
    "Show me his projects",
    "How can I contact him?",
    "What technologies does he use?",
    "Who is sarab?",
    "What is his education background?",
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career') || message.includes('sarab')) {
      return "Sarab has 1+ years of experience as a Full Stack Developer. He's currently a Assosiate Full Stack Developer at VenturePact.com and Master's Union, where he is developing softwares and has built applications serving 1M+ users. Previously, he worked at GeeksForGeeks as Data Science Intern and started his career at Coding Ninja as a Teaching Assistant.";
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "Sarab is proficient in React (95%), TypeScript (90%), Node.js (88%), Python (85%), and many other technologies. He specializes in full-stack development, UI/UX design, performance optimization, and team collaboration. He's also experienced with cloud technologies like AWS and Docker. He has aslo worked on SQL and NoSQL databases, including MySQL, MongoDB, and have also worked on Redis.";
    }
    
    if (message.includes('project') || message.includes('portfolio') || message.includes('work')) {
      return "Sarab has built amazing projects including an Voice Assistant ChatBots with advanced features, a collaborative Task Management App, a beautiful Weather Dashboard, an AI Chatbot Interface, and a Crypto Trading Platform. Each project showcases his expertise in modern web technologies and user experience design.";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('hire')) {
      return "You can reach Sarab at sarabsingh676@gmail.com or call him at +91 6239240395. He's based in San Francisco, CA and is currently available for new projects. You can also connect with him on LinkedIn, GitHub, or Twitter. He's always excited to discuss new opportunities!";
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return "Sarab holds a Master of Computer Science from Stanford University (2018-2020) where he graduated with honors (GPA: 3.9/4.0). He specialized in software engineering and human-computer interaction, and even worked as a teaching assistant.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn everything about Sarabjot Singh. Feel free to ask me about his experience, skills, projects, or how to get in touch with him. What interests you most?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm glad I could help. If you have any other questions about John or would like to get in touch with him directly, just let me know. He'd love to hear from you!";
    }
    
    return "That's a great question! I can tell you about sarab's experience, skills, projects, education, or how to contact him. What specific aspect would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-black text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">sarab's AI Assistant</h3>
              <p className="text-xs text-white/70">Always here to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-black text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                      <Bot size={12} />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about John..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIChatbot;