"use client"
import { motion } from 'framer-motion'
import { SpaceBackground } from '@/components/SpaceBackground'
import { Button } from '@/components/ui/Button'
import React from 'react'
import { Events } from '@/data/Events'
import ProjectCard from '@/components/projects/ProjectCard'

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8 mt-12">
        {/* <motion.div */}
        {/*   initial={{ opacity: 0, x: -20, scale: 0.9 }} */}
        {/*   whileInView={{ */}
        {/*     opacity: 1, */}
        {/*     x: 0, */}
        {/*     scale: 1 */}
        {/*   }} */}
        {/*   transition={{ duration: 0.6 }} */}
        {/*   className='relative flex items-center gap-4 my-6'> */}
        {/*   <Button className='text-sm md:text-lg bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-500 to-indigo-700 rounded-full'> */}
        {/*     2k25 */}
        {/*   </Button> */}
        {/*   <Button className='text-sm md:text-lg bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'> */}
        {/*     2k24 */}
        {/*   </Button> */}
        {/* </motion.div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Events.map((events) => (
            <ProjectCard project={events} key={events.name} />
          ))}
        </div>
      </div>
    </div >
  )
}

export default EventsPage
