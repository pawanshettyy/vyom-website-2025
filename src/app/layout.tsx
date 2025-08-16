import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import SplashScreen from "@/components/SplashScreen";
import AnimatedLogoBackground from "@/components/AnimatedLogoBackground";
import { Orbitron, Montserrat } from "next/font/google";
import ClientOnly from "@/components/ClientOnly";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"], // Use bold weights for the title
  variable: "--font-orbitron",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Vyom Voyage - Exploring the Cosmos",
  description: "Join Vyom Voyage on our journey through space and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${montserrat.variable}`}>
      <body>
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{
              backgroundImage: "url('/assets/space-bg.avif')",
              filter: "brightness(0.8) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[1px]" />
        </div>
        <ClientOnly>
          <SplashScreen />
          <SpaceBackground />
          <ClientOnly>
            <AnimatedLogoBackground />
          </ClientOnly>
        </ClientOnly>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}