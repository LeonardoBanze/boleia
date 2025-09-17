import { ShieldCheck, Sparkle, Users, Star, DollarSign, Globe, TrendingUp, Gamepad2 } from "lucide-react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import Foooter from "../../components/foooter";

export default function ValueProposition() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-poppins">
        <Topbar/>
        <Navbar/>
      {/* Why Choose BoleiaChain */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Choose <span className="text-[#640000]">BoleiaChain</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <ShieldCheck className="mx-auto mb-2 text-[#640000] w-10 h-10" />
              <h3 className="font-bold mb-1">Safety First</h3>
              <p className="text-gray-600 text-sm">Comprehensive safety measures to protect all users.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Sparkle className="mx-auto mb-2 text-[#640000] w-10 h-10" />
              <h3 className="font-bold mb-1">Innovation</h3>
              <p className="text-gray-600 text-sm">Cutting-edge technology for seamless experiences.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <Users className="mx-auto mb-2 text-[#640000] w-10 h-10" />
              <h3 className="font-bold mb-1">Community</h3>
              <p className="text-gray-600 text-sm">Building stronger connections within African communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BoleiaChain vs Others */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">BoleiaChain vs Others</h2>
          <p className="text-center text-gray-500 mb-8">See how we compare to traditional mobility platforms.</p>
          <div className="bg-white rounded-xl border border-gray-200 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-sm">
            {/* Traditional Platforms */}
            <div>
              <h3 className="font-bold mb-3">Traditional Platforms</h3>
              <ul className="text-red-600 text-sm space-y-2">
                <li>• Single service focus</li>
                <li>• High commission fees</li>
                <li>• Limited local adaptation</li>
                <li>• No community features</li>
              </ul>
            </div>
            {/* BoleiaChain */}
            <div>
              <div className="flex items-center justify-center mb-2">
                <Star className="text-[#640000] w-7 h-7 mr-2" />
                <h3 className="font-bold">BoleiaChain</h3>
              </div>
              <ul className="text-[#640000] text-sm space-y-2">
                <li>• All-in-one platform</li>
                <li>• Fair pricing model</li>
                <li>• Africa-focused design</li>
                <li>• Strong community features</li>
              </ul>
            </div>
            {/* The Result */}
            <div>
              <h3 className="font-bold mb-3">The Result</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Better user experience</li>
                <li>• Higher user earnings</li>
                <li>• Stronger communities</li>
                <li>• Sustainable growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience the Difference */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#640000] rounded-xl p-10 text-center text-white shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-gray-200 mb-6">
              Join millions of users who have chosen BoleiaChain for a better, more inclusive mobility experience across Africa.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="bg-white text-[#640000] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
                Download App
              </a>
              <a href="#" className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-[#640000] transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Propositions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Core Value Propositions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Versatility */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Versatility" className="w-full h-40 object-cover" />
              <div className="p-6">
                <Sparkle className="text-[#640000] mb-2" />
                <h3 className="font-bold mb-1">Versatility</h3>
                <p className="text-gray-600 text-sm mb-2">One app, many options.</p>
                <p className="text-gray-500 text-xs">Access a wide range of urban mobility services, from rides and deliveries to expanded transport.</p>
              </div>
            </div>
            {/* Fair Prices */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Fair Prices" className="w-full h-40 object-cover" />
              <div className="p-6">
                <DollarSign className="text-[#640000] mb-2" />
                <h3 className="font-bold mb-1">Fair Prices</h3>
                <p className="text-gray-600 text-sm mb-2">Affordable mobility for all.</p>
                <p className="text-gray-500 text-xs">Enjoy competitive and transparent pricing for all services, ensuring affordability and sustainability.</p>
              </div>
            </div>
            {/* African Identity */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="African Identity" className="w-full h-40 object-cover" />
              <div className="p-6">
                <Globe className="text-[#640000] mb-2" />
                <h3 className="font-bold mb-1">African Identity</h3>
                <p className="text-gray-600 text-sm mb-2">Proudly African, globally connected.</p>
                <p className="text-gray-500 text-xs">A platform built by Africans, for Africa, celebrating cultures and the vibrant spirit of the continent.</p>
              </div>
            </div>
            {/* Business Sustainability */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition md:col-span-2">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80" alt="Business Sustainability" className="w-full h-40 object-cover" />
              <div className="p-6">
                <TrendingUp className="text-[#640000] mb-2" />
                <h3 className="font-bold mb-1">Business Sustainability</h3>
                <p className="text-gray-600 text-sm mb-2">Growing together, sustainably.</p>
                <p className="text-gray-500 text-xs">Empowering local businesses and individuals through an ecosystem that promotes prosperity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Value Proposition */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our <span className="text-[#640000]">Value Proposition</span>
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Discover what makes BoleiaChain unique. We’re not just another mobility platform – we’re a comprehensive ecosystem designed for African communities.
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">What Sets Us Apart</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Versatility */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <Star className="text-[#640000] mb-2" />
              <h4 className="font-bold mb-2">Versatility</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Multiple service types in one app</li>
                <li>• Seamless onboarding between services</li>
                <li>• Stellar user experience</li>
                <li>• Comprehensive mobility solutions</li>
              </ul>
            </div>
            {/* Fair Pricing */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <DollarSign className="text-[#640000] mb-2" />
              <h4 className="font-bold mb-2">Fair Pricing</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Transparent, competitive pricing</li>
                <li>• No hidden fees or surprise charges</li>
                <li>• Fair rates for drivers and users</li>
                <li>• Extra incentives for loyal users</li>
              </ul>
            </div>
            {/* African Identity */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <Globe className="text-[#640000] mb-2" />
              <h4 className="font-bold mb-2">African Identity</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Built by Africans, for Africa</li>
                <li>• Local payment methods, support</li>
                <li>• African-inspired branding & design</li>
                <li>• African language support</li>
              </ul>
            </div>
            {/* Business Sustainability */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <TrendingUp className="text-[#640000] mb-2" />
              <h4 className="font-bold mb-2">Business Sustainability</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Sustainable business model</li>
                <li>• Economic opportunities for drivers</li>
                <li>• Social business partnerships</li>
                <li>• Community investment programs</li>
              </ul>
            </div>
            {/* Gamification */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
              <Gamepad2 className="text-[#640000] mb-2" />
              <h4 className="font-bold mb-2">Gamification</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Making mobility fun and rewarding</li>
                <li>• In-app game-like experiences</li>
                <li>• Achievements & challenges</li>
                <li>• Exciting incentives & rewards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Foooter/>
    </div>
  );
}
