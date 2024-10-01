'use client';

import React, { useEffect, useState } from 'react';

const Venus: React.FC = () => {
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
      <h1 className="text-3xl font-bold mb-4">Aproximação de Vênus e sua Relação com a História da Terra</h1>
      <p className="text-lg mb-4">
        Um dos aspectos mais controversos da teoria de Immanuel Velikovsky é a sua afirmação de que Vênus foi expelido
        do planeta Júpiter como um cometa, passando perigosamente perto da Terra em torno de 1500 a.C. Ele argumentou
        que essa aproximação causou grandes perturbações gravitacionais que provocaram catástrofes em escala global.
      </p>
      <p className="text-lg mb-4">
        Velikovsky correlacionou essa suposta interação com eventos bíblicos, como as pragas do Egito e a abertura do
        Mar Vermelho durante o Êxodo. Ele sugeriu que a força gravitacional de Vênus pode ter causado enormes marés e
        outros fenômenos, como a escuridão repentina descrita nas pragas. Além disso, a proximidade de Vênus teria
        provocado terremotos e erupções vulcânicas, afetando civilizações de várias partes do mundo.
      </p>
      <p className="text-lg mb-4">
        Velikovsky também sugeriu que mitos de outras culturas antigas, como os astecas, maias e gregos, guardavam
        relatos de uma grande catástrofe celestial. Ele argumentou que os deuses dessas culturas eram, na verdade,
        representações de corpos celestes, e que suas interações violentas no céu impactaram diretamente a Terra. Vênus,
        por exemplo, era frequentemente associado à deusa do amor e da guerra, refletindo sua natureza dual como uma
        força de criação e destruição.
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

export default Venus;
