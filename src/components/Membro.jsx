import { useState } from "react";
import menbroImg from "../../src/assets/membro.png";

const membros = [
  {
    nome: "Normal",
    cor: "gray",
    descricao:
      "Acesso básico ao serviço com agendamento de viagens, histórico e suporte padrão.",
    beneficios: ["Agendamento de viagens", "Histórico de corridas", "Suporte padrão"]
  },
  {
    nome: "Green",
    cor: "green",
    descricao:
      "Benefícios adicionais como prioridade no atendimento e descontos em horários não-pico.",
    beneficios: ["Prioridade no atendimento", "Descontos em horários não-pico", "Suporte prioritário"]
  },
  {
    nome: "Gold",
    cor: "gold",
    descricao:
      "Serviços premium com motoristas experientes, suporte dedicado e maior conforto.",
    beneficios: ["Motoristas experientes", "Suporte dedicado", "Veículos premium", "Maior conforto"]
  },
  {
    nome: "Black",
    cor: "black",
    descricao:
      "Experiência de luxo com veículos executivos, atendimento exclusivo e prioridade máxima.",
    beneficios: ["Veículos executivos", "Atendimento exclusivo", "Prioridade máxima", "Experiência de luxo"]
  },
];

export default function SejaMembro() {
  const [tab, setTab] = useState(0);

  const getButtonStyles = (membro, index) => {
    const isActive = tab === index;
    
    const colorMap = {
      gray: {
        active: "bg-gray-600 text-white border-gray-600",
        inactive: "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
      },
      green: {
        active: "bg-green-600 text-white border-green-600",
        inactive: "bg-white text-green-600 border-green-300 hover:bg-green-50"
      },
      gold: {
        active: "bg-yellow-500 text-white border-yellow-500",
        inactive: "bg-white text-yellow-600 border-yellow-300 hover:bg-yellow-50"
      },
      black: {
        active: "bg-gray-900 text-white border-gray-900",
        inactive: "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
      }
    };

    return colorMap[membro.cor][isActive ? 'active' : 'inactive'];
  };

  const getCardStyles = (membro) => {
    const cardColorMap = {
      gray: "border-l-gray-600 bg-gray-50",
      green: "border-l-green-600 bg-green-50",
      gold: "border-l-yellow-500 bg-yellow-50",
      black: "border-l-gray-900 bg-gray-50"
    };

    return cardColorMap[membro.cor];
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Seja Membro</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Escolha o plano que melhor se adapta às suas necessidades e desfrute de benefícios exclusivos
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Imagem dos membros */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
            <img
              src={menbroImg}
              alt="Círculo de membros"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
              style={{ minHeight: "220px", maxHeight: "340px" }}
            />
          </div>
        </div>

        {/* Tabs e conteúdo */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Botões das Tabs */}
          <div className="flex flex-wrap gap-3">
            {membros.map((membro, index) => (
              <button
                key={index}
                onClick={() => setTab(index)}
                className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all duration-200 ${getButtonStyles(membro, index)}`}
              >
                {membro.nome}
              </button>
            ))}
          </div>

          {/* Card com informações do membro selecionado */}
          <div className={`border-l-4 p-6 rounded-r-lg shadow-sm transition-all duration-300 ${getCardStyles(membros[tab])}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Plano {membros[tab].nome}
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {membros[tab].descricao}
            </p>
            {/* Lista de benefícios */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 text-lg">Benefícios inclusos:</h4>
              <div className="grid gap-2">
                {membros[tab].beneficios.map((beneficio, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-current rounded-full opacity-60"></div>
                    <span className="text-gray-700">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Botão de ação */}
            <div className="mt-8">
              <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${getButtonStyles(membros[tab], tab).replace('border-', 'border-transparent ')}`}>
                Escolher Plano {membros[tab].nome}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}