import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://deniseestetica.com.br"),
  title: {
    default: "Dra. Denise | Estética Médica Premium",
    template: "%s | Dra. Denise",
  },
  description:
    "Gerenciar o envelhecimento com leveza, respeito à identidade e beleza real.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://deniseestetica.com.br/",
    title: "Dra. Denise | Estética Médica Premium",
    description:
      "Gerenciar o envelhecimento com leveza, respeito à identidade e beleza real.",
    siteName: "Dra. Denise",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Denise | Estética Médica Premium",
    description:
      "Gerenciar o envelhecimento com leveza, respeito à identidade e beleza real.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17931812231"
        />
        <Script id="google-gtag">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17931812231');`}
        </Script>
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} ${firaCode.variable} ${antic.variable} font-sans antialiased text-stone-800`}>
        {children}
      </body>
    </html>
  );
}





