import React, { useState } from "react";
import PaymentSections from "../../components/PaymentSections";

const plans = [
  {
    title: "Standard Ride",
    price: "USD0.75",
    period: "per km",
    description:
      "Affordable rides, standard vehicles class, 24/7 support, basic real-time trip tracking.",
  },
  {
    title: "Premium Ride",
    price: "USD1.5",
    period: "per km",
    description:
      "Luxury vehicles, priority booking, dedicated support, real-time trip sharing, best convenience.",
  },
  {
    title: "Express Delivery",
    price: "ZAR50",
    period: "per delivery",
    description:
      "Fast package delivery, real-time tracking, insured parcels up to $500, proof of delivery.",
  },
  {
    title: "Driver Pro Membership",
    price: "NGN₦150",
    period: "monthly",
    description:
      "Lower commission rates, priority ride assignments, access to exclusive driver features, rewards, analytics.",
  },
  {
    title: "BCTFlex Merchant Plan",
    price: "KES250",
    period: "annually",
    description:
      "Accept BCT payments, integrated POS solutions, invoicing support, advanced transaction features, dedicated account manager.",
  },
  {
    title: "BoleiaChain VIP",
    price: "USD10",
    period: "monthly",
    description:
      "Exclusive discounts on all services, early access to new features, premium customer service, KYC-verified security.",
  },
];

export default function Prices() {
  const [tab, setTab] = useState("service");

  return (
    <div>
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-black">
          Transparent <span className="text-[#640000]">Pricing</span>
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Fair, transparent pricing for all our services. No hidden fees, no
          surprises. Choose the plan that works best for you.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            className={`px-6 py-2 rounded-l font-semibold border border-gray-300 ${
              tab === "service"
                ? "bg-[#640000] text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => setTab("service")}
          >
            Service Pricing
          </button>
          <button
            className={`px-6 py-2 rounded-r font-semibold border border-gray-300 border-l-0 ${
              tab === "membership"
                ? "bg-[#640000] text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => setTab("membership")}
          >
            Membership Plans
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl border border-[#640000] p-6 flex flex-col shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-[#640000] mb-2">
                {plan.title}
              </h2>
              <div className="text-[#640000] text-2xl font-bold mb-1">
                {plan.price}
              </div>
              <div className="text-gray-600 text-sm mb-4">{plan.period}</div>
              <p className="text-gray-700 mb-6">{plan.description}</p>
              <button className="mt-auto w-full bg-[#640000] text-white font-semibold py-2 rounded hover:bg-[#520000] transition">
                Get Started &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

    <PaymentSections />

    </div>
  );
}
