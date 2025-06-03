import { AchievementCarousel } from "@/components/home/Achievements-carousel"
import DomainsSection from "../components/domains-section"
import AboutSection from "@/components/about-section"
import ClubCoordinator from "@/components/home/ClubCoordinator"
import HeroSection from "@/components/home/Hero"
import Work from "@/components/home/Work"


export default function LandingPage() {

  return (
    <main className="min-h-screen bg-black overflow-hidden font-['Space_Grotesk'] relative animate-appear">
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <AchievementCarousel />
      <Work />
      <ClubCoordinator />
    </main>
  )
}

