import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lotus Book - Lotus Book ID | Lotus Book Official",
  description: "Join Lotus Book for secure betting on cricket, casino & more. Fast login, UPI deposits & 24/7 support. Win big with Lotus Book.",
  keywords: "Lotus Book, Lotus Book ID, Lotus Book Login, Lotus Book Register, Buy Lotus Book ID",
  authors: [{ name: "Lotus Book" }],
  creator: "Lotus Book",
  robots: "index, follow",
  openGraph: {
    title: "Lotus Book - India's Most Trusted Online Betting Platform",
    description: "Join Lotus Book for secure betting on cricket, casino & more. Fast login, UPI deposits & 24/7 support. Win big with Lotus Book.",
    url: "https://mahadeevbook.com",
    siteName: "Lotus Book",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-amber-300">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
