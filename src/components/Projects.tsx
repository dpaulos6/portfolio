import Title from './Title.tsx'
import { ProjectsData } from '../lib/projectsData.ts'

function Projects() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Title>Projects</Title>
      </div>
      <div className="flex flex-col items-center">
        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className="mb-4"
          >
            <p className="font-bold">{project.title}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
