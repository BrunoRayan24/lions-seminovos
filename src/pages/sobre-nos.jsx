import dynamic from 'next/dynamic';
import NavBar from '../components/NavBar';
import Rodape from '../components/Rodape';

const SobreNos = dynamic(() => import('../components/Sobre'));


export default function Agente() {
  return (
    <div>
      <NavBar />
      <SobreNos />
      <Rodape />
    </div>
  );
}
