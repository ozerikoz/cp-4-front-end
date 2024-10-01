'use client';

import React, { useState } from 'react';

const Calculo: React.FC = () => {
  const [distance, setDistance] = useState<string>('');
  const [force, setForce] = useState<string | null>(null);

  const calculateGravitationalForce = () => {
    const G = 6.674 * Math.pow(10, -11); // Constante gravitacional
    const m1 = 5.972 * Math.pow(10, 24); // Massa da Terra (kg)
    const m2 = 4.867 * Math.pow(10, 24); // Massa de Vênus (kg)
    const r = parseFloat(distance) * 1000; // Converter a distância para metros e garantir que é um número

    if (isNaN(r) || r === 0) {
      alert("Por favor, insira uma distância válida.");
      return;
    }

    const F = (G * m1 * m2) / Math.pow(r, 2); // Fórmula de Newton

    // Função para formatar o número
    const formatForce = (value: number) => {
      if (value >= 1e12) {
        return (value / 1e12).toFixed(2) + ' trilhões de Newtons';
      } else if (value >= 1e9) {
        return (value / 1e9).toFixed(2) + ' bilhões de Newtons';
      } else if (value >= 1e6) {
        return (value / 1e6).toFixed(2) + ' milhões de Newtons';
      } else {
        return value.toLocaleString() + ' Newtons';
      }
    };

    setForce(formatForce(F));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Cálculo de Forças Gravitacionais</h1>
      <p className="text-lg mb-4">
        De acordo com a teoria de <strong>Immanuel Velikovsky</strong>, eventos catastróficos na Terra, como terremotos e
        tsunamis, poderiam ter sido causados pela interação gravitacional com corpos celestes próximos, como o planeta
        Vênus. Velikovsky especulou que a aproximação de Vênus à Terra, por exemplo, poderia ter gerado perturbações 
        gravitacionais extremas, influenciando o planeta e provocando desastres naturais em uma escala global.
      </p>
      <p className="text-lg mb-4">
        Embora Velikovsky não tenha utilizado a fórmula matemática de Newton, podemos usar a <strong>Lei da Gravitação Universal</strong>
        para ilustrar como forças gravitacionais atuam entre dois corpos massivos, como a Terra e Vênus. A força é
        calculada pela fórmula:
      </p>
      <pre className="bg-gray-100 p-2 rounded">
        F = (G * m1 * m2) / r²
      </pre>
      <p className="text-lg mb-4">
        Onde:
        <ul className="list-disc pl-6">
          <li><strong>F</strong> é a força gravitacional entre os dois corpos (em Newtons).</li>
          <li><strong>G</strong> é a constante gravitacional: 6.674 × 10⁻¹¹ Nm²/kg².</li>
          <li><strong>m1</strong> é a massa da Terra: 5.972 × 10²⁴ kg.</li>
          <li><strong>m2</strong> é a massa de Vênus: 4.867 × 10²⁴ kg.</li>
          <li><strong>r</strong> é a distância entre os dois corpos (em metros).</li>
        </ul>
      </p>
      <p className="text-lg mb-4">
        Ao aplicar essa fórmula, podemos estimar a magnitude da força gravitacional entre Vênus e a Terra com base na
        distância entre eles. Isso nos ajuda a entender, de forma quantitativa, a influência que grandes corpos celestes
        podem exercer uns sobre os outros, reforçando as especulações de Velikovsky sobre os impactos que interações
        cósmicas poderiam ter na Terra.
      </p>

      <label className="block mb-2 text-lg" htmlFor="distance">
        Distância (em km):
      </label>
      <input
        id="distance"
        type="text"
        value={distance}
        onChange={(e) => setDistance(e.target.value.replace(/^0+/, ''))}
        className="border p-2 mb-4 w-full"
        placeholder="Digite a distância em km"
      />
      <button onClick={calculateGravitationalForce} className="bg-blue-500 text-white p-2 rounded">
        Calcular Força
      </button>

      {force && (
        <p className="mt-4">
          A força gravitacional entre a Terra e Vênus é de <strong>{force}</strong>.
        </p>
      )}
    </div>
  );
};

export default Calculo;
