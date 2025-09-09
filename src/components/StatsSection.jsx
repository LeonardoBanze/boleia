import React, { useState, useEffect } from 'react';

const StatCard = ({ value, label, delay = 0 }) => {
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
    <div className={`text-center p-8 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="text-5xl font-bold text-[#640000] mb-3">
        {isVisible ? formatNumber(count) : '0'}{getSuffix()}
      </div>
      <div className="text-gray-800 text-lg font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      value: '500000+',
      label: 'Active Users',
      delay: 0
    },
    {
      value: '50+',
      label: 'Cities Covered',
      delay: 200
    },
    {
      value: '2000000+',
      label: 'Rides Completed',
      delay: 400
    },
    {
      value: '98%',
      label: 'User Satisfaction',
      delay: 600
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;