import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import SplashScreen from "@/components/SplashScreen";
import AnimatedLogoBackground from "@/components/AnimatedLogoBackground";
import { Orbitron, Montserrat } from "next/font/google";

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
        <SplashScreen />
        <SpaceBackground />
        <AnimatedLogoBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}