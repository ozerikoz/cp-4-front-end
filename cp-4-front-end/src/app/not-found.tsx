import Link from "next/link";
import errorImg from "/public/img/error.png";
import Imagem from "@/components/Imagem/Imagem";

import "./globals.css";

export default function NotFound() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center ">
      <Imagem src={errorImg.src} alt={"Imagem de erro"} />
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl text-white text-center font-bold">
          Página não encontrada
        </h1>
        <Link
          href="/"
          className="px-4 py-2 bg-slate-500 rounded-full border-2 border-slate-900 font-bold text-white text-lg"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
