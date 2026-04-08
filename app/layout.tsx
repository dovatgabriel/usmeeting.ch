import type { Metadata } from "next";
import { Pacifico, Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

const SITE_URL = "https://usmeeting.ch";
const SITE_NAME = "US Meeting Oron";
const DESCRIPTION =
  "Le grand rassemblement de véhicules américains de Suisse romande. Chaque année à Oron-La-Ville, venez célébrer la passion automobile américaine.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "US Meeting Oron",
    "rassemblement véhicules américains",
    "car show Suisse",
    "Oron-la-Ville",
    "voitures américaines",
    "Harley Davidson",
    "muscle car",
    "classic car",
    "Suisse romande",
    "Amicale Live to Ride",
  ],
  authors: [{ name: "Amicale Live to Ride" }],
  creator: "Amicale Live to Ride",
  publisher: "US Meeting Oron",
  alternates: {
    canonical: SITE_URL,
    languages: { "fr-CH": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CH" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${raleway.variable} ${pacifico.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
