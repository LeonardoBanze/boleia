import React, { useState } from 'react';
import { TrendingUp, Check, User, Mail, Phone } from 'lucide-react';
import Navbar from '../../components/Navbar';
import TopBar from '../../components/TopBar';
import Footer from '../../components/Footer';

export default function InvestmentApplication() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    investmentAmount: '',
    investmentType: '',
    riskTolerance: '',
    timeHorizon: '',
    experience: '',
    goals: '',
    dueDiligence: '',
    agreeAccredited: false,
    agreeTerms: false,
    agreeUpdates: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const highlights = [
    {
      icon: Check,
      text: "Leading position in 7 African markets with 2.5M+ users"
    },
    {
      icon: Check,
      text: "Proven blockchain technology with 50M+ transactions"
    },
    {
      icon: Check,
      text: "Strong growth trajectory in expanding African markets"
    },
    {
      icon: Check,
      text: "Multiple revenue streams: mobility, payments, and partnerships"
    }
  ];

  return (

    <div className="bg-gray-50 min-h-screen">
      <TopBar/>
      <Navbar/>
      {/* Header */}
      <div className="w-full bg-gradient-to-b from-[#320000] via-[#640000] to-[#640000] pb-12 pt-8 px-4">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-[#ff7043] flex items-center mb-4 text-sm font-medium hover:underline">
            <span className="mr-2">&#8592;</span> Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow">
            Investor Registration
          </h1>
          <p className="text-gray-100 text-lg mb-2">
            Join us in revolutionizing African mobility and commerce. Invest in the future of transportation.
          </p>
        </div>
      </div>

      {/* Centered Form and Highlights */}
      <div className="flex justify-center items-start mt-19 px-2 pb-16">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 border border-[#640000] shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#640000] mb-8">Investment Application</h2>
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold text-[#640000] mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#640000]"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#640000]"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-bold text-[#640000] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#640000]"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#640000]"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              {/* Investment Details */}
              <div>
                <h3 className="text-lg font-bold text-[#640000] mb-4">Investment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      Investor Type *
                    </label>
                    <select
                      name="investmentType"
                      value={formData.investmentType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-[#640000]"
                    >
                      <option value="">Select investor type</option>
                      <option value="individual">Individual</option>
                      <option value="institutional">Institutional</option>
                      <option value="vc">Venture Capital</option>
                      <option value="angel">Angel Investor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      Investment Range *
                    </label>
                    <select
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-[#640000]"
                    >
                      <option value="">Select investment range</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      Risk Tolerance *
                    </label>
                    <select
                      name="riskTolerance"
                      value={formData.riskTolerance}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-[#640000]"
                    >
                      <option value="">Select risk tolerance</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs font-bold mb-1">
                      Investment Time Horizon *
                    </label>
                    <select
                      name="timeHorizon"
                      value={formData.timeHorizon}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:border-[#640000]"
                    >
                      <option value="">Select time horizon</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Investment Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#640000]"
                    placeholder="Describe your investment experience, particularly in African markets, fintech, or mobility sectors..."
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Investment Goals
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#640000]"
                    placeholder="What are your investment goals and expectations for this opportunity?"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Due Diligence Questions
                  </label>
                  <textarea
                    name="dueDiligence"
                    value={formData.dueDiligence}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#640000]"
                    placeholder="Any specific questions about Boleia Chain’s business model, financials, or growth strategy?"
                  />
                </div>
              </div>
              {/* Checkboxes */}
              <div className="space-y-4 pt-2">
                <label className="flex items-center space-x-2 text-gray-700 text-xs">
                  <input
                    type="checkbox"
                    name="agreeAccredited"
                    checked={formData.agreeAccredited}
                    onChange={handleInputChange}
                    className="accent-[#640000] w-4 h-4"
                  />
                  <span>
                    I confirm that I am an accredited investor as defined by applicable securities regulations
                  </span>
                </label>
                <label className="flex items-center space-x-2 text-gray-700 text-xs">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="accent-[#640000] w-4 h-4"
                    required
                  />
                  <span>
                    I agree to the <span className="text-[#ff7043] font-semibold">Terms and Conditions</span>, <span className="text-[#ff7043] font-semibold">Privacy Policy</span>, and <span className="text-[#ff7043] font-semibold">Investor Terms</span> <span className="text-red-600">*</span>
                  </span>
                </label>
                <label className="flex items-center space-x-2 text-gray-700 text-xs">
                  <input
                    type="checkbox"
                    name="agreeUpdates"
                    checked={formData.agreeUpdates}
                    onChange={handleInputChange}
                    className="accent-[#640000] w-4 h-4"
                  />
                  <span>
                    I agree to receive investor updates and communications from Boleia Chain
                  </span>
                </label>
              </div>
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#640000] text-white py-3 px-6 rounded-lg font-semibold text-base hover:bg-[#520000] transition-colors duration-300 flex items-center justify-center"
                >
                  Submit Investment Application
                  <TrendingUp className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </form>
          {/* Highlights */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-[#640000] shadow-lg">
            <h2 className="text-xl font-bold text-[#640000] mb-6">Investment Highlights</h2>
            <ul className="space-y-5">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-800 text-sm leading-relaxed">{highlight.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}