'use client';

import React, { useEffect, useState } from 'react';

const Marte: React.FC = () => {
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
      <h1 className="text-3xl font-bold mb-4">Perturbações Gravitacionais entre Marte e a Terra</h1>
      <p className="text-lg mb-4">
        Além de Vênus, Immanuel Velikovsky também acreditava que Marte desempenhou um papel significativo nas catástrofes
        que afetaram a Terra. Ele argumentou que Marte se aproximou da Terra por volta do século VIII a.C., após o
        período de distúrbios causado por Vênus. Velikovsky associou este novo cataclismo a eventos registrados em
        diversas culturas antigas, incluindo a Bíblia.
      </p>
      <p className="text-lg mb-4">
        Em particular, Velikovsky interpretou o relato bíblico em que Josué ordenou que o Sol e a Lua parassem como
        uma consequência de uma perturbação gravitacional causada por Marte. Ele sugeriu que a interação entre Marte e a
        Terra poderia ter causado uma desaceleração na rotação da Terra, resultando em um dia mais longo.
      </p>
      <p className="text-lg mb-4">
        Assim como Vênus, Marte teria influenciado profundamente as mitologias e crenças religiosas de muitas culturas
        antigas. Em várias civilizações, Marte foi associado a deuses da guerra, refletindo a destruição e o caos que
        este planeta teria causado ao passar perto da Terra. Para Velikovsky, essa série de encontros celestiais entre
        Marte e a Terra é uma explicação plausível para muitos dos fenômenos descritos em lendas e mitos antigos.
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

export default Marte;
