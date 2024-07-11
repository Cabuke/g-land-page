import React from "react";
import Link from "react-scroll/modules/components/Link";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#E5F9F7]/80 to-[#FAFAFA] text-gray-800 py-4 dark:bg-gradient-to-r dark:from-gray-900 dark:to-[#010A16]/90">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center">
        <p className="text-sm dark:text-gray-300 font-sf">
          &copy; 2024{" "}
          <Link
            activeClass="active"
            to="bottom"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer dark:hover:text-[#FAFAFA] hover:text-black"
          >
            Habacuque Developer.
          </Link>
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
