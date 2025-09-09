import React, { useState, useEffect } from 'react';

const ImpactCard = ({ value, title, subtitle, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const targetValue = parseInt(value.replace(/\D/g, ''));
    const duration = 2000;
    const steps = 50;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  const getSuffix = () => {
    if (value.includes('%')) return '%';
    if (value.includes('+')) return '+';
    return '';
  };

  return (
    <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 border border-gray-100 text-center group ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="text-5xl font-bold text-[#640000] mb-4 group-hover:scale-105 transition-transform duration-300">
        {isVisible ? formatNumber(count) : '0'}{getSuffix()}
      </div>
      <h3 className="text-black text-xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

const ImpactNumbersSection = () => {
  const impacts = [
    {
      value: '500000+',
      title: 'Active Users',
      subtitle: 'Across 16 African countries',
      delay: 0
    },
    {
      value: '2000000+',
      title: 'Rides Completed',
      subtitle: 'Safe and reliable journeys',
      delay: 200
    },
    {
      value: '50+',
      title: 'Cities',
      subtitle: 'Connected through our platform',
      delay: 400
    },
    {
      value: '10000+',
      title: 'Drivers & Couriers',
      subtitle: 'Earning sustainable income',
      delay: 600
    },
    {
      value: '98%',
      title: 'User Satisfaction',
      subtitle: 'Based on user feedback',
      delay: 800
    },
    {
      value: '1000000+',
      title: 'Deliveries',
      subtitle: 'Packages delivered safely',
      delay: 1000
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Real numbers that represent real lives improved, communities connected, and 
            opportunities created across Africa.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              value={impact.value}
              title={impact.title}
              subtitle={impact.subtitle}
              delay={impact.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactNumbersSection;