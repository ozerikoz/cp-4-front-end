'use client';

import React, { useEffect, useState } from 'react';

const Catastrofes: React.FC = () => {
  const [nasaImage, setNasaImage] = useState<{ imageUrl: string; title: string; explanation: string } | null>(null);

  useEffect(() => {
    const fetchNasaImage = async () => {
      try {
        const response = await fetch('/api/route'); // Chama o endpoint da API
        const data = await response.json();
        setNasaImage(data);
      } catch (error) {
        console.error('Erro ao carregar a imagem da NASA:', error);
      }
    };

    fetchNasaImage();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Catástrofes Planetárias no Passado Recente</h1>
      <p className="text-lg mb-4">
        Immanuel Velikovsky desafiou a visão tradicional da ciência ao propor que eventos astronômicos catastróficos
        ocorreram no passado recente da Terra, há apenas alguns milhares de anos. Em sua obra, ele defendeu que não
        foram processos lentos e graduais que moldaram o planeta, mas sim interações dramáticas e violentas entre a
        Terra e outros corpos celestes, como Vênus e Marte.
      </p>
      <p className="text-lg mb-4">
        Velikovsky sugere que civilizações antigas, de várias partes do mundo, presenciaram e registraram esses
        cataclismos. Relatos sobre o fim dos tempos, grandes dilúvios e eventos como o Sol parando no céu seriam, de
        fato, descrições de fenômenos astronômicos reais, como a aproximação de planetas. As mitologias, textos
        religiosos e histórias antigas seriam evidências de que a humanidade vivenciou essas catástrofes.
      </p>
      <p className="text-lg mb-4">
        Entre os eventos que Velikovsky correlaciona a esses cataclismos estão o dilúvio bíblico, que ele sugere ter
        sido causado pela influência de Vênus sobre a Terra, além de terremotos, erupções vulcânicas e tsunamis de
        proporções globais, que teriam sido desencadeados por distúrbios gravitacionais. Ele também sugeriu que esses
        eventos ocorreram em ciclos, repetindo-se ao longo dos séculos à medida que diferentes corpos celestes
        interagiam com a Terra.
      </p>

      {nasaImage ? (
        <>
          <h2 className="text-2xl font-bold mb-4">{nasaImage.title}</h2>

          <p className="text-lg mb-4">{nasaImage.explanation}</p>
        </>
      ) : (
        <p>Carregando imagem da NASA...</p>
      )}
    </div>
  );
};

export default Catastrofes;
