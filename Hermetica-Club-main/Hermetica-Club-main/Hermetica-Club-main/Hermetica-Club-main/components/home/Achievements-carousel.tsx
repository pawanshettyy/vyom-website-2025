"use client"
import EmblaCarousel from '../Carousel'

export function AchievementCarousel() {
  const OPTIONS = { dragFree: true, loop: true }

  return (
    <section id="achievements" className="relative overflow-hidden my-0 py-0">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Achievements
          </span>
        </h2>

        <EmblaCarousel options={OPTIONS} />
      </div>
    </section>
  )
}

