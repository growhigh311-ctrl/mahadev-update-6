import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import fs from 'fs';
import path from 'path';
import Script from "next/script";

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
  metadataBase: new URL('https://mahadevbookie.site'),
  alternates: { canonical: '/' },
  verification: {
    google: "4iT5h3LxVznzXfFDt2cmnhF9_M_7aAtYMecZa7UgZXQ",
  },
  title: "Mahadev Bookie | Online Cricket Betting, Casino & Sports Betting",
  description: "Join Mahadev Bookie for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, and fast withdrawals in India.",
  keywords: "Mahadev Book, Mahadev Book ID, Mahadev Book Login, Mahadev Book Register, Buy Mahadev Book ID",
  authors: [{ name: "Mahadev Book" }],
  creator: "Mahadev Book",
  robots: "index, follow",
  openGraph: {
    title: "Mahadev Bookie | Online Cricket Betting, Casino & Sports Betting",
    description: "Join Mahadev Bookie for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, and fast withdrawals in India.",
    url: "https://mahadevbookie.site",
    siteName: "Mahadev Bookie",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaPath = path.join(process.cwd(), 'schema codes', 'homepage.txt');
  let homepageSchema = '';
  try {
    if (fs.existsSync(schemaPath)) {
      homepageSchema = fs.readFileSync(schemaPath, 'utf8')
        .replace(/<script[^>]*>/i, '')
        .replace(/<\/script>/i, '')
        .trim();
    }
  } catch (err) {
    console.error('Error reading homepage schema:', err);
  }

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        {homepageSchema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: homepageSchema }}
          />
        ) : null}
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-amber-300">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MVJTN6DXDV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MVJTN6DXDV');
          `}
        </Script>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
