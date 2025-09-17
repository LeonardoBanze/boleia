import React, { useState } from "react";
import { Car, Gift, ArrowRight } from "lucide-react";
import HowItWorksSection from "./HowItWorksSection";
import ServiceClassesSection from "./ServiceClassesSection";
import WhyChooseUs from "./WhyChooseUs";

export default function OurSolutionsSection() {
  const [activeTab, setActiveTab] = useState("ride");

  // 🚖 Ride Services
  const rideSolutions = [
    { id: "lets-go", title: "Lets Go", subtitle: "Your instant ride, anytime, anywhere.", description: "Lets Go is our flagship on-demand ride service, connecting you with nearby drivers for quick and efficient travel across the city. Perfect for spontaneous trips and urgent commutes.", howItWorks: [ "Open the BoleiaChain app", "Enter your destination", "Confirm your pickup location", "Tap 'Request Ride'", "A driver will be dispatched to you shortly" ], image: "https://static.wixstatic.com/media/330c98_27a9c1c3e0594d029e1f8b1800e38158~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_27a9c1c3e0594d029e1f8b1800e38158~mv2.png", }, { id: "order", title: "Order Delivey", subtitle: "Tailored rides, just for you.", description: "The Request service allows users to specify their ride preferences, such as vehicle type, accessibility needs, or even a preferred driver, ensuring a personalized and comfortable journey.", howItWorks: [ "Select 'Request' in the app", "Choose your desired vehicle type or special requirements", "Set your pickup and drop-off", "Confirm your request and wait for a matching driver" ], image: "https://static.wixstatic.com/media/330c98_e7cdfd237dfb4ac788d486b53a9255cf~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_e7cdfd237dfb4ac788d486b53a9255cf~mv2.png", }, { id: "shared", title: "Shared", subtitle: "Share your ride, share the cost.", description: "For drivers, the Offer service allows you to post your route and offer available seats to passengers heading in the same direction. It's a great way to reduce travel costs and contribute to a greener environment.", howItWorks: [ "As a driver, select 'Offer Ride'", "Enter your route and departure time", "Specify available seats and price per seat", "Passengers can then book a spot in your vehicle" ], image: "https://static.wixstatic.com/media/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png" }, { id: "private", title: "Private", subtitle: "Exclusive comfort, premium travel.", description: "Experience the ultimate in comfort and privacy with BoleiaChain's Private service. Ideal for business travel, special occasions, or when you simply desire an undisturbed journey in a high-end vehicle.", howItWorks: [ "Choose 'Private' from the ride options", "Select your preferred premium vehicle class.", "Enter your destination and confirm pickup", "Enjoy a luxurious and private ride." ], image: "https://static.wixstatic.com/media/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png" }, { id: "regular", title: "Regular", subtitle: "Your daily commute, made easy.", description: "Regular is BoleiaChain's standard, reliable ride service designed for everyday commuting. Affordable and efficient, it's the perfect choice for getting to work, school, or running errands.", howItWorks: [ "Open the app and select 'Regular'", "Input your pickup and destination", "Confirm your ride details.", "A standard vehicle will arrive to take you to your destination." ], image: "https://static.wixstatic.com/media/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png/v1/fill/w_273,h_153,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_4d6f18abd09d43c99a2db8e881d4f7f2~mv2.png" },
  ];

  // 📦 Delivery Services
  const deliverySolutions = [
    {
      id: "pick-go",
      title: "Via Informs Feed",
      subtitle: "Swift pickups, instant deliveries.",
      description:
        "Pick and Go is BoleiaChain's rapid delivery service for small to medium-sized parcels. Perfect for urgent documents, forgotten items, or quick errands, ensuring your package reaches its destination fast.",
      howItWorks: [
        "Select 'Pick and Go' in the app",
        "Enter pickup and drop-off locations",
        "Describe the item",
        "A courier will pick up and deliver your item directly",
      ],
      image:
        "https://static.wixstatic.com/media/330c98_544f52ec0d634ffaa9105dbd9ea2ccde~mv2.png/v1/fill/w_387,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_544f52ec0d634ffaa9105dbd9ea2ccde~mv2.png",
    },
    {
      id: "delivery",
      title: "Via Inform Hobby",
      subtitle: "Reliable delivery for all your needs.",
      description:
        "BoleiaChain's comprehensive Delivery service handles a wide range of items, from food and groceries to larger packages. Our network of couriers ensures safe and timely delivery across the region.",
      howItWorks: [
        "Choose 'Delivery' in the app",
        "Specify item details and size",
        "Enter sender and recipient addresses",
        "Track your delivery in real-time until it reaches its destination",
      ],
      image:
        "https://static.wixstatic.com/media/330c98_12bc5774b9bf4414bf4d857173c042a2~mv2.png/v1/fill/w_387,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_12bc5774b9bf4414bf4d857173c042a2~mv2.png",
    },
    {
      id: "delivery",
      title: "Bolada na via",
      subtitle: "Reliable delivery for all your needs.",
      description:
        "BoleiaChain's comprehensive Delivery service handles a wide range of items, from food and groceries to larger packages. Our network of couriers ensures safe and timely delivery across the region.",
      howItWorks: [
        "Choose 'Delivery' in the app",
        "Specify item details and size",
        "Enter sender and recipient addresses",
        "Track your delivery in real-time until it reaches its destination",
      ],
      image:
        "https://static.wixstatic.com/media/330c98_12bc5774b9bf4414bf4d857173c042a2~mv2.png/v1/fill/w_387,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_12bc5774b9bf4414bf4d857173c042a2~mv2.png",
    },
    {
      id: "delivery",
      title: "Chat",
      subtitle: "Reliable delivery for all your needs.",
      description:
        "BoleiaChain's comprehensive Delivery service handles a wide range of items, from food and groceries to larger packages. Our network of couriers ensures safe and timely delivery across the region.",
      howItWorks: [
        "Choose 'Delivery' in the app",
        "Specify item details and size",
        "Enter sender and recipient addresses",
        "Track your delivery in real-time until it reaches its destination",
      ],
      image:
        "https://static.wixstatic.com/media/330c98_12bc5774b9bf4414bf4d857173c042a2~mv2.png/v1/fill/w_387,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/330c98_12bc5774b9bf4414bf4d857173c042a2~mv2.png",
    },
  ];

  // Decide qual array mostrar
  const currentSolutions =
    activeTab === "ride" ? rideSolutions : deliverySolutions;

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#640000] mb-6">
            YORA <span className="text-gray-900">Your Ride Anywhere</span>
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
              Interactions
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentSolutions.map((solution) => (
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

                {/* How it works */}
                <div className="mb-6">
                  <h4 className="text-[#640000] font-semibold mb-3">
                    How it works:
                  </h4>
                  <ol className="text-gray-700 text-sm space-y-1">
                    {solution.howItWorks.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#640000] font-semibold mr-2 mt-0.5">
                          {index + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Button */}
                <button className="w-full border-2 border-[#640000] text-[#640000] py-3 px-4 rounded-lg hover:bg-[#640000] hover:text-white transition-all duration-300 flex items-center justify-center group font-semibold">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Seções extras */}
        <HowItWorksSection />
        <ServiceClassesSection />
        <WhyChooseUs />

  
      {/* Payment Methods Section */}
<div className="mt-16 bg-gray-100 rounded-2xl p-8 text-gray-900">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#640000]">Payment Methods</h2>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
      We support multiple payment methods to make transactions convenient and accessible for everyone.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Mobile Money */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 1L5.6 2.4 8.2 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-5.2l2.6-2.6L17 1l-5 5-5-5z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Mobile Money</h3>
          <span className="text-teal-600 text-sm font-medium">Digital</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Secure and widely used mobile payment service across Africa. Link your account for instant payments.
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Regions:</span>
          <span className="text-gray-900">East Africa, West Africa, Southern Africa</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Fee:</span>
          <span className="text-gray-900">1.5%</span>
        </div>
      </div>
    </div>

    {/* Credit/Debit Card */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Credit/Debit Card</h3>
          <span className="text-blue-600 text-sm font-medium">Digital</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Pay conveniently with your Visa, MasterCard, or other major credit/debit cards.
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Regions:</span>
          <span className="text-gray-900">All regions</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Fee:</span>
          <span className="text-gray-900">2.5%</span>
        </div>
      </div>
    </div>

    {/* BoleiaChain Token */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">BoleiaChain Token (BCT)</h3>
          <span className="text-orange-600 text-sm font-medium">Digital</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Use BCT for exclusive discounts, loyalty rewards, and seamless transactions within the BoleiaChain ecosystem.
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Regions:</span>
          <span className="text-gray-900">All regions</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Fee:</span>
          <span className="text-gray-900">0%</span>
        </div>
      </div>
    </div>
     {/* Cash Payment */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Cash Payment</h3>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Pay directly in cash to your driver or courier upon completion of service. Available for select services.
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Regions:</span>
          <span className="text-gray-900">All regions</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Fee:</span>
          <span className="text-gray-900">0%</span>
        </div>
      </div>
    </div>
     {/* Bank Transfer (EFT) */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 6.99h3V14h2V6.99h3L9.5 3.5 5 6.99zm11.5 4.5L20 14.01V7h-2v4.5h-1.5V7H15v4.5h-1V7h-2v7.01L16.5 11.49zM12 16v2h9v-2h-9z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Bank Transfer (EFT)</h3>
          <span className="text-purple-600 text-sm font-medium">Digital</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        For corporate accounts or larger transactions, make direct electronic fund transfers.
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Regions:</span>
          <span className="text-gray-900">South Africa, Nigeria, Kenya</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Fee:</span>
          <span className="text-gray-900">0.5%</span>
        </div>
      </div>
    </div>


        {/* Digital Wallets */}
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Digital Wallets</h3>
          <span className="text-cyan-600 text-sm font-medium">Digital</span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Connect popular digital wallets like PayPal or local e-wallets for quick and easy payments.
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500">Regions:</span>
          <span className="text-gray-900">Global (where supported by wallet provider)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Fee:</span>
          <span className="text-gray-900">1.8%</span>
        </div>
      </div>
    </div>
  </div>
</div>




        {/* CTA final */}
        {/* <div className="text-center mt-16">
          <div className="bg-gray-200 rounded-2xl p-8 border border-gray-300 shadow">
            <h3 className="text-2xl font-bold text-[#640000] mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of users who trust our platform for their daily
              mobility and delivery needs.
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
        </div> */}
      </div>
    </div>
  );
}
