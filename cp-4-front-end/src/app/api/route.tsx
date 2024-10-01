import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?count=3&api_key=InxMVgAdl2ALeiKCAHnSgMmlRXxN3XNDG6Egj1rD"
    );

    const apod = await response.json();

    return NextResponse.json(apod);
  } catch (error) {
    console.error("Erro ao chamar API", error);
    return NextResponse.json(
      { message: "Erro no GET das imagens do dia" },
      { status: 500 }
    );
  }
}
