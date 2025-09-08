import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left Image */}
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-orange-800 font-medium">Visao</p>
              </div>
            </div>

            {/* Top Right Image */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-blue-800 font-medium">Quem somos</p>
              </div>
            </div>

            {/* Bottom Full Width */}
            <div className="col-span-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-purple-800 font-semibold text-lg">Valores</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2">
                Quem Somos
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                BoleiaChain
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Na BoleiaChain, acreditamos no poder da educação digital para transformar vidas e carreiras. 
              Nossa plataforma conecta estudantes e profissionais a oportunidades de aprendizado inovadoras, 
              proporcionando uma experiência educacional única e personalizada.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Oferecemos cursos online de alta qualidade com metodologia comprovada
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Conectamos estudantes a mentores especialistas em suas áreas
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Proporcionamos certificações reconhecidas pelo mercado
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  Mantemos uma comunidade ativa de aprendizado colaborativo
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;