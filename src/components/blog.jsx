
import viagemImg from "../../src/assets/viagem.jpeg";
const posts = [
    {
      titulo: "Dicas para viagens seguras",
      resumo: "Confira como aproveitar cada momento da sua viagem com segurança.",
      imagem: viagemImg,
      data: "10 Ago 2025",
    },
    {
      titulo: "Novas rotas disponíveis",
      resumo: "Agora você pode explorar novos destinos com muito mais facilidade.",
      imagem: viagemImg,
      data: "05 Ago 2025",
    },
    {
      titulo: "Promoção de recargas",
      resumo: "Aproveite descontos exclusivos nas recargas de viagem.",
      imagem: viagemImg,
      data: "01 Ago 2025",
    },
  ];
  
  export default function PostsRecentes() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#640000]">
          Posts Recentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(({ titulo, resumo, imagem, data }, i) => (
            <div
              key={i}
              className="bg-[#e8ecec] shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img src={imagem} alt={titulo} className="w-full h-40 object-cover" />
              <div className="p-4">
                <span className="text-xs text-gray-500">{data}</span>
                <h3 className="text-lg font-semibold text-[#640000] mt-1">
                  {titulo}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{resumo}</p>
                <button className="mt-4 text-sm font-medium text-[#640000] hover:underline">
                  Ler mais →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  