import Title from './Title.tsx'
import { ProjectsData } from '../lib/projectsData.ts'
import Card from './ui/Card.tsx'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function Projects() {
  return (
    <>
      <div className="flex items-center justify-center gap-4">
        <Title>Projects</Title>
      </div>
      <div className="mx-auto mb-16 max-w-2xl">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
          <Masonry
            gutter="1rem"
            className={
              'mx-auto grid w-fit grid-cols-2 items-start justify-center'
            }
          >
            {ProjectsData.map((project) => (
              <Card
                key={project.id}
                project={project}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  )
}

export default Projects
