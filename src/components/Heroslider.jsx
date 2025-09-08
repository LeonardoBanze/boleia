import { useState, useEffect } from "react";


import viagemImg from "../../src/assets/viagem.jpeg";
import entregaImg from "../../src/assets/entrega.png";
import parkkImg from "../../src/assets/parkk.png";
import pickImg from "../../src/assets/pick.png";
import recargaImg from "../../src/assets/recarga.jpg";
import viaImg from "../../src/assets/via.png";

const slides = [
  {
    image: viagemImg,
    title: "Viagens",
    description:
      "Escolha entre Viagens Compartilhadas ou Privadas → Desfrute de viagens regulares em classe económica, executiva ou VIP.",
  },
  {
    image: entregaImg,
    title: "Entregas",
    description: "De pequenas a grandes entregas -> Encontre o entregador adequado para garantir que sua encomenda chegue pontualmente.",
  },
  {
    image: parkkImg,
    title: "Parqueamento",
    description: "Encontre Vagas Onde Você Estiver -> Economize tempo com nosso serviço de estacionamento facilitado.",
  },
  {
    image: pickImg,
    title: "Pick & Go",
    description: "Alugue um carro capidamente -> Encontre o carro mais próximo, escaneie e vá em minutos",
  },
  {
    image: recargaImg,
    title: "Recargas",
    description: "Economize em Recargas de Viagens -> Gerencie suas finanças melhorando sua experiência de transporte e ganhando prêmios.",
  },
  {
    image: viaImg,
    title: "Informes na Via",
    description: "Compartilhe Momentos e Conexões -> Faça novos amigos durante suas viagens compartilhadas.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Slide automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1);
    }, 9000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  function prevSlide() {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slide ativo - imagem de fundo */}
      <div className="absolute inset-0">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-full object-cover"
        />
   
      </div>

      {/* Card de conteúdo posicionado à esquerda */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-lg">
            <div className="bg-white p-8 shadow-lg">
              <h1 className="text-3xl font-bold mb-4 text-[#640000] leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                {slides[current].description}
              </p>
              <button className="bg-[#640000] text-white px-6 py-3 font-semibold hover:bg-[#520000] transition-colors duration-200 uppercase tracking-wide">
                VER MAIS..
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controles de navegação */}
      {/* Botão anterior (sem fundo preto) */}
<button
  onClick={prevSlide}
  className="absolute left-6 top-1/2 -translate-y-1/2 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 z-20"
  aria-label="Slide anterior"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

{/* Botão próximo (sem fundo preto) */}
<button
  onClick={nextSlide}
  className="absolute right-6 top-1/2 -translate-y-1/2 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 z-20"
  aria-label="Próximo slide"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>


      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === current 
                ? "bg-white scale-125" 
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}