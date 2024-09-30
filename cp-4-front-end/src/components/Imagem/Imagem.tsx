import Image from 'next/image';

type ImagemProps = {
    url: string;
}

export default function Imagem({ url }: ImagemProps) {
    return (
        <Image
            src={url}
            alt="Imagem do dia da nasa"
            width={500}
            height={500}
        />
    )
}