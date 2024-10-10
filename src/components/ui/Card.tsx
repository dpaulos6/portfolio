import { Github } from 'lucide-react'
import React from 'react'
import { Project } from '../../interfaces/projects'

interface ProjectProps {
  project: Project
}

const Card: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-input group relative flex h-fit min-h-80 w-full flex-col overflow-hidden rounded-xl border-2 shadow-md">
      {project.link && (
        <a
          href={project.link}
          className="bg-input hover:bg-border absolute right-2 top-2 z-10 rounded-full p-2 transition md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:opacity-100"
        >
          <Github className="h-5 w-5" />
        </a>
      )}
      <div className="relative h-52 w-full overflow-hidden">
        {/* <div className="absolute bottom-0 left-0 z-10 w-full h-16 from-input bg-gradient-to-t"></div> */}
        <img
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          src={project.img}
          alt={project.title}
        />
      </div>
      <div className="z-10 flex h-full flex-col justify-between p-4">
        <div className="mb-2 line-clamp-1 text-xl font-bold">
          {project.title}
        </div>
        <p className="line-clamp-5 text-lg">{project.description}</p>
      </div>
    </div>
  )
}

export default Card
