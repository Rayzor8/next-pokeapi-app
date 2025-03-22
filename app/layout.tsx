import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "sonner";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | PokeExplorer",
    default: "PokeExplorer - Explore Pokemon with a modern web application",
  },
  description: "Explore Pokemon with a modern web application built with Next.js",
  keywords: ["pokemon", "pokedex", "nextjs", "react"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} antialiased flex flex-col min-h-screen justify-between`}
      >
        <ThemeProvider defaultTheme="system" storageKey="pokemon-theme">
          <Navbar />
          <main className="container mx-auto px-4 py-6 flex-1">{children}</main>
          <Footer />
          <Toaster closeButton richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
