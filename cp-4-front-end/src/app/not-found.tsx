import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <p>Pagina nao encontrada</p>
            <Link href="/">Voltar para Home</Link>
        </div>
    )
}