import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Fira_Code, Antic } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
});

const antic = Antic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-antic",
});

export const metadata: Metadata = {
  title: "Dra. Denise | Estética Médica Premium",
  description: "Gerenciar o envelhecimento com leveza, respeito à identidade e beleza real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${montserrat.variable} ${firaCode.variable} ${antic.variable} font-sans antialiased text-stone-800`}>
        {children}
      </body>
    </html>
  );
}
