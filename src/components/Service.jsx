import parkImg from "../../src/assets/park.png";
import carImg from "../../src/assets/car.png";
import motoImg from "../../src/assets/moto.png";
import infoImg from "../../src/assets/info.png";
import rentImg from "../../src/assets/rent.png";
import phoneImg from "../../src/assets/phone.png";

const servicos = [
  {
    titulo: "Viagens",
    texto: "Viaje conforme sua conveniencia",
    imagem: carImg,
  },
  {
    titulo: "Entregas",
    texto: "Garanta que suas encomendas cheguem ao destino certo.",
    imagem: motoImg,
  },
 
  {
    titulo: "Pick & Go",
    texto: "Alugue e va em minutos.",
    imagem: rentImg,
  },
   {
    titulo: "Estacionamento",
    texto: "Estacione facilmente.",
    imagem: parkImg,
  },
  {
    titulo: "Informe na Via",
    texto: "Compartilhe momentos especiais durante suas jornadas.",
    imagem: infoImg,
  },
  {
    titulo: "Recargas",
    texto: "Economize e ganhe com recargas de viagem.",
    imagem: phoneImg,
  },
];

export default function Servicos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#640000]">
        Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicos.map(({ titulo, texto, imagem }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-[#e8ecec] shadow-md rounded p-4"
          >
            {/* Imagem à esquerda */}
            <img
              src={imagem}
              alt={titulo}
              className="w-20 h-20 object-cover rounded"
            />
            {/* Título e descrição */}
            <div>
              <h3 className="text-lg font-semibold text-[#640000] mb-1">
                {titulo}
              </h3>
              <p className="text-sm text-gray-700">{texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

