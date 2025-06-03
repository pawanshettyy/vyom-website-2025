import ProjectCard from "./ProjectCard"

export default function ProjectGrid({ filteredProjects }: { filteredProjects: any }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredProjects?.map((project: any) => (
        <ProjectCard
          project={project}
          key={project.name}
        />
      ))}
    </div>
  )
}

