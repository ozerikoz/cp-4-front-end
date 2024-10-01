import Link from "next/link";

import "../../app/globals.css";

export default function Menu() {
  return (
    <nav className="flex flex-row items-center gap-4 text-slate-50 py-4 font-bold">
      <ul className="flex flex-row justify-between w-full px-16">
        <li>
          <Link href="/catastrofes_planetarias">Catástrofes Planetárias no Passado Recente</Link>
        </li>
        <li>
          <Link href="/aproximacao_venus">
            Aproximação de Vênus e sua Relação com a História da Terra
          </Link>
        </li>
        <li>
          <Link href="/pertubacoes_gravitacionais">Pertubações Gravitacionais entre Marte e a Terra</Link>
        </li>
        <li>
          <Link href="/calculo">Cálculo de Forças Gravitacionais</Link>
        </li>
      </ul>
    </nav>
  );
}
