import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 group">
            <a href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#640000] to-[#8B0000] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 shadow-lg">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#640000] to-[#8B0000] rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-200"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#640000] to-[#8B0000] bg-clip-text text-transparent">
                BOLEIACHAIN
              </span>
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="/about">About</NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-[#640000] transition-all duration-200 flex items-center space-x-1 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <NavLink href="/solutions">Services</NavLink>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                isServicesOpen 
                  ? 'opacity-100 transform scale-100 translate-y-0' 
                  : 'opacity-0 transform scale-95 -translate-y-2 pointer-events-none'
              }`}>
                <div className="py-2">
                  <DropdownLink href="/yora" icon="📱">Yora App</DropdownLink>
                  <DropdownLink href="/bct" icon="⚡">BCT</DropdownLink>
                  <DropdownLink href="/bctflex" icon="🔗">BCTFlex</DropdownLink>
                </div>
              </div>
            </div>

            {/* Utilities dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsUtilitiesOpen(true)}
              onMouseLeave={() => setIsUtilitiesOpen(false)}
            >
              <button
                className="px-4 py-2 text-gray-700 hover:text-[#640000] transition-all duration-200 flex items-center space-x-1 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsUtilitiesOpen(!isUtilitiesOpen)}
              >
                <NavLink href="/utilities">Utilities</NavLink>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isUtilitiesOpen ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
                isUtilitiesOpen 
                  ? 'opacity-100 transform scale-100 translate-y-0' 
                  : 'opacity-0 transform scale-95 -translate-y-2 pointer-events-none'
              }`}>
                <div className="py-2">
                  <DropdownLink href="/value" icon="💡">Value Proposition</DropdownLink>
                  <DropdownLink href="/community" icon="👥">Community</DropdownLink>
                  <DropdownLink href="/safety" icon="🛡">Safety</DropdownLink>
                  <DropdownLink href="/sustainability" icon="🌱">Sustainability</DropdownLink>
                  <DropdownLink href="/ride" icon="💲">Pricing</DropdownLink>
                </div>
              </div>
            </div>

            <NavLink href="/contact">Contacts</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="/invest"
              className="relative px-6 py-2.5 bg-gradient-to-r from-[#640000] to-[#8B0000] text-white font-semibold rounded-xl hover:from-[#520000] hover:to-[#640000] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden"
            >
              <span className="relative z-10">Get BCT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Componentes auxiliares
function NavLink({ href, children, active = false }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        active
          ? 'text-[#640000] bg-[#640000]/5'
          : 'text-gray-700 hover:text-[#640000] hover:bg-gray-50'
      }`}
    >
      {children}
    </a>
  );
}

function DropdownLink({ href, children, icon, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#640000] hover:bg-gray-50 transition-all duration-200"
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{children}</span>
    </a>
  );
}
