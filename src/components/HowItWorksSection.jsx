import React from "react";
import { MapPin, Users, Clock, CheckCircle } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Request",
      description: "Open the app and select your service type - ride or delivery.",
      icon: MapPin
    },
    {
      number: "2", 
      title: "Match",
      description: "Get instantly matched with verified drivers or couriers nearby.",
      icon: Users
    },
    {
      number: "3",
      title: "Track", 
      description: "Track your ride or delivery in real-time with live updates.",
      icon: Clock
    },
    {
      number: "4",
      title: "Complete",
      description: "Arrive safely or receive your package with secure payment.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Ride Service Works
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Getting started with BoleiaChain is simple. Follow these four easy steps to access our services.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="text-center group relative">
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#640000] rounded-full flex items-center justify-center mx-auto group-hover:bg-red-700 transition-colors duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 transform translate-x-full w-24 h-0.5 bg-gradient-to-r from-[#640000] to-amber-500"></div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#640000] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-[#640000] hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
            <button className="border-2 border-[#640000] text-[#640000] hover:bg-[#640000] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div> */}

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#640000]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
