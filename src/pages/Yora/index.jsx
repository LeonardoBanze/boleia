import Foooter from "../../components/foooter";
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
  
        {/* Introdução */}
        {/* <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">O que oferecemos</h2>
          <p className="text-gray-600 leading-relaxed">
            Oferecemos uma gama completa de serviços para ajudar o seu negócio a crescer,
            com foco em qualidade, inovação e resultados reais.
          </p>
        </div> */}
  
        {/* Cards de Serviços */}
        {/* <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-blue-600 text-5xl mb-4">💻</div>
            <h3 className="text-lg font-semibold mb-2">Desenvolvimento Web</h3>
            <p className="text-gray-600">
              Criação de sites modernos, responsivos e otimizados para a melhor
              experiência do usuário.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-green-600 text-5xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">Aplicativos Mobile</h3>
            <p className="text-gray-600">
              Aplicações Android e iOS rápidas, seguras e adaptadas às suas necessidades.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-yellow-500 text-5xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Marketing Digital</h3>
            <p className="text-gray-600">
              Estratégias de marketing para aumentar a visibilidade e gerar mais clientes.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-red-500 text-5xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold mb-2">Segurança da Informação</h3>
            <p className="text-gray-600">
              Proteja seus dados e sistemas contra ameaças e ataques digitais.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-purple-500 text-5xl mb-4">📊</div>
            <h3 className="text-lg font-semibold mb-2">Consultoria Empresarial</h3>
            <p className="text-gray-600">
              Analisamos e otimizamos processos para melhorar resultados e reduzir custos.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <div className="text-pink-500 text-5xl mb-4">⚙️</div>
            <h3 className="text-lg font-semibold mb-2">Automação de Processos</h3>
            <p className="text-gray-600">
              Soluções inteligentes para aumentar a produtividade da sua empresa.
            </p>
          </div>
        </div> */}


        <OurSolutionsSectionPage/>
  
      </section>


        <Foooter />
                  </div>
    );
  }
  