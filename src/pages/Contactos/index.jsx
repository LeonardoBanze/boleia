import Foooter from "../../components/foooter";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";

export default function Contactos() {
    return (
     <div>
        <Topbar />
        <Navbar />
        <div className="relative h-80 w-full">
        <img
          src="../../src/assets/entrega.png"
          alt="Banner Contactos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contacte-nos</h1>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 py-12 font-poppins">
        <h2 className="text-3xl font-bold text-center text-[#640000] mb-8">Contacte-nos</h2>
  
        {/* Informações */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📍 Localização</h3>
            <p className="text-gray-600">Av. Eduardo Mondlane, Maputo, Moçambique</p>
          </div>
  
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📞 Telefone</h3>
            <p className="text-gray-600">+258 84 123 4567</p>
          </div>
  
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">📧 Email</h3>
            <p className="text-gray-600">info@empresa.com</p>
          </div>
        </div>
  
        {/* Mapa */}
        <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.507830!2d32.573!3d-25.965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee697c5b3b0b9%3A0x38c3!2sMaputo!5e0!3m2!1spt!2smz!4v0000000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
  
        {/* Formulário */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Envie-nos uma mensagem</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#640000]"
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#640000]"
            />
            <textarea
              placeholder="Sua Mensagem"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#640000]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#640000] text-white px-6 py-3 rounded-lg hover:bg-red-900 transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
<Foooter />
      </div>
    );
  }
