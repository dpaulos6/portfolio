import Title from './Title.tsx'
import { ProjectsData } from '../lib/projectsData.ts'
import Card from './ui/Card.tsx'

function Projects() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Title>Projects</Title>
      </div>
      <div className="mb-16 border-2 border-amber-200">
        <div
          className={
            'flex flex-grow flex-col items-center justify-center gap-4'
          }
        >
          {ProjectsData.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.img}
              link={project.sourceCode}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
