import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceBackground from "@/components/SpaceBackground";
import SplashScreen from "@/components/SplashScreen";
import AnimatedLogoBackground from "@/components/AnimatedLogoBackground";
import { Orbitron, Montserrat } from "next/font/google";
import ProjectCard from "@/components/ProjectCard";

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
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-100"
            style={{
              backgroundImage: "url('/assets/space-bg.avif')",
              backgroundPosition: "bottom",
              filter: "brightness(1.1) contrast(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 pointer-events-none" />
        </div>
        <SplashScreen />
        <SpaceBackground />
        <AnimatedLogoBackground />
        <Navbar />
        <div className="max-w-md mx-auto my-8">
          <ProjectCard project={{
            name: "Hermetica Sample Project",
            image: "/default-image.jpg",
            rating: 5,
            link: "#"
          }} />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}