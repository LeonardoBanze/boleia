import React from "react";
import { ShieldCheck, Clock, Users } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Safety First",
      description:
        "All drivers and couriers are verified with background checks and real-time tracking.",
      icon: ShieldCheck,
    },
    {
      title: "Real-time Tracking",
      description:
        "Know exactly where your ride or delivery is at all times with live GPS tracking.",
      icon: Clock,
    },
    {
      title: "Community Driven",
      description:
        "Built by and for African communities with local insights and cultural understanding.",
      icon: Users,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our <span className="text-[#640000]">Solutions?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover the key reasons why thousands trust BoleiaChain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#640000]/10 text-[#640000] mb-6 mx-auto">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
