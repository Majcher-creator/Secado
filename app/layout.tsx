import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Secado Sp. z o.o. - Śląskie Centrum Dachowe | Hurtownia Dekarska",
  description: "Profesjonalna hurtownia dekarska i kompleksowe usługi dekarskie w województwie śląskim. Materiały dekarskie, blachodachówka, papa, gonty. Działamy od 2012 roku.",
  keywords: ["hurtownia dekarska", "usługi dekarskie", "blachodachówka", "dachy", "Dąbrowa Górnicza", "Śląsk", "papa", "gonty bitumiczne", "systemy rynnowe"],
  openGraph: {
    title: "Secado Sp. z o.o. - Śląskie Centrum Dachowe",
    description: "Profesjonalna hurtownia dekarska i kompleksowe usługi dekarskie w województwie śląskim. Działamy od 2012 roku.",
    type: "website",
    locale: "pl_PL",
    url: "https://www.secado.eu",
    siteName: "Secado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secado Sp. z o.o. - Śląskie Centrum Dachowe",
    description: "Profesjonalna hurtownia dekarska i kompleksowe usługi dekarskie",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
