import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

export default function SobreNos() {
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
            <h1 className="text-white text-4xl md:text-5xl font-bold">Sobre Nós</h1>
          </div>
        </div>
  
        {/* Apresentação */}
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Quem Somos</h2>
          <p className="text-gray-600 leading-relaxed">
            Somos uma empresa dedicada a oferecer soluções inovadoras e de qualidade,
            sempre focados em atender as necessidades dos nossos clientes com excelência.
            Desde a nossa fundação, buscamos transformar ideias em resultados concretos.
          </p>
        </div>
  
        {/* Missão, Visão, Valores */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">🎯 Missão</h3>
            <p className="text-gray-600">
              Fornecer serviços e produtos que superem as expectativas,
              contribuindo para o sucesso dos nossos clientes.
            </p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">👁 Visão</h3>
            <p className="text-gray-600">
              Ser referência no mercado, reconhecida pela qualidade,
              inovação e compromisso com resultados.
            </p>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">💡 Valores</h3>
            <p className="text-gray-600">
              Ética, inovação, qualidade, compromisso e respeito com clientes e parceiros.
            </p>
          </div>
        </div>
  
        {/* Equipa */}
        <div className="max-w-6xl mx-auto px-4 py-12">
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
        </div>
  
      </section>
      <Footer />
            </div>
    );
  }
  