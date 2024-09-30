import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><Link href="">Catástrofes Planetárias no Passado Recente</Link></li>
                <li><Link href="/">Aproximação de Vênus e sua Relação com a História da Terra</Link></li>
                <li><Link href="/">Pertubações Gravitacionais entre Marte e a Terra</Link></li>
                <li><Link href="/">Cálculo de Forças Gravitacionais</Link></li>
            </ul>
        </nav>
    )
}