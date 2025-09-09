import React from 'react';
import { Users, Globe, Shield, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-[#640000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-black text-xl font-bold mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const WhyChooseSection = () => {
  const features = [
    {
      icon: Users,
      title: "Community-Driven",
      description: "Connect passengers, drivers, couriers, and businesses in a thriving ecosystem."
    },
    {
      icon: Globe,
      title: "Pan-African Focus",
      description: "Built specifically for African cities with local insights and cultural understanding."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Advanced verification, real-time tracking, and emergency features for peace of mind."
    },
    {
      icon: Zap,
      title: "Instant Solutions",
      description: "From ride-sharing to delivery, get what you need when you need it."
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Why Choose BoleiaChain?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Built by Africans, for Africa. Our platform combines cutting-edge technology with deep 
            cultural understanding to create mobility solutions that truly work for our communities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;