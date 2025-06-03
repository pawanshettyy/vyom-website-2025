"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Target, Rotate3d } from "lucide-react";
import { MagicCard } from "./magicui/magic-card";

const aboutCards = [
  {
    title: "Nimbus",
    icon: Zap,
    description: [
      "Nimbus, the annual technical fest of NITH since 2010 is a groundbreaking amalgamation of science and technology with pure delight and enthusiasm.",
      "Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives for the betterment of society.",
    ],
  },
  {
    title: "Our Vision",
    icon: Eye,
    description: [
      "To create a vivid environment in which human resources can meet national expectations.",
      "With a long-term goal of environmental protection, we analyze all new possibilities in chemical engineering in conjunction with research strengths in various technologies, diverse polymers, biochemical and food engineering.",
    ],
  },
  {
    title: "Our Mission",
    icon: Target,
    description: [
      "We conceive new knowledge via innovative research and collaborative initiatives that provide opportunities for long-term interaction with academia and industry.",
      "We aim to train students on intellectual resources, serve society, and create environment-friendly technologies. The mission of Team Hermetica is to inculcate the best knowledge in society.",
    ],
  },
];

function AboutCard({ card, index }: { card: typeof aboutCards[0]; index: number }) {
  return (
    <MagicCard>
      <div
        className="group 
        p-12 rounded-lg shadow-md flex flex-col hover:bg-indigo-700/10 min-h-[570px]"
      >
        <div className="relative text-center">
          <div className=" group-hover:-translate-y-3 duration-700 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
            <card.icon className="w-8 h-8 text-white" />
          </div>

          <h3 className="group-hover:scale-110 duration-500 text-xl font-bold mb-6 text-purple-300">{card.title}</h3>

          <div className="space-y-2">
            {card.description.map((paragraph, i) => (
              <p key={i} className="group-hover:text-gray-100 text-gray-300 text-center leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

export default function AboutSection() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black via-indigo-600/20 to-black px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Us</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {aboutCards.map((card, index) => (
          <AboutCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
