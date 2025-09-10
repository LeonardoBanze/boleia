import React from 'react';
import { Shield, MapPin, AlertTriangle, Star, Check, Eye, Lock, Clock, Phone } from 'lucide-react';
import AdvancedSafetyFeatures from './AdvancedSafetyFeatures';

export default function CoreSafetyFeatures() {
  const features = [
    {
      id: 'user-verification',
      title: 'User Verification',
      description: 'All drivers and couriers undergo thorough background checks and identity verification before joining our platform.',
      icon: Shield,
      iconBg: 'bg-red-700',
      items: [
        'Government ID verification',
        'Criminal background checks',
        'Driving record verification',
        'Regular re-verification'
      ]
    },
    {
      id: 'real-time-tracking',
      title: 'Real-time Tracking',
      description: 'Track your ride or delivery in real-time with GPS monitoring and share your trip details with trusted contacts.',
      icon: MapPin,
      iconBg: 'bg-red-700',
      items: [
        'Live GPS tracking',
        'Trip sharing with contacts',
        'Route optimization',
        'ETA updates'
      ]
    },
    {
      id: 'emergency-features',
      title: 'Emergency Features',
      description: 'Quick access to emergency services and panic buttons for immediate assistance when needed.',
      icon: AlertTriangle,
      iconBg: 'bg-red-700',
      items: [
        'One-tap emergency button',
        'Automatic emergency contacts',
        'Direct police connection',
        '24/7 support hotline'
      ]
    },
    {
      id: 'public-reviews',
      title: 'Public Reviews',
      description: 'Transparent rating and review system helps maintain high service standards and builds trust.',
      icon: Star,
      iconBg: 'bg-red-700',
      items: [
        'Two-way rating system',
        'Detailed review comments',
        'Photo evidence support',
        'Community moderation'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl text-center md:text-5xl font-bold text-[#640000] mb-6">
            Core <span className="text-gray-900"> Safety Features</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-4">
            Our multi-layered safety approach ensures protection at every step of your journey.
          </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 group shadow-sm"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`${feature.iconBg} p-3 rounded-xl mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#640000] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-gradient-to-r from-red-700 to-red-900 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
        <AdvancedSafetyFeatures/>
        {/* Additional Safety Measures */}
<div className="bg-gray-50 py-16 mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
    Additional Safety Measures
  </h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <Eye className="w-8 h-8 text-red-6000" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">Trip Data Sharing</h3>
      <p className="text-gray-600 text-sm">
        Share your trip details with family and friends for added security.
      </p>
    </div>
    <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <Lock className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">Secure Payments</h3>
      <p className="text-gray-600 text-sm">
        All transactions are encrypted and processed through secure payment gateways.
      </p>
    </div>
    <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <Clock className="w-8 h-8 text-red-600" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
      <p className="text-gray-600 text-sm">
        Round-the-clock customer support and emergency response team.
      </p>
    </div>
    <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="bg-red-100 rounded-full p-4 mb-4">
        <Phone className="w-8 h-8 text-red-600" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">Emergency Contacts</h3>
      <p className="text-gray-600 text-sm">
        Quick access to emergency services and pre-configured emergency contacts.
      </p>
    </div>
  </div>
</div>

        {/* Bottom Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-red-700 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Safety is Our Priority
              </h3>
            </div>
            <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
              We continuously invest in new safety technologies and partner with local authorities 
              to ensure the highest standards of security for all our users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors duration-300 flex items-center justify-center">
                <Check className="w-5 h-5 mr-2" />
                Learn More About Safety
              </button>
              <button className="border border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-red-700 hover:text-gray-900 transition-colors duration-300">
                Contact Safety Team
              </button>
            </div>
          </div>
        </div> */}

        {/* Safety by the Numbers */}
<div className="mb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
    Safety by the Numbers
  </h2>
  <p className="text-gray-700 text-center mb-10">
    Our commitment to safety is reflected in our track record and continuous improvement.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center shadow-sm">
      <div className="text-3xl font-bold text-red-600 mb-2">99.9%</div>
      <div className="font-semibold text-gray-900">Safe Trips</div>
      <div className="text-gray-600 text-sm">Completed without incidents</div>
    </div>
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center shadow-sm">
      <div className="text-3xl font-bold text-red-600 mb-2">&lt;2min</div>
      <div className="font-semibold text-gray-900">Emergency Response</div>
      <div className="text-gray-600 text-sm">Average response time</div>
    </div>
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center shadow-sm">
      <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
      <div className="font-semibold text-gray-900">Verified Drivers</div>
      <div className="text-gray-600 text-sm">Background checked</div>
    </div>
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center shadow-sm">
      <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
      <div className="font-semibold text-gray-900">Support Available</div>
      <div className="text-gray-600 text-sm">Always here to help</div>
    </div>
  </div>
</div>

{/* Emergency Support */}
{/* <div className="bg-red-50 rounded-2xl border border-red-200 p-10 mt-16 mb-20 max-w-4xl mx-auto shadow-lg">
  <div className="flex flex-col items-center">
    <div className="bg-red-100 rounded-full p-3 mb-4">
      <svg width="32" height="32" fill="none" stroke="red" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a1 1 0 0 1 1 .75l1.21 4.85a1 1 0 0 1-.29 1L7.21 11.21a16 16 0 0 0 6.58 6.58l1.61-1.61a1 1 0 0 1 1-.29l4.85 1.21a1 1 0 0 1 .75 1z"/>
      </svg>
    </div>
    <div className="mb-2">
      <span className="bg-red-600 text-white px-4 py-2 rounded font-bold text-xl shadow">
        Emergency Support
      </span>
    </div>
    <p className="text-gray-700 text-center mb-6 max-w-xl">
      In case of emergency, our 24/7 support team is always ready to assist. Your safety is our top priority.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="tel:+244900000000"
        className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
      >
        Emergency Hotline: +244 900 000 000
      </a>
      <a
        href="#"
        className="border border-red-600 text-red-600 px-6 py-2 rounded font-semibold hover:bg-red-600 hover:text-white transition"
      >
        Safety Guidelines
      </a>
    </div>
  </div>
</div> */}



      </div>
    </div>
  );
}
