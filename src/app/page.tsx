"use client";

import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen text-white font-sans overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ContactSection />
    </main>
  );
}
