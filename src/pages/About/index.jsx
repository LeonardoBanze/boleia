import Footer from "../../components/footer";
import ImpactNumbersSection from "../../components/ImpactNumbersSection";
import Navbar from "../../components/Navbar";
import OurJourneySection from "../../components/OurJourneySection";
import Topbar from "../../components/Topbar";
import { Heart, Zap, Globe, Award, Target, Eye, Lightbulb } from 'lucide-react';

export default function SobreNos() {
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
      emoji: "🎯",
      title: "Our Mission",
      description: "To democratize urban mobility across Africa by creating inclusive, sustainable, and technology-driven transportation solutions that empower communities and foster economic growth."
    },
    {
      icon: Eye,
      emoji: "👁",
      title: "Our Vision", 
      description: "To become Africa's leading mobility ecosystem, connecting every city and community through innovative technology, while preserving our cultural values and promoting sustainable development."
    },
    {
      icon: Lightbulb,
      emoji: "💡",
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
        <div className="relative h-64 md:h-80 w-full">
          <img
            src="../../src/assets/entrega.png"
            alt="Banner Sobre Nós"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">About BoleiaChain</h1>
          </div>
        </div>

          <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            About BoleiaChain
          </h2>
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Our Values
          </h2>
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
      <OurJourneySection/>
      <ImpactNumbersSection/>
      <Footer />
            </div>
    );
  }
  