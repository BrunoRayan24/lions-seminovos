import dynamic from "next/dynamic";

const Home = dynamic(() => import("../components/homeComponents"));

const NavBar = dynamic(() => import("../components/NavBar"));
const Rodape = dynamic(() => import("../components/Rodape"));

const Inicio = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Rodape />
    </div>
  );
};

export default Inicio;
