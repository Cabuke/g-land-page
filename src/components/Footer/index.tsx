import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; 2024 Habacuque Developer. Todos os direitos reservados.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            Termos de Serviço
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
