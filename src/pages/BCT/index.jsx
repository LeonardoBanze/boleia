import React from "react";
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Gift, 
  Car, 
  Package, 
  CreditCard, 
  Star, 
  Diamond, 
  Vote,
  Store,
  Smartphone,
  BarChart3,
  ArrowRight
} from "lucide-react";
import Topbar from "../../components/Topbar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function BCTTokenPage() {
    const navigate = useNavigate();
  const tokenStats = [
    { value: "$0.25", label: "Current Price", color: "text-[#640000]" },
    { value: "1B", label: "Total Supply", color: "text-[#640000]" },
    { value: "250M", label: "Circulating", color: "text-[#640000]" },
    { value: "50+", label: "Partners", color: "text-[#640000]" }
  ];

  const whyHoldBCT = [
    { icon: TrendingUp, title: "Earn Rewards", description: "Earn BCT tokens for every ride, delivery, and community interaction." },
    { icon: Shield, title: "Reduced Fees", description: "Pay lower transaction fees when using BCT for rides and deliveries." },
    { icon: Users, title: "Community Governance", description: "Vote on platform decisions and shape the future of BoleiaChain." },
    { icon: Gift, title: "Exclusive Perks", description: "Access exclusive features, discounts, and early access to new services." }
  ];

  const howToUseBCT = [
    { icon: Car, title: "Ride Payments", description: "Pay for rides with BCT and enjoy reduced fees and exclusive discounts.", emoji: "🚗" },
    { icon: Package, title: "Delivery Services", description: "Use BCT for all delivery services with instant settlement and rewards.", emoji: "📦" },
    { icon: CreditCard, title: "Merchant Payments", description: "Pay at partner merchants and earn cashback in BCT tokens.", emoji: "🏪" },
    { icon: Star, title: "Community Rewards", description: "Earn BCT for contributing to the community through posts and reviews.", emoji: "⭐" },
    { icon: Diamond, title: "Staking Rewards", description: "Stake your BCT tokens to earn additional rewards and platform benefits.", emoji: "💎" },
    { icon: Vote, title: "Governance Voting", description: "Use BCT to vote on platform improvements and community initiatives.", emoji: "🗳️" }
  ];

  const bctFlexFeatures = [
    {
      icon: Store,
      title: "Business Integration",
      description: "Seamlessly integrate BCT payments into your business operations.",
      features: ["Lower transaction fees", "Instant settlement", "Customer loyalty rewards", "Analytics dashboard"]
    },
    {
      icon: Smartphone,
      title: "Payment Solutions",
      description: "Accept BCT payments from customers with our merchant tools.",
      features: ["QR code payments", "Mobile POS system", "Bulk payment processing", "Multi-currency support"]
    },
    {
      icon: BarChart3,
      title: "Growth Incentives",
      description: "Earn additional BCT tokens for growing your business with us.",
      features: ["Volume-based rewards", "Referral bonuses", "Partnership incentives", "Marketing support"]
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

        <Topbar />
        <Navbar />


           <div className="bg-black py-16 px-4 border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto à esquerda */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-red-600">BCT App</span>
            </h1>
            <p className="text-gray-200 text-lg mb-10 max-w-2xl">
              We're more than just a mobility platform. We're a movement dedicated to transforming how people move, connect, and thrive in African cities. Built by Africans, for Africa.
            </p>
            <div className="flex gap-12 mb-2">
              <div>
                <div className="text-4xl font-bold text-red-600">4+</div>
                <div className="text-gray-400 text-base">Years of Innovation</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600">15+</div>
                <div className="text-gray-400 text-base">Countries Served</div>
              </div>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="About BoleiaChain"
              className="rounded-3xl object-cover w-full max-w-md shadow-2xl border-4 border-[#640000]"
            />
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            BoleiaChain <span className="text-[#640000]">Token</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-12">
            The native token powering Africa's largest mobility ecosystem. Earn, spend, and govern 
            with BCT while enjoying exclusive benefits and rewards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-[#640000] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#640000] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              Get BCT Tokens
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-[#640000] text-[#640000] hover:bg-[#640000] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              View Whitepaper
            </button>
          </div>

          {/* Token Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {tokenStats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hold BCT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Hold BCT?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              BCT token holders enjoy exclusive benefits and play an active role in shaping the future 
              of African mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyHoldBCT.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                  <div className="w-20 h-20 bg-[#640000] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#640000] transition-colors duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#640000] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Use BCT */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Use BCT
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the many ways you can use BCT tokens within the BoleiaChain ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howToUseBCT.map((useCase, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#640000] transition-all duration-300 group shadow-sm">
                <div className="text-3xl mb-4">{useCase.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#640000] transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BCTFlex for Business */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              BCTFlex for Business
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
              Empower your business with BCTFlex - our comprehensive merchant and partner 
              program designed to integrate BCT payments and unlock new revenue streams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bctFlexFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#640000] transition-all duration-300 shadow">
                  <div className="w-16 h-16 bg-[#640000] rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-[#640000] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#640000] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#640000] transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              Join BCTFlex Program
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Start earning, spending, and governing with BCT tokens today. 
            Be part of Africa's mobility transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
             onClick={() => navigate("/invest")}
            className="bg-[#640000] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#640000] transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started with BCT
            </button>
            <button className="border-2 border-[#640000] text-gray-700 hover:border-[#640000] hover:text-[#640000] px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Learn More About Tokenomics
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
