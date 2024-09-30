import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CP4",
  description: "Projeto Next do CP4 de Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
