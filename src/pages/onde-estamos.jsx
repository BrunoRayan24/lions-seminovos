import dynamic from 'next/dynamic';
import NavBar from '../components/NavBar';
import Rodape from '../components/Rodape';

const OndeEstamos = dynamic(() => import('../components/ondeEstamosComponents'));


export default function inicio() {
  return (
    <div>
      <NavBar />
      <OndeEstamos />
      <Rodape />
    </div>
  );
}
