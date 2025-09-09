import React, { useState } from "react";
import { Car, Gift, ArrowRight, Smartphone } from "lucide-react";

export default function OurSolutionsSection() {
  const [activeTab, setActiveTab] = useState("ride");

  const solutions = [
    {
      id: "lets-go",
      title: "Lets Go",
      subtitle: "Your instant ride, anytime, anywhere.",
      description:
        "Lets Go is our flagship on-demand ride service, connecting you with nearby drivers for quick and efficient travel across the city. Perfect for spontaneous trips and urgent commutes.",
      image:
        "https://static.wixstatic.com/media/330c98_27a9c1c3e0594d029e1f8b1800e38158~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_27a9c1c3e0594d029e1f8b1800e38158~mv2.png",
    },
    {
      id: "request",
      title: "Request",
      subtitle: "Tailored rides, just for you.",
      description:
        "The Request service allows users to specify their ride preferences, such as vehicle type, accessibility needs, or even a preferred driver, ensuring a personalized and comfortable journey.",
      image:
        "https://static.wixstatic.com/media/330c98_e7cdfd237dfb4ac788d486b53a9255cf~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_e7cdfd237dfb4ac788d486b53a9255cf~mv2.png",
    },
    {
      id: "offer",
      title: "Offer",
      subtitle: "Share your ride, share the cost.",
      description:
        "For drivers, the Offer service allows you to post your route and offer available seats to passengers heading in the same direction. It's a great way to reduce travel costs and contribute to a greener environment.",
      image:
      "https://static.wixstatic.com/media/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png"
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#640000] mb-6">
            Our <span className="text-gray-900">Solutions</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-4">
            Comprehensive mobility and delivery solutions designed specifically
            for African cities.
          </p>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-12">
            From quick rides to reliable deliveries, we've got you covered.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab("ride")}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "ride"
                  ? "bg-[#640000] text-white shadow-lg"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              <Car className="w-4 h-4 mr-2" />
              Ride Services
            </button>
            <button
              onClick={() => setActiveTab("delivery")}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "delivery"
                  ? "bg-[#640000] text-white shadow-lg"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              <Gift className="w-4 h-4 mr-2" />
              Delivery Services
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-gray-200 rounded-2xl overflow-hidden border border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Section */}
              <div className="h-48 w-full">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#640000] mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-800 text-sm font-medium mb-4">
                  {solution.subtitle}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Button */}
                <button className="w-full border border-[#640000] text-[#640000] py-3 px-4 rounded-lg hover:bg-[#640000] hover:text-white transition-all duration-300 flex items-center justify-center group">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <div className="bg-gray-200 rounded-2xl p-8 border border-gray-300 shadow">
            <h3 className="text-2xl font-bold text-[#640000] mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of users who trust our platform for their daily
              mobility needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#640000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#500000] transition-colors duration-300">
                Download App
              </button>
              <button className="border border-gray-500 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:border-[#640000] hover:text-[#640000] transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
