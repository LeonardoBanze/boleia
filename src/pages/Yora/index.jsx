import SessaoApp from "../../components/Appss";
import Foooter from "../../components/foooter";
import SejaMembro from "../../components/Membro";
import Navbar from "../../components/Navbar";
import OurSolutionsSectionPage from "../../components/OurSolutionsSectionpage";
import Topbar from "../../components/Topbar";

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



        <OurSolutionsSectionPage/>
        <SejaMembro />
        <SessaoApp/>

  
      </section>


        <Foooter />
                  </div>
    );
  }
  