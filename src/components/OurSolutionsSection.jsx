import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionCard = ({ imageSrc, title, description, imageAlt }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-8">
        <h3 className="text-[#640000] text-xl font-bold mb-4">
          {title}
        </h3>
        
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </p>
        
        <button className="flex items-center text-[#640000] font-medium hover:text-[#800000] transition-colors duration-200 group">
          Learn More 
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

const OurSolutionsSection = () => {
  const solutions = [
    {
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Motorcycle rider at night with city lights",
      title: "Ride Services",
      description: "From quick city rides to long-distance travel, we connect you with reliable drivers."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      imageAlt: "Drone delivery service in urban setting",
      title: "Delivery Solutions",
      description: "Fast, secure delivery for everything from documents to groceries."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      imageAlt: "People socializing in community setting with lights",
      title: "Community Hub",
      description: "Join a vibrant community of users sharing experiences and opportunities."
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Our Solutions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            From ride-sharing to delivery, from community building to business solutions - discover 
            how BoleiaChain is transforming urban mobility across Africa.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              imageSrc={solution.imageSrc}
              imageAlt={solution.imageAlt}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSolutionsSection;