import { useState } from "react";
import appImg from "../../src/assets/app.png";

const apps = [
  {
    nome: "YORA",
    descricao:
      "You can now use Lottie widget with a custom count loop. Turn your boring static elements into beautiful animated elements with few clicks.",
    imagem: {appImg}, // Usando sua imagem dos assets
    playstore: "#",
    applestore: "#",
  },
  {
    nome: "Prestashop", 
    descricao:
      "Para motoristas gerenciarem viagens, localizações, pagamentos e avaliações em tempo real.",
    imagem: "/assets/prestashop-app.png",
    playstore: "#",
    applestore: "#",
  },
];

export default function SessaoApp() {
  const [tab, setTab] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 py-5 bg-gray-50">
      {/* Botões das Tabs no topo */}
      <div className="flex justify-center gap-4 mb-16">
        {apps.map((app, index) => (
          <button
            key={index}
            onClick={() => setTab(index)}
            className={`px-8 py-3 rounded-lg border-2 font-medium transition-all duration-200 ${
              tab === index
                ? "bg-white text-gray-800 border-gray-300 shadow-sm"
                : "bg-transparent text-gray-600 border-gray-200 hover:border-gray-300"
            }`}
          >
            {app.nome === "YORA" && (
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                {app.nome}
              </span>
            )}
            {app.nome === "Prestashop" && (
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                {app.nome}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Conteúdo do Tab selecionado */}
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Imagem do app */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-lg">
            <img 
              src={apps[tab].imagem}
              alt={`App ${apps[tab].nome}`}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Texto e botões */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
            {apps[tab].nome}
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            {apps[tab].descricao}
          </p>
          
          {/* Botões de download */}
          <div className="flex gap-4 pt-4">
            {/* Google Play Store */}
            <a
              href={apps[tab].playstore}
              className="inline-flex items-center gap-3 bg-white border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:border-gray-400 transition-all duration-200 shadow-sm font-medium"
            >
              <span className="text-green-600 font-medium">Google Play</span>
              <span className="w-6 h-6 bg-green-600 rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
              </span>
            </a>

            {/* Apple Store */}
            <a
              href={apps[tab].applestore}
              className="inline-flex items-center gap-3 bg-white border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:border-gray-400 transition-all duration-200 shadow-sm font-medium"
            >
              <span className="text-gray-800 font-medium">App Store</span>
              <span className="w-6 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09,22C7.85,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}