import { CheckCircle } from 'react-feather';
import segurancaImg from '../../src/assets/seguranca.png'


const seguranca = [
  {
    titulo: "Motoristas Verificados",
    descricao: "Todos os motoristas passam por um processo rigoroso de verificação e aprovação.",
  },
  {
    titulo: "Veículos Inspecionados",
    descricao: "Garantimos que os veículos sejam seguros, limpos e bem mantidos.",
  },
  {
    titulo: "Pagamentos Seguros",
    descricao: "Tecnologia de pagamento protegida com criptografia para sua segurança.",
  },
  {
    titulo: "Suporte 24/7",
    descricao: "Nossa equipe está disponível a qualquer hora para resolver qualquer situação.",
  },
  {
    titulo: "Avaliações e Feedback",
    descricao: "Você pode ver avaliações reais e deixar comentários sobre suas viagens.",
  },
];

export default function SessaoSeguranca() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Imagem à esquerda */}
      <div className="w-full md:w-1/2">
        <img
          src={segurancaImg}
          alt="Segurança"
          className="w-full h-auto rounded shadow"
        />
      </div>

       {/* Lista de segurança à direita */}
       <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-[#640000] mb-8">Segurança</h2>
        <div className="space-y-6">
          {seguranca.map(({ titulo, descricao }, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Ícone dentro da caixa vermelha */}
              <div className="bg-[#640000] text-white p-2 rounded-lg">
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{titulo}</h3>
                <p className="text-gray-600">{descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
