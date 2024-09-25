import Link from "next/link";
import Image from "next/image";
import CarouselDepoimentos from "./CarouselDepoimentos";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Banner */}
      <div className="w-full">
        <Image 
          src="/banner4.jpg" 
          alt="Logo" 
          width={1980} 
          height={400} 
        />
      </div>

      {/* Texto e Botão Principal */}
      <div className="bg-gray-200 py-12 px-4 sm:px-6 md:px-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Fature muito com a melhor concessionária de seminovos do Brasil
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Um portal pensado em quem deseja crescer exclusivamente com a Lions
          Seminovos, a rede que mais cresce no Brasil.
        </p>
        <a
          href="https://api.whatsapp.com/send/?phone=5521973012359&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700">
            Clique aqui
          </button>
        </a>
      </div>

      {/* Benefícios */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Benefícios Exclusivos para Nossos Parceiros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="relative flex justify-center items-center">
              <Image
                src="/renda-extra.webp"
                alt="Renda Extra"
                width={70}
                height={70}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Ganhe uma Renda Extra
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Aproveite comissões atrativas ao vender veículos seminovos,
              aumentando seu rendimento sem precisar de grande investimento
              inicial.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="relative flex justify-center items-center">
              <Image
                src="/trabalhe-onde-quiser.webp"
                alt="Trabalhe de Onde Quiser"
                width={70}
                height={70}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Trabalhe de Onde Quiser
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Nossos parceiros têm a liberdade de trabalhar remotamente,
              acessando nossa plataforma e gerenciando suas vendas de qualquer
              lugar.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="relative flex justify-center items-center">
              <Image
                src="/lucro.webp"
                alt="Alto Potencial de Lucro"
                width={70}
                height={70}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              Alto Potencial de Lucro
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Com nossa estratégia de marketing e vendas, você pode alcançar um
              alto retorno sobre suas vendas em pouco tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos de Parceiros */}
      <section className="px-4 sm:px-6 md:px-12">
        <CarouselDepoimentos />
      </section>

      {/* Níveis */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-white text-center">
        <div className="bg-white pb-8 text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold">
            Conquiste níveis e aumente suas recompensas com a Lions Seminovos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="relative flex justify-center items-center">
              <Image
                src="/categoria-bronze.webp"
                alt="Nível Bronze"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
              Nível Bronze
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              O primeiro marco da sua jornada com a Lions. Ao atingir suas metas
              iniciais, você conquista o Nível Bronze, garantindo comissões
              atrativas e suporte básico.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5521973012359&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Saiba Mais
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="relative flex justify-center items-center">
              <Image
                src="/categoria-prata.webp"
                alt="Nível Prata"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
              Nível Prata
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Ao continuar batendo suas metas e crescendo nas vendas, você
              alcança o Nível Prata, com comissões mais vantajosas e benefícios
              adicionais.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5521973012359&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Saiba Mais
            </a>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="relative flex justify-center items-center">
              <Image
                src="/categoria-ouro.webp"
                alt="Nível Ouro"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
              Nível Ouro
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              O maior reconhecimento para os melhores parceiros. Ao atingir os
              mais altos patamares de desempenho, você conquista o Nível Ouro,
              com as maiores comissões e suporte completo.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5521973012359&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
