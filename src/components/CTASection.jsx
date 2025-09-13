import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-10xl mx-auto">
        <div className="bg-[#640000] rounded-3xl p-12 md:p-16 shadow-2xl border border-[#640000] text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your Journey?
          </h2>
          
          <p className="text-gray-200 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Join thousands of users already experiencing the future of African urban 
            mobility. Download the app and start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-[#640000] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center group">
              Download App
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#640000] transition-all duration-300">
              Learn About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;