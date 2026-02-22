import type { Metadata } from "next";
import { Pacifico, Raleway } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "US Meeting Oron",
  description:
    "US Meeting Oron - rassemblement de véhicules américains à Oron-La-Ville, en Suisse",
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
      <body className={`${raleway.variable} ${pacifico.variable} antialiased`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
