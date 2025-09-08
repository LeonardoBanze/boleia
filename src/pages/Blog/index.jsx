export default function BlogPage() {
    return (
      <section className="font-poppins">
  
        {/* Banner */}
        <div className="relative h-64 md:h-80 w-full">
          <img
            src="/banner-blog.jpg"
            alt="Banner Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold">Nosso Blog</h1>
          </div>
        </div>
  
        {/* Introdução */}
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Últimos Artigos</h2>
          <p className="text-gray-600 leading-relaxed">
            Fique por dentro das novidades, dicas e conteúdos exclusivos para
            melhorar seu conhecimento e negócios.
          </p>
        </div>
  
        {/* Lista de Posts */}
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src="/post1.jpg" alt="Post 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Tendências de Tecnologia para 2025</h3>
              <p className="text-gray-600 mb-4">
                Veja as principais tecnologias que irão transformar o mercado nos próximos anos.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Ler mais →</a>
            </div>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src="/post2.jpg" alt="Post 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Como Criar um Site Profissional</h3>
              <p className="text-gray-600 mb-4">
                Guia prático para desenvolver um site bonito, rápido e responsivo.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Ler mais →</a>
            </div>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src="/post3.jpg" alt="Post 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Marketing Digital para Iniciantes</h3>
              <p className="text-gray-600 mb-4">
                Estratégias simples para começar a atrair clientes online.
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Ler mais →</a>
            </div>
          </div>
        </div>
  
      </section>
    );
  }
  