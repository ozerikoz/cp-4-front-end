import Image from "next/image";

type ImagemProps = {
  src: string;
  alt: string;
};

export default function Imagem({ src, alt }: ImagemProps) {
  return <Image src={src} alt={alt} width={500} height={500} />;
}
