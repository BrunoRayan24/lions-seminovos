import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const local = [
    {
      local: "R. Antônio Luiz Pires, S / N - Boa Vista I, 27332-360",
    },
    {
      local: "Estr. Rio do A, 2211 - Campo Grande, 23080-300",
    },
    {
      local: "Rod. Washington Luíz, 1375 - Parque Duque, 25085-008",
    },
    {
      local: "Estrada Intendente Magalhães n° 462, 21330-790",
    },
    {
      local: "RJ-104, 2620 - Baldeador, Niterói - RJ, 24140-005",
    },
    {
      local:
        "Av Carlos Marques Rollo 137, Jardim Império, Nova Iguaçu - RJ, 26225-630 ",
    },
    {
      local: "4201 W Colonial Dr, Orlando, FL 32808, Estados Unidos",
    },
    {
      local: "Av. Pref. Hirant Sanazar, 3 - Umuarama, Osasco - SP",
    },
    {
      local:
        "Avenida Professor Luiz Ignácio Anhaia Mello 4272, Vila Prudente - SP",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <Slider {...settings}>
        {local.map((local, index) => (
          <div key={index}>
            <p>{local.local}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
