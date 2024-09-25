import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 p-4 flex items-center justify-between">
      <div className="flex items-center ml-4">
        <Link href="/">
          <Image src="/logo.webp" alt="Logo" width={100} height={50} />
        </Link>
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Ícone hambúrguer */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
          {/* Ícone hambúrguer */}
        </button>
      </div>

      {/* Menu lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-red-500 p-8 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
      {/* Menu lateral */}
        <button onClick={toggleMenu} className="text-white mb-8">
          {/* Ícone de fechar */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          {/* Ícone de fechar */}
        </button>
        <ul className="space-y-4">
          <li className="text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white">
            <Link href="/onde-estamos">Onde Estamos</Link>
          </li>
          <li className="text-white">
            <Link href="/sobre-nos">Sobre Nós</Link>
          </li>
        </ul>
      </div>

      <ul className="hidden md:flex space-x-4 justify-center flex-1">
        <li className="text-white px-2">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white px-2">
          <Link href="/onde-estamos">Onde Estamos</Link>
        </li>
        <li className="text-white px-2">
          <Link href="/sobre-nos">Sobre Nós</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
