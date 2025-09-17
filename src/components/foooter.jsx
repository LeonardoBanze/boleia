import { Facebook, Linkedin, Twitter } from 'react-feather';

export default function Foooter() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10">

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Coluna 1-2: Logo e descrição */}
        <div className="md:col-span-2">
          {/* <img src="../../src/assets/logo.png" alt="BoleiaChain Logo" className="h-10 mb-4" /> */}

          <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-[#640000] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-800">BOLEIACHAIN</span>
            </a>
          <p className="text-gray-600 mb-4">
            Empowering urban mobility across Africa with innovative ride-sharing and delivery solutions. Building sustainable communities through technology and African innovation.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="border border-gray-300 rounded p-2 hover:bg-[#640000] hover:text-white transition flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            
            <a
              href="#"
              className="border border-gray-300 rounded p-2 hover:bg-[#640000] hover:text-white transition flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              className="border border-gray-300 rounded p-2 hover:bg-[#640000] hover:text-white transition flex items-center justify-center"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Colunas de links */}
        <div>
          <h3 className="font-bold text-[#640000] mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/services">Services</a></li>
            {/* <li><a href="#">Privacy Policy</a></li> */}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#640000] mb-4">Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/yora">Yora</a></li>
            <li><a href="#">Mailing List</a></li>
            <li><a href="#">Social Media Links</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#640000] mb-4">Products</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/yora">Yora</a></li>
            <li><a href="/bct">BCTFlex</a></li>
            <li><a href="#">BCT</a></li>
            <li><a href="#">Newsletter</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#640000] mb-4">Help</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Copyright</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Mailing List</a></li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="text-center py-6 border-t border-gray-200 mt-10 text-sm text-gray-600">
        © 2024 <span className="font-bold text-[#640000]">BoleiaChain</span>
      </div>
    </footer>
  );
}
