export default function Footer() {
  return (
    <footer className="bg-[#333] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-[#00ffaa]">
              Jeronimo Fernandez
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Desarrollador Web Full-Stack
            </p>
          </div>

          {/* Links section */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-[#00ffaa] uppercase tracking-wide">
              Enlaces
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm text-gray-300 hover:text-[#00ffaa] transition-colors duration-200"
              >
                Inicio
              </a>
              <a
                href="#sobre-mi"
                className="text-sm text-gray-300 hover:text-[#00ffaa] transition-colors duration-200"
              >
                Sobre Mi
              </a>
              <a
                href="#my-stack"
                className="text-sm text-gray-300 hover:text-[#00ffaa] transition-colors duration-200"
              >
                Stack de tecnologías
              </a>
            </nav>
          </div>

          {/* Contact section */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-[#00ffaa] uppercase tracking-wide">
              Contacto
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Jerocorigliano@yahoo.com.ar</p>
              <p>{"+54 (011) 4974-7278"}</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 border-t border-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-xs text-gray-400">
              {"© "}
              {new Date().getFullYear()}
              {" Jeronimo Fernandez. Todos los derechos reservados."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
