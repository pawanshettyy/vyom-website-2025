import { SpaceBackground } from '@/components/SpaceBackground'
import { db } from '@/lib/db/db'
import { projectsTable } from '@/lib/db/schema'
import React from 'react'
import ProjectSection from './projectSection'

const ProjectPage = async () => {
  const projects = await db.select().from(projectsTable)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden animate-appear">
      <SpaceBackground />

      {/* Filter Section */}
      <ProjectSection projects={projects} />
    </div >
  )
}

export default ProjectPage
