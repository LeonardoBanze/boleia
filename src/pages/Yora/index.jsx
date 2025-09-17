import SessaoApp from "../../components/Appss";
import Foooter from "../../components/foooter";
import SejaMembro from "../../components/Membro";
import Navbar from "../../components/Navbar";
import OurSolutionsSectionPage from "../../components/OurSolutionsSectionpage";
import Topbar from "../../components/Topbar";
import { Leaf, Briefcase, Crown } from "lucide-react";

export default function Yora() {
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
                  About <span className="text-red-600">Yora App</span>
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
                  className="rounded-3xl object-cover w-full max-w-md shadow-2xl "
                />
              </div>
            </div>
          </div>

          <OurSolutionsSectionPage />
          <SejaMembro />
          <SessaoApp />
          {/* Travel or Delivery Classes Section */}
          <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-[#640000] mb-10">
                Travel or Delivery Classes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Economic / Small */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-200">
                  <div className="w-16 h-16 bg-[#e0e7ff] rounded-full flex items-center justify-center mb-4">
                    <Leaf className="text-[#640000] w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#640000] mb-2">Economic / Small</h3>
                  <p className="text-gray-700 text-center mb-4">
                    Affordable rides or deliveries for everyday needs. Ideal for solo travelers or small parcels.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc pl-4">
                    <li>Lowest price</li>
                    <li>Compact vehicles</li>
                    <li>Quick city trips</li>
                  </ul>
                </div>
                {/* Executive / Medium */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-200">
                  <div className="w-16 h-16 bg-[#ffe7c2] rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="text-[#640000] w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#640000] mb-2">Executive / Medium</h3>
                  <p className="text-gray-700 text-center mb-4">
                    Enhanced comfort and service for business or family travel. Suitable for medium-sized deliveries.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc pl-4">
                    <li>Premium vehicles</li>
                    <li>Extra space</li>
                    <li>Professional drivers</li>
                  </ul>
                </div>
                {/* VIP / Large */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-200">
                  <div className="w-16 h-16 bg-[#d1fae5] rounded-full flex items-center justify-center mb-4">
                    <Crown className="text-[#640000] w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-[#640000] mb-2">VIP / Large</h3>
                  <p className="text-gray-700 text-center mb-4">
                    Luxury experience for special occasions or large group travel. Perfect for oversized deliveries.
                  </p>
                  <ul className="text-gray-600 text-sm list-disc pl-4">
                    <li>Luxury vehicles</li>
                    <li>Maximum comfort</li>
                    <li>Priority support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Foooter />
      </div>
    );
  }
