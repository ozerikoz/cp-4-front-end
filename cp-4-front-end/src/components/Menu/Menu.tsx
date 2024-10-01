import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="/catastrofes_planetarias">Catástrofes Planetárias no Passado Recente</Link></li>
                <li><Link href="/aproximacao_venus">Aproximação de Vênus e sua Relação com a História da Terra</Link></li>
                <li><Link href="/pertubacoes_gravitacionais">Pertubações Gravitacionais entre Marte e a Terra</Link></li>
                <li><Link href="/calculo">Cálculo de Forças Gravitacionais</Link></li>
            </ul>
        </nav>
    )
}