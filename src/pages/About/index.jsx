
import ImpactNumbersSection from "../../components/ImpactNumbersSection";
import { ArrowRight } from 'lucide-react';
import Navbar from "../../components/Navbar";

import Topbar from "../../components/Topbar";
import { Heart, Zap, Globe, Award, Target, Eye, Lightbulb } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Foooter from "../../components/foooter";

export default function SobreNos() {
   const navigate = useNavigate();
  const InfoCard = ({ icon: Icon, title, description, emoji }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-[#640000] w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-black mb-4 flex items-center justify-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {title}
      </h3>
      
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};
 const infoCards = [
    {
      icon: Target,
      emoji: "",
      title: "Our Mission",
      description: "To democratize urban mobility across Africa by creating inclusive, sustainable, and technology-driven transportation solutions that empower communities and foster economic growth."
    },
    {
      icon: Eye,
      emoji: "",
      title: "Our Vision", 
      description: "To become Africa's leading mobility ecosystem, connecting every city and community through innovative technology, while preserving our cultural values and promoting sustainable development."
    },
    {
      icon: Lightbulb,
      emoji: "",
      title: "Our Impact",
      description: "Creating economic opportunities, reducing transportation barriers, and building stronger communities through technology that understands and serves African needs."
    }
  ];
  const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-[#640000] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-black text-xl font-bold mb-4">
        {title}
      </h3>
      
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize the needs and wellbeing of our African communities in everything we do."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to solve real mobility challenges across Africa."
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Building solutions that work for everyone, regardless of background or economic status."
    },
      {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality service and user experience."
    }
  ];
    return (
           <div>
                <Topbar />
                <Navbar />
      <section className="font-poppins">
  
        {/* Banner */}
        <div className="bg-black py-16 px-4 border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Texto à esquerda */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-red-600">BoleiaChain</span>
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

          <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          
           <h1 className="text-4xl md:text-5xl font-bold text-[#640000] mb-6">
            About <span className="text-gray-900">BoleiaChain</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We're more than just a mobility platform. We're a movement dedicated to transforming how people move, connect, and thrive in African cities. Built by Africans, for Africa.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              emoji={card.emoji}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  
        {/* Apresentação */}
        {/* <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Quem Somos</h2>
          <p className="text-gray-600 leading-relaxed">
            We're more than just a mobility platform. We're a movement dedicated to transforming how people move, connect, and thrive in African cities. Built by Africans, for Africa.
          </p>
        </div>
   */}
        {/* Missão, Visão, Valores */}
        {/* <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">🎯 Our Mission</h3>
            <p className="text-gray-600">
              To democratize urban mobility across Africa by creating inclusive, sustainable, and technology-driven transportation solutions that empower communities and foster economic growth.
            </p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">👁 Our Vision</h3>
            <p className="text-gray-600">
         To become Africa's leading mobility ecosystem, connecting every city and community through innovative technology, while preserving our cultural values and promoting sustainable development.
            </p>
          </div>
  
      
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">💡 Our Impact</h3>
            <p className="text-gray-600">
              Creating economic opportunities, reducing transportation barriers, and building stronger communities through technology that understands and serves African needs.
            </p>
          </div>
        </div> */}
  
        {/* Equipa */}
        {/* <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Nossa Equipa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="/team1.jpg"
                alt="Membro da equipa"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">João Silva</h4>
              <p className="text-gray-500">CEO & Fundador</p>
            </div>
  
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="/team2.jpg"
                alt="Membro da equipa"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">Maria Santos</h4>
              <p className="text-gray-500">Diretora de Operações</p>
            </div>
  
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src="/team3.jpg"
                alt="Membro da equipa"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h4 className="text-lg font-semibold">Carlos Mendes</h4>
              <p className="text-gray-500">Gestor de Projetos</p>
            </div>
          </div>
        </div> */}

<div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          
            <h1 className="text-4xl md:text-5xl font-bold text-[#640000] mb-6">
            Our <span className="text-gray-900">Values</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            These core values guide every decision we make and every solution we build.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  
      </section>
      {/* <OurJourneySection/> */}
      <ImpactNumbersSection/>

         <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-10xl mx-auto">
        <div className="bg-[#640000] rounded-3xl p-12 md:p-16 shadow-2xl border border-[#640000] text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
           Investor Registration
          </h2>
          
          <p className="text-gray-200 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
        Join us in revolutionizing African mobility and commerce. Invest in the future of transportation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate("/invest")}
            className="bg-white text-[#640000] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center group">
              Invest Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            {/* <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#640000] transition-all duration-300">
              Learn About Us
            </button> */}
          </div>
        </div>
      </div>
    </div>
      <Foooter />
            </div>
    );
  }
  