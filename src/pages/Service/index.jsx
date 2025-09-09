import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import OurSolutionsSectionPage from "../../components/OurSolutionsSectionpage";
import Topbar from "../../components/Topbar";

export default function ServicosPage() {
    return (
          <div>
                        <Topbar />
                        <Navbar />
      <section className="font-poppins">
  
        {/* Banner */}
        <div className="relative h-64 md:h-80 w-full">
          <img
           src="../../src/assets/entrega.png"
            alt="Banner Serviços"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">Nossos Serviços</h1>
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


        <Footer />
                  </div>
    );
  }
  