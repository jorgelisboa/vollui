import type { Metadata } from "next";
import { Karla, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  title: "Vollui | Segurança eletrônica e portaria remota",
  description:
    "Controle de acesso, portaria virtual e autônoma, CFTV e monitoramento para condomínios, residências de alto padrão e empresas.",
  openGraph: {
    title: "Vollui | Segurança eletrônica e portaria remota",
    description:
      "Projetos de segurança sob medida para condomínios, residências e empresas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
