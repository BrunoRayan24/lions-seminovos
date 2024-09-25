import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselDepoimentos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-black">
      <h2 className="text-3xl font-bold mb-12 text-white text-center">
        Depoimentos de Nossos Parceiros
      </h2>

      <Slider {...settings}>
        <div className="p-6 rounded-lg shadow-lg bg-white mx-4">
          {" "}
          <p className="text-lg text-gray-700">
            “A Lions Seminovos me proporcionou as ferramentas e o suporte
            necessários para duplicar minhas vendas. O sistema é prático e
            eficiente.”
          </p>
          <p className="mt-4 font-bold">- João Silva, Parceiro desde 2022</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white mx-4">
          <p className="text-lg text-gray-700">
            “Graças à Lions Seminovos, consegui me tornar independente
            financeiramente. A flexibilidade no trabalho foi essencial para meu
            sucesso.”
          </p>
          <p className="mt-4 font-bold">
            - Maria Oliveira, Parceira desde 2021
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white mx-4">
          <p className="text-lg text-gray-700">
            “Trabalhar com a Lions Seminovos foi a melhor decisão que tomei. O
            suporte ao parceiro e as oportunidades de crescimento são
            incríveis.”
          </p>
          <p className="mt-4 font-bold">- Pedro Souza, Parceiro desde 2020</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white mx-4">
          <p className="text-lg text-gray-700">
            “A plataforma da Lions Seminovos facilitou muito a minha rotina de
            vendas, e a equipe de suporte é sempre muito atenciosa.”
          </p>
          <p className="mt-4 font-bold">- Ana Martins, Parceira desde 2019</p>
        </div>

        <div className="p-6 rounded-lg shadow-lg bg-white mx-4">
          <p className="text-lg text-gray-700">
            “Estou muito satisfeito com as oportunidades de crescimento que a
            Lions Seminovos me proporcionou. Recomendo para todos os
            vendedores.”
          </p>
          <p className="mt-4 font-bold">- Lucas Costa, Parceiro desde 2018</p>
        </div>
      </Slider>
    </section>
  );
}
