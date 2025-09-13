import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function EmpoweringUrbanMobility() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDot, setCurrentDot] = useState(0);

  const decorativeDots = [
    { top: '10%', left: '15%', size: 'w-3 h-3', delay: 0 },
    { top: '20%', right: '10%', size: 'w-4 h-4', delay: 500 },
    { top: '70%', left: '10%', size: 'w-2 h-2', delay: 1000 },
    { top: '80%', right: '20%', size: 'w-3 h-3', delay: 1500 },
    { top: '30%', left: '5%', size: 'w-2 h-2', delay: 2000 },
    { top: '60%', right: '5%', size: 'w-3 h-3', delay: 2500 }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentDot((prev) => (prev + 1) % decorativeDots.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlays */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Decorative Dots */}
        {decorativeDots.map((dot, index) => (
          <div
            key={index}
            className={`absolute ${dot.size} rounded-full transition-all duration-1000 ${
              currentDot === index ? 'bg-red-600 scale-150' : 'bg-red-600/30 scale-100'
            }`}
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              animationDelay: `${dot.delay}ms`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 0, 0, 0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="text-white block">Empowering Urban</span>
            <span className="text-red-600 block">Mobility in Africa</span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
            The all-in-one platform connecting passengers, drivers, and businesses 
            across African cities. Experience seamless rides, reliable delivery, and 
            community-driven innovation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group relative bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center">
              <span className="mr-2">Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="border border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute top-135 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            {/* Circular Indicator */}
            <div className="w-12 h-12 border-2 border-red-600 rounded-full flex items-center justify-center mb-2">
              <ChevronDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-600/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.4;
          }
          33% { 
            transform: translateY(-30px) rotate(120deg); 
            opacity: 0.8;
          }
          66% { 
            transform: translateY(30px) rotate(240deg); 
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}