import React from 'react';
import AddressCarousel from './CarouselEndereco';
import { useRouter } from 'next/router';

const Rodape = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-lg border-b-2 font-semibold mb-4">Onde Estamos</h2>
            <div className='text-gray-300 ml-8'>
              <AddressCarousel />
            </div>
          </div>
          <div>
            <h2 className="text-lg border-b-2 font-semibold mb-4">Mapa do Site</h2>
            <ul className='text-gray-300'>
              <li><NavLink href="/">Home</NavLink></li>
              <li><NavLink href="/sobre-nos">Sobre Nós</NavLink></li>
              <li><NavLink href="/onde-estamos">Onde Estamos</NavLink></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 border-b-2">Contato</h2>
            <span className='text-gray-300'>
              <p>Email: contato@lionsseminovos.com.br</p>
              <p className='grid grid-cols-1'>Telefone: 0800-454-0505 / +1 (689) 266-0529</p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const NavLink = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={`ml-4 ${router.pathname === href ? 'font-bold' : ''}`}>
      {children}
    </a>
  );
};

export default Rodape;
