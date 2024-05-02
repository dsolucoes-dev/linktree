import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dsoluções - Desenvolvimento de Software e Consultoria em TI",
  description:
    "Desenvolvimento de software e consultoria em TI para empresas de todos os tamanhos.",
  keywords: ["desenvolvimento de software", "consultoria em ti", "dsoluções"],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
