import Title from '@/components/title'
import { Card } from '@/components/ui/card'
import { projects } from '@/lib/projects'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

function Projects() {
  return (
    <section>
      <div
        id={'projects'}
        className="flex items-center justify-center gap-4"
      >
        <Title>Projects</Title>
      </div>
      <div className="mx-auto mb-16 max-w-sm px-4 md:max-w-2xl">
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2 }}>
          <Masonry
            gutter="1rem"
            className={
              'mx-auto grid w-fit grid-cols-2 items-start justify-center'
            }
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                project={project}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  )
}

export default Projects
