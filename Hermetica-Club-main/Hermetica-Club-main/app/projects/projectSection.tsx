"use client"

import ProjectGrid from '@/components/projects/project-grid'
import { Button } from '@/components/ui/Button'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ProjectSection = ({ projects }: any) => {


  const LatestProjects = projects?.filter((project: any) => project?.year === "2024")
  const [filteredProjects, setFilteredProjects] = useState(LatestProjects)

  const filterHandler = (year: string) => {
    const filter = projects?.filter((project: any) => project?.year === year)
    setFilteredProjects(filter)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1
          }}
          transition={{ duration: 0.6 }}
          className='text-sm relative flex items-center flex-wrap gap-2 md:gap-4 my-6'>
          <Button
            onClick={() => filterHandler("2025")}
            className='text-sm bg-gradient-to-b from-indigo-400 duration-300 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            2k25
          </Button>
          <Button
            onClick={() => filterHandler("2024")}
            className='bg-gradient-to-b from-indigo-400 hover:from-indigo-600 to-indigo-700 rounded-full'
          >
            2k24
          </Button>
        </motion.div>
      </div >
      {/* Search Section */}
      < div className="container mx-auto px-4" >
        <ProjectGrid filteredProjects={filteredProjects} />
      </div >
    </>
  )
}

export default ProjectSection
