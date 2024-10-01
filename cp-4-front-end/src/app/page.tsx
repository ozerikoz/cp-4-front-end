"use client";

import { useEffect, useState } from "react";
import { ApodProps } from "@/apod_type";
import Imagem from "@/components/Imagem/Imagem";

export default function Home() {
  const [apodData, setApodData] = useState<ApodProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");

        const data = await response.json();
        setApodData(data);
      } catch (erro) {
        console.log(erro);
      }
    };

    fetchData();
  }, []); // Executa apenas uma vez após a montagem

  return (
    <section className="flex flex-col items-center p-8 gap-12 bg-slate-900 text-slate-50">
      <h1 className="text-3xl font-bold mb-4">
        Introdução sobre o Livro Worlds in Collision
      </h1>
      <div className="flex flex-col items-center justify-center px-4 md:flex-row md:px-8 py-4 gap-6 w-full">
        <p className="text-lg text-center mb-4 max-w-2xl">
          Worlds in Collision, publicado em 1950, é uma das obras mais
          controversas e ousadas da história da ciência e da literatura. Escrito
          por Immanuel Velikovsky, o livro propõe que, no passado recente da
          Terra, catástrofes de escala global foram causadas por interações
          violentas entre planetas do sistema solar, como Vênus e Marte. Essas
          catástrofes, segundo Velikovsky, não são apenas fruto de lendas e
          mitologias antigas, mas registros de eventos astronômicos reais que
          moldaram a história e o destino da humanidade.
        </p>
        <p className="text-lg text-center mb-4 max-w-2xl">
          Velikovsky sugere que há cerca de 3.500 anos, Vênus foi expulso de
          Júpiter e entrou em uma trajetória que o levou a uma aproximação
          perigosa com a Terra, causando perturbações gravitacionais que geraram
          terremotos, maremotos, erupções vulcânicas e mudanças climáticas
          dramáticas. Além disso, Velikovsky correlaciona esses eventos com
          passagens da Bíblia, mitos gregos, tradições astecas e outras
          histórias antigas, argumentando que os relatos de catástrofes em
          várias culturas são, na verdade, memórias de interações cósmicas.
        </p>
        <p className="text-lg text-center mb-4 max-w-2xl">
          Embora suas ideias tenham sido amplamente rejeitadas pelos cientistas
          da época, Worlds in Collision teve um impacto duradouro na cultura
          popular e continua a gerar debates até os dias de hoje. A obra
          questiona os fundamentos da ciência tradicional e desafia o
          entendimento convencional sobre a estabilidade do sistema solar,
          sugerindo que eventos catastróficos e repentinos desempenharam um
          papel crucial na história do planeta Terra.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-4 md:flex-row md:px-8 py-4 gap-6 w-full">
        {apodData.map((apod) => (
          <div key={apod.title} className="flex flex-col items-center">
            <Imagem src={apod.url} alt={apod.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
