import React, { useState } from "react";
import Image from "next/image";

const Modal = ({ isOpen, onClose, loja }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 sm:p-8 rounded-lg max-w-md w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="mr-0 md:mr-6 mb-4 md:mb-0">
            <Image
              src={loja.imagem}
              alt={loja.nome}
              width={200}
              height={150}
              className="rounded-md object-cover"
              layout="responsive"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{loja.nome}</h2>
            <p className="text-sm mb-2">Endereço: {loja.endereco}</p>
            <p className="text-sm mb-2">Cidade: {loja.cidade}</p>
            <p className="text-sm mb-2">
              Horário de Funcionamento: {loja.horario}
            </p>
            <p className="text-sm mb-2">Telefone: {loja.telefone}</p>
            <p className="text-sm mb-4">Email: {loja.email}</p>
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OndeEstamos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoja, setSelectedLoja] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const lojas = [
    {
      nome: "Lions Seminovos Barra Mansa",
      endereco:
        "R. Antônio Luiz Pires, S / N - Boa Vista I, Barra Mansa - RJ, 27332-360",
      cidade: " Barra Mansa - RJ",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/barra_mansa.webp",
    },
    {
      nome: "Lions Seminovos Campo Grande",
      endereco:
        "Estr. Rio do A, 2211 - Campo Grande, Rio de Janeiro - RJ, 23080-300",
      cidade: "Rio de Janeiro - RJ",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/campo_grande.webp",
    },
    {
      nome: "Lions Seminovos Duque de Caxias",
      endereco:
        "Rod. Washington Luíz, 1375 - Parque Duque, Duque de Caxias - RJ, 25085-008",
      cidade: "Duque de Caxias - RJ",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/DC.webp",
    },
    {
      nome: "Lions Seminovos Intendente Magalhães",
      endereco:
        "Estrada Intendente Magalhães n° 462, Rio de Janeiro - RJ, 21330-790",
      cidade: "Rio de Janeiro - RJ",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/intendente.webp",
    },
    {
      nome: "Lions Seminovos Niterói",
      endereco: "RJ-104, 2620 - Baldeador, Niterói - RJ, 24140-005",
      cidade: "Niterói - RJ",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/niteroi.webp",
    },
    {
      nome: "Lions Seminovos Nova Iguaçu",
      endereco:
        " Av Carlos Marques Rollo 137, Jardim Império, Nova Iguaçu - RJ, 26225-630 ",
      cidade: "Nova Iguaçu - RJ",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/nova_iguacu.webp",
    },
    {
      nome: "Lions Seminovos Orlando",
      endereco: "4201 W Colonial Dr, Orlando, FL 32808, Estados Unidos",
      cidade: "Orlando - FL",
      telefone: "+1 (689) 266-0529",
      horario:
        "Segunda a sexta das 9:00 às 20:00, Sábado das 9:00 às 18:00 e Domingo 10:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/Orlando.webp",
    },
    {
      nome: "Lions Seminovos Osasco",
      endereco: "Av. Pref. Hirant Sanazar, 3 - Umuarama, Osasco - SP",
      cidade: "Osasco - SP",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/Osasco.webp",
    },
    {
      nome: "Lions Seminovos Vila Prudente",
      endereco:
        "Avenida Professor Luiz Ignácio Anhaia Mello 4272, Vila Prudente - SP",
      cidade: "Vila Prudente - SP",
      telefone: "0800-454-0505",
      horario:
        "Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00",
      email: "contato@lionsseminovos.com.br",
      imagem: "/lojas/vila-prudente.webp",
    },
  ];

  const openModal = (index) => {
    setSelectedLoja(lojas[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const filteredLojas = lojas.filter(
    (loja) =>
      loja.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loja.cidade.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loja.endereco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Image
        src="/onde-estamos.png"
        alt="Logo"
        width={1280}
        height={150}
        className="w-full object-cover"
        layout="responsive"
      />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Buscar por nome, cidade ou endereço"
            className="w-full max-w-md p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLojas.map((loja, index) => (
            <div key={index} className="bg-white rounded-md shadow-md">
              <Image
                src={loja.imagem}
                alt={loja.nome}
                width={500}
                height={200}
                className="object-cover w-full h-48 rounded-t-md"
                layout="responsive"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{loja.nome}</h3>
                <p className="text-sm mb-2">{loja.endereco}</p>
                <button
                  onClick={() => openModal(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal} loja={selectedLoja} />
      )}
    </>
  );
};

export default OndeEstamos;
